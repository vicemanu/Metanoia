import { all, takeEvery } from 'redux-saga/effects'

function* createUser() {

}

export default all([
    takeEvery("user/createUser", createUser)
])