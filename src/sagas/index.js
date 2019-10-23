import { all } from 'redux-saga/effects';

// sagas 
import imageSagas from '../components/ImageGallery/sagas'

function* rootSaga() {
    yield all([imageSagas()])
}

export default rootSaga;