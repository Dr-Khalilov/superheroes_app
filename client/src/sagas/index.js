import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import { getHeroesSaga, createHeroSaga } from './heroSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_HERO_REQUEST, getHeroesSaga);
  yield takeLatest(ACTION_TYPES.CREATE_HERO_REQUEST, createHeroSaga);
}

export default rootSaga;
