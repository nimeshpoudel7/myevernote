import React from 'react'
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import MydesFav from './MydesFav';

const Favorites = () => {
    useFirestoreConnect([{
        collection:'datafromnimesh',
         where: ["favorite", "==", true],
      orderBy: ["createdAt", "desc"],
      storeAs: "favnotes",
    }])
    const favnotes = useSelector(state => state.firestore.ordered.favnotes)
    console.log(favnotes)
    return (
        <div className="container">
            {/* <Notelist valueofdata={favnotes}/> */}
            <MydesFav valueofFav={favnotes}/>
            
        </div>
    )
}

export default Favorites
