const regex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");

function validateEmail(string) {
    if(string.length < 8) {
        return false;
    }
    if(!regex.test(string)) {
        return false;
    }
    return true;
}

export default validateEmail;