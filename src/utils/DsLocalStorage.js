export const getDsEmail = () => {
    return localStorage.getItem("npu_ds_email");
}

export const setDsEmail = (email) => {
    localStorage.setItem("npu_ds_email",email);
}

export const getDsToken = () => {
    return localStorage.getItem("npu_ds_token");
}

export const setDsToken = (token) => {
    localStorage.setItem("npu_ds_token",token);
}

export const getDsAvatar = () => {
    return localStorage.getItem("npu_ds_avatar");
}

export const setDsAvatar = (token) => {
    localStorage.setItem("npu_ds_avatar",token);
}

export const getDsRoles = () => {
    return JSON.parse(localStorage.getItem("npu_ds_role"));
}

export const hasDsRole = (role) => {
    JSON.parse(localStorage.getItem("npu_ds_role"))
        .map((option) => {
            if (option === role) {
                return true;
            }
        });
    return false;
}

export const setDsRoles = (roles) => {
    localStorage.setItem("npu_ds_role",JSON.stringify(roles));
}

export const hasDsLogin = () => {

}
