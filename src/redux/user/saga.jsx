import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchUserFailure, fetchUserSucess } from './slice'
import { collection } from 'firebase/firestore'
import { db } from '../../firebase'

function* createUser() {
    try{
        const response = yield db.collection()
        yield put(fetchUserSucess(response))
    }
    catch(error){
        yield put(fetchUserFailure(error))
    }
}

export default all([
    takeLatest("user/createUser", createUser)
])