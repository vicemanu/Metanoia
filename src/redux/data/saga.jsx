import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchDataFailure, fetchDataSucess } from './slice'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

function* createData() {
    try{
        const lista = []
        const postRef = collection(db, "artigo")
        const snapshot = yield getDocs(postRef)
        yield snapshot.docs.forEach(doc => {
            lista.push({
                id: doc.id,
                title: doc.data().title,
                img: doc.data().img,
                text: doc.data().description,                  
                destaque: doc.data().destaque

            })

        })
        const data = lista
        yield put(fetchDataSucess(data))
    }
    catch(error){
        yield put(fetchDataFailure(error))
    }
}

export default all([
    takeLatest("data/createData", createData)
])

