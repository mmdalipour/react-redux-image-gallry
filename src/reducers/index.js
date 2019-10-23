import { combineReducers } from 'redux';

import { errorReducer, imageReducer, loadingReducer, pageReducer } from '../components/ImageGallery/reducers';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imageReducer,
    error: errorReducer,
    nextPage: pageReducer
});

export default rootReducer;