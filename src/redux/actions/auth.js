import {myFirebase} from "../../firebase/firebase";
import {googleProvider} from "../../firebase/firebase";
import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_UP_REQUEST,
    SIGN_UP_FAILURE,
} from "../constants";

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

const loginError = error => {
    return{
        type: LOGIN_FAILURE,
        error
    }
};

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

const logoutError = error => {
    return {
        type: LOGOUT_FAILURE,
        error
    };
};

const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    };
};

const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS
    };
};

const requestSignUp = () => {
  return {
      type: SIGN_UP_REQUEST
  }
};

const receiveSignUp = user => {
  return {
      type: SIGN_UP_SUCCESS,
      user
  }
};

const signUpError = error => {
  return {
      type: SIGN_UP_FAILURE,
      error
  }
};

export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    myFirebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(receiveLogin(user));
        })
        .catch(error => {
            console.log(error);
            dispatch(loginError(error));
        });
};

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    myFirebase
        .auth()
        .signOut()
        .then(() => {
            dispatch(receiveLogout());
        })
        .catch(error => {
            dispatch(logoutError(error));
        });
};

export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    myFirebase.auth().onAuthStateChanged(user => {
        if (user !== null) {
            dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
    });
};

export const signUpUser = (email, password) => dispatch => {
    dispatch(requestSignUp());
    myFirebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
        dispatch(receiveSignUp(user));
        dispatch(receiveLogin(user));
    }).catch(error => {
        dispatch(signUpError(error));
    });
};

export const signInWithGoogle = (type) => dispatch => {
    if (type === 'signup'){
        dispatch(requestSignUp());
        myFirebase.auth().signInWithPopup(googleProvider).then(user => {
            dispatch(receiveSignUp(user));
        }).catch(error => {
            dispatch(signUpError(error));
        });
    }else {
        dispatch(requestLogin());
        myFirebase.auth().signInWithPopup(googleProvider).then(user => {
            dispatch(receiveLogout(user));
        }).catch(error => {
            dispatch(loginError(error));
        });
    }

};
