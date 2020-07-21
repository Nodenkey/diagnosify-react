import {DISEASE_BOOK, DOCTOR, FEEDBACK, SCAN_HISTORY, TAKE_SCAN} from "../constants";


//types

const scan = () => {
    return {
        type: TAKE_SCAN
    }
}

const doctor = () => {
    return {
        type: DOCTOR
    }
}

const history = () => {
    return {
        type: SCAN_HISTORY
    }
}

const diseaseBook = () => {
    return {
        type: DISEASE_BOOK
    }
}

const feedback = () => {
    return {
        type: FEEDBACK
    }
}
//dispatchers

export const selectTakeScan = dispatch => {
    dispatch(scan());
}

export const selectDoctor = dispatch => {
    dispatch(doctor());
}

export const selectHistory = dispatch => {
    dispatch(history());
}

export const selectDiseaseBook = dispatch => {
    dispatch(diseaseBook());
}

export const selectFeedback = dispatch => {
    dispatch(feedback());
}