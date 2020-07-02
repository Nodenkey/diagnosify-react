import {DISEASE_BOOK, DOCTOR, FEEDBACK, SCAN_HISTORY, TAKE_SCAN} from "../constants";

const INITIAL_STATE = {
    screen : 'take-scan'
}

const dashboardReducer = (state = {...INITIAL_STATE}, action) => {
    switch (action.type) {
        case TAKE_SCAN :
            return {
             ...state, screen: 'take-scan'
            }
        case DOCTOR :
            return {
                ...state, screen: 'my-doctor'
            }
        case SCAN_HISTORY :
            return {
                ...state, screen: 'scan-history'
            }
        case DISEASE_BOOK :
            return {
                ...state, screen: 'disease-book'
            }
        case FEEDBACK :
            return {
                ...state, screen: 'feedback'
            }
        default :
            return state
    }
}

export default dashboardReducer;