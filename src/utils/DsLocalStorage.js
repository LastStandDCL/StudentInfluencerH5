
const setEnhanceUser = (user) => {
    setEmail(user.email);
    setToken(user.token);
    setRoles(user.roles);
}
const getEmail = () => {
    return localStorage.getItem("npu_ds_email");
}

const setEmail = (email) => {
    localStorage.setItem("npu_ds_email",email);
}

const getToken = () => {
    return localStorage.getItem("npu_ds_token");
}

const setToken = (token) => {
    localStorage.setItem("npu_ds_token",token);
}

const getRoles = () => {
    return JSON.parse(localStorage.getItem("npu_ds_role"));
}

const hasRole = (role) => {
    JSON.parse(localStorage.getItem("npu_ds_role"))
        .map((option) => {
            if (option === role) {
                return true;
            }
        });
    return false;
}

const setRoles = (roles) => {
    localStorage.setItem("npu_ds_role",JSON.stringify(roles));
}

const hasLogin = () => {

}