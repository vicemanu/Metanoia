import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchDataFailure, fetchDataSucess, fetchDestaque, fetchDestaqueFailure, fetchDestaqueSucess} from './slice'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

function* createData() {

    try{
        const state = yield select();
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

        if(state.data.setDestaque) {

            const dataDestaque = data.filter(e => {
                if(e.destaque) {
                    return e;
                }

            })
            const dataDestaqueSelect = [];
                while (dataDestaqueSelect.length < 4) {
                    const randomNumber = Math.floor(Math.random() * (dataDestaque.length));
                        if (!dataDestaqueSelect.includes(randomNumber)) {
                            dataDestaqueSelect.push(dataDestaque[randomNumber]);
                            console.log(dataDestaqueSelect)
                    }
                }





            yield put(fetchDestaqueSucess(dataDestaqueSelect))
        }

    }
    catch(error){
        yield put(fetchDataFailure(error))
    }
}


function* fetchDestaqueEffect() {
    try {

    }
    catch {

    }
}

export default all([
    takeLatest("data/createData", createData),
    takeLatest("data/fetchDestaque", fetchDestaqueEffect)
])

