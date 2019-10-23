import { takeEvery, select, call, put } from 'redux-saga/effects';

// actions
import { setImages, setError } from '../actions'

// constants
import IMAGES from '../constants';

// services
import { fetchImages } from '../../../services/images.service';

const getPage = state => state.nextPage;
function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        console.log(images);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }

}


function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default watchImagesLoad;