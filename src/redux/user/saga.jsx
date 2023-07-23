import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchDataFailure, fetchDataSucess } from './slice'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

function* createUser() {
    try{
        const postRef = collection(db, "artigo")
        const snapshot = yield getDocs(postRef)
        const data = snapshot.docs.map((doc) => doc.data())
        yield put(fetchDataSucess(data))
    }
    catch(error){
        yield put(fetchDataFailure(error))
    }
}

export default all([
    takeLatest("user/createUser", createUser)
])



// async function buscarPost() {
//     const postRef = collection(db, "artigo")
//     await getDocs(postRef)
//     .then((snapshot)=> {
//         let lista = []
//         let listaDestaque = []

//         snapshot.forEach((doc) => {
//             lista.push({
//                 id: doc.id,
//                 title: doc.data().title,
//                 img: doc.data().img,
//                 text: doc.data().description,                  
//                 destaque: doc.data().destaque
//             })
//         })

//         setArtigos(lista)

//         // separando artigos em destaque

        

//         listaDestaque = lista.filter((e)=> {
//             if(e.destaque) {
//                 return e
//             }
//         },)


//         setDestaque(listaDestaque)


//     })
//     .catch((error)=> {
//         console.log(error)
//     })