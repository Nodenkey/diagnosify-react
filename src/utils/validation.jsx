export const errorObject = {
    errorName: '',
    errorMessage: '',
};
export const validateEmail = (event, mainEvent, mainName) => {
    let value;
    let name;
    let item;
    let field;
    if (mainEvent === undefined) {
        field = event.target;
        value = event.target.value;
        name = event.target.name;
    } else if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === mainName) {
                field = item;
                value = item.value;
                name = mainName;
            }
        }
    }
    const error = `${name}Error`;
    if (isEmpty(value, error, field, name)) {
        return false;
    } else if (!containsCharacters(value, 5, error, field, name)) {
        return false;
    }
    return true;
};

export const validatePassword = (event, mainEvent, mainName) => {
    let value;
    let name;
    let item;
    let field;
    if (mainEvent === undefined) {
        field = event.target;
        value = event.target.value;
        name = event.target.name;
    } else if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === mainName) {
                field = item;
                value = item.value;
                name = mainName;
            }
        }
    }
    const error = `${name}Error`;
    if (isEmpty(value, error, field, name)) {
        return false;
    }else if (value.length < 7) {
        setInvalid(error, name, field, 'Password should contain at least be 7 characters')
    } else if (!containsCharacters(value, 2, error, field, name)) {
        return false;
    }
    else{
        setValid(name, error, field);
        return true;
    }
};

//UTILS
const isEmpty = (value, error, field, name) => {
    if (value.trim() === '') {
        setInvalid(error,  name, field, 'Please do not leave empty');
        return true;
    } else {
        setValid(name, error, field);
        return false;
    }
};

const setValid = (name, error, field) => {
    const errorIcon = document.querySelector(`.${name}Error`);
    errorObject.errorName = error;
    errorObject.errorMessage = '';
    field.classList.add('set-valid');
    field.classList.remove('set-invalid');
    errorIcon.classList.remove('input-error');

};
const setInvalid = (error, name, field, message) => {
    const errorIcon = document.querySelector(`.${name}Error`);
    errorObject.errorName = error;
    errorObject.errorMessage = message;
    field.classList.remove('set-valid');
    field.classList.add('set-invalid');
    errorIcon.classList.add('input-error');
};
const containsCharacters = (value, code, error, field, name ) => {
    let regEx;
    switch (code) {
        case 1:
            //contains letters
            regEx = /(?=.*[a-zA-Z])/;
            return matchWithRegEx(value, regEx, "Must contain at least one letter", error, field, name);
        case 2:
            // contain letters and numbers
            regEx = /(?=.*[a-zA-Z])(?=.*\d)/;
            return matchWithRegEx(value, regEx, "Must contain at least one letter and one number", error, field, name);
        case 3:
            //contain lower case, uppercase and numbers
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
            return matchWithRegEx(value, regEx, "Must contain at least one lower case letter, one upper case letter and one number", error, field, name);
        case 4:
            //contain lowercase, uppercase, numbers and symbols
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/;
            return matchWithRegEx(value, regEx, "Must contain at least one lower case letter, one upper case letter, one number and one special character", error, field, name);
        case 5:
            // for emails
            // eslint-disable-next-line no-useless-escape
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return (matchWithRegEx(value, regEx, "Invalid Email", error, field, name));
        case 6:
            // check if only numbers
            // eslint-disable-next-line no-useless-escape
            regEx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
            return matchWithRegEx(value, regEx, "Please enter a valid phone number", error, field, name);
        default:
            return false
    }
};

const matchWithRegEx = (value, regEx, message, error, field, name) => {
    if (value.toLowerCase().match(regEx)) {
        setValid(name, error, field);
        return true;
    } else {
        setInvalid(error, name, field, message);
        return false;
    }
};


export const validateSignUp = (event) => {
   return !!(validateEmail(undefined, event, 'signUpMail') && validatePassword(undefined, event, 'signUpPass'));
};
export const validateSignIn = (event) => {
  return !!(validateEmail(undefined, event, 'signInMail') && validatePassword(undefined, event, 'signInPass'));
};