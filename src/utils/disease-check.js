export const diseaseCheck = (disease) => {
    switch (disease) {
        case 'bkl' :
            return 'Benign keratosis-like lesions'
        case 'akiec':
            return 'Bowen\'s disease'
        case 'bcc':
            return 'Basal cell carcinoma'
        case 'df':
            return 'Dermatofibroma'
        case 'mel':
            return 'Melanoma'
        case 'nv':
            return 'Melanocytic nevi'
        case 'vasc':
            return 'vascular lesions'
        default:
            return disease
    }
}