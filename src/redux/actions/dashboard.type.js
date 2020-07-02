import {DISEASE_BOOK, DOCTOR, FEEDBACK, SCAN_HISTORY, TAKE_SCAN} from "../constants";

export const selectTakeScan = () => {
    console.log('dispatched scan');
    return {
        type: TAKE_SCAN
    }
}

export const selectDoctor = () => {
    console.log('dispatched doc');
    return {
        type: DOCTOR
    }
}

export const selectHistory = () => {
    console.log('dispatched history');
    return {
        type: SCAN_HISTORY
    }
}

export const selectDiseaseBook = () => {
    console.log('dispatched book');
    return {
        type: DISEASE_BOOK
    }
}

export const selectFeedback = () => {
    console.log('dispatched feedback');
    return {
        type: FEEDBACK
    }
}