import IMAGES from '../constants';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return null;
        case IMAGES.LOAD_SUCCESS:
            return null;
        case IMAGES.LOAD_FAILED:
            return action.error;
        default:
            return state;
    }
};

export default errorReducer;