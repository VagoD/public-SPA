import "./UserView.css";
import React from 'react'
import { Grid, Typography } from "@mui/material";
import Avatar_placeholder from "../assets/avatar_placeholder.jpg";

export const UserView = ({ details }) => {

    const DetailTypography = ({ description, detail }) => {
        return (
            detail && <Typography className="details-typography">{description} {detail}</Typography>
        )
    }

    const MUIGrid = () => {
        return (
            <Grid className="grid-container" container>
                <Grid item
                    sm={3}
                    xs={12}
                    className="avatar-container">
                    <img className="avatar" alt="avatar" src={details?.avatar?.[0] ? details.avatar : Avatar_placeholder} />
                </Grid>
                <Grid container item
                    sm={6}
                    xs={12}
                    direction="column"
                    alignItems="stretch"
                    className="typography-container">
                    <DetailTypography description="First name:" detail={details.firstName} />
                    <DetailTypography description="Last name:" detail={details.lastName} />
                    <DetailTypography description="Email:" detail={details.email} />
                    <DetailTypography description="Phone:" detail={details.phone} />
                    <DetailTypography description="Birthday:" detail={details.birthday} />
                    <DetailTypography description="About:" detail={details.about} />
                </Grid>
            </Grid>
        )
    }
    return (
        <MUIGrid />
    )
}