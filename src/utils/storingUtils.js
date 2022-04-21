import { toBase64 } from "./base64Converter";

const saveUserDetailsToLocalStorage = async (data) => {
    if (data?.avatar?.[0]) {
        await toBase64(data.avatar[0]).then(b64 => localStorage.setItem('user-data', JSON.stringify({ ...data, avatar: b64 })));
    } else {
        localStorage.setItem('user-data', JSON.stringify(data));
    }
}

export const saveUserDetails = (data, callback) => {
    saveUserDetailsToLocalStorage(data).then(() => callback());
}

export const getUserDetails = () => {
    const userDetails = localStorage.getItem('user-data');
    return userDetails ? JSON.parse(userDetails) : undefined;
}



