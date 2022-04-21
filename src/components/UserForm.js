import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import "./UserForm.css";
import { emailPattern, phonePattern, birthdayPattern } from "../utils/Regex";
import { useNavigate } from "react-router-dom";
import { saveUserDetails } from "../utils/storingUtils";
import { Button, Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const ThreeMbInBytes = 3000000;
const CustomTextField = styled(TextField)({
    input: {
        color: '#556B2F',
    },
    '& label': {
        color: '#556B2F',
    },
    '& label.Mui-focused': {
        color: '#556B2F',
    },

    '& .MuiOutlinedInput-root': {
        color: '#556B2F',
        borderColor: '#556B2F',
        '& fieldset': {
            borderColor: '#556B2F',
        },
        '&:hover fieldset': {
            borderColor: '#556B2F',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#556B2F',
        },
    },
});


export const UserForm = () => {

    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(undefined);
    const { register, handleSubmit, resetField, formState: { errors } } = useForm();
    const onSubmit = data => {
        saveUserDetails(data, () => navigate("/user-details"));
    };

    const FirstNameField = () => {
        return (
            <CustomTextField
                label="First name"
                {...register("firstName", { required: true })}
                helperText={errors.firstName ? (<span className="error">This field is mandatory.</span>) : ""} />
        )
    }

    const LastNameField = () => {
        return (
            <CustomTextField
                label="Last name"
                {...register("lastName", { required: true })}
                helperText={errors.lastName ? (<span className="error">This field is mandatory.</span>) : ""} />
        )
    }

    const EmailField = () => {
        const getErrorMessage = () => (errors.email.type === 'required' ? 'This field is mandatory.' : 'Email syntax is not valid.');
        return (
            <CustomTextField
                label="Email address"
                {...register("email", { required: true, pattern: emailPattern })}
                helperText={errors.email && <span className='error'>{getErrorMessage()}</span>} />
        )
    }

    const PhoneField = () => {
        const getErrorMessage = () => (errors.phone.type === 'required' ? 'This field is mandatory.' : 'The phone number has to start with + and contains only numbers.')
        return (
            <CustomTextField
                label="Phone number"
                {...register("phone", { required: true, pattern: phonePattern })}
                helperText={errors.phone && <span className='error'>{getErrorMessage()}</span>} />
        )
    }

    const BirthdayField = () => {
        return (
            <CustomTextField
                label="Birthday"
                placeholder='dd/mm/yyyy'
                {...register("birthday", { pattern: birthdayPattern })}
                helperText={errors.birthday && <span className='error'>Input should match mm/dd/yyyy and requiring leading zeros.</span>} />
        )
    }

    const AboutField = () => {
        return (
            <CustomTextField
                label="Tell someting about yourself"
                multiline
                {...register("about")} />
        )
    }

    const AvatarField = () => {

        const validateImage = (img) => {
            if (!img || !img[0]) return true;
            if (!(img[0].type === 'image/jpeg' || img[0].type === 'image/png' || img[0].type === 'image/jpg')) return 'type-error';
            if (img[0].size > ThreeMbInBytes) return 'size-error';
            return true;
        }
        const { onChange, onBlur, name, ref } = register('avatar', { validate: validateImage });

        const onFileUpload = (e) => {
            setSelectedFile(e.target);
            onChange(e);
        }

        const handleReset = (e) => {
            e.preventDefault();
            setSelectedFile(undefined);
            resetField('avatar');
        };

        const getErrorMessage = (error) => {
            switch (error.message) {
                case 'size-error':
                    return 'File is too big';
                case 'type-error':
                    return 'Wrong type.';
                default:
                    return 'Something went wrong.'
            }
        }

        const getLabel = () => {
            const fileName = selectedFile?.value?.replace(/^.*[\\\/]/, '');
            return fileName ? <>{fileName}<span className='delete-icon' onClick={handleReset}>&#10006;</span></> : 'Upload photo';
        }

        return (
            <Grid container direction="column">
                <Button variant='outlined' component='label' >
                    {getLabel()}
                    <input
                        onChange={onFileUpload}
                        onBlur={onBlur}
                        name={name}
                        ref={ref}
                        type="file"
                        hidden

                    />
                </Button>
                {errors.avatar && <span className='error avatar-error'>{getErrorMessage(errors.avatar)}</span>}
            </Grid>

        )
    };



    return (
        <>
            <div className='form-title'>User details form.</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid sm={6} direction="column"
                    container item className='field-container'>
                    {FirstNameField()}
                    {LastNameField()}
                    {EmailField()}
                    {PhoneField()}
                    {BirthdayField()}
                    {AboutField()}
                    {AvatarField()}
                    <Button variant="outlined" className='submit' type="submit" >Submit</Button>
                </Grid>
            </form>
        </>
    )
}