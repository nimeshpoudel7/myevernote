export const addNote=(note)=>{
    return(dispatch,getState,{getFirestore})=>{
        const firestore=getFirestore()
        firestore.collection('datafromnimesh')
        .add({
            ...note,
            favorite:false,
            createdAt:new Date()
        })
        .then(() => {
            console.log('addes sucessfuly')
        })
        .catch((err)=>{
             console.log('fail')
        })
    }
}
export const deleteNote=(note)=>{
    return(dispatch,getState,{getFirestore})=>{
        const firestore=getFirestore()
        firestore.collection('datafromnimesh').doc(note.id).delete()
        .then(() => {
            console.log('delete sucessfuly')
        })
        .catch((err)=>{
             console.log('fail')
        })
    }
}
export const favNotes=(note)=>{
    return(dispatch,getState,{getFirestore})=>{
        const firestore=getFirestore()
        const favStatus=!note.favorite
        firestore.collection('datafromnimesh').doc(note.id).update({
            favorite:favStatus
        })
        .then(() => {
            console.log('delete sucessfuly')
        })
        .catch((err)=>{
             console.log('fail')
        })
    }
}