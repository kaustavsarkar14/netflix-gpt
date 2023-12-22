export const validateInput = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(password); 
    
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
    return null;
};
