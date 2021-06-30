import React from 'react'
import { useSelector } from 'react-redux'
import Form from './Form'
import {useFirestoreConnect} from 'react-redux-firebase'
import Notelist from '../notes/Notelist'
const Home = () => {
   useFirestoreConnect([{
       collection:'datafromnimesh',
       orderBy:['createdAt','desc']
   }])
//    const notesvalue = useSelector(state => state.firestore.ordered.notesvalue)
//    console.log(notesvalue)
 const datafromnimes = useSelector((state) => state.firestore.ordered.datafromnimesh);
    console.log('home',datafromnimes)
    return (
       <div className="container">
            <div className="row center-align">
                <div className="col s7">
                    <Form/>
                </div>
                <div className="col s5">
                    <Notelist valueofdata={datafromnimes}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
