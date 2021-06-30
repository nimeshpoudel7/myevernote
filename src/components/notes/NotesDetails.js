import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';

const NotesDetails = (props) => {
    const id =props.match.params.id;
    useFirestoreConnect([{
        collection:'datafromnimesh',
        doc:id
    }])
    const notedetail = useSelector(
      ({firestore:{data}})=>data.datafromnimesh&&
      data.datafromnimesh[id]
      )
      const notemarkup=!isLoaded(notedetail)?
      (      <div className="container section">
    
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Loading</span>
          <p> </p>
        </div>
    </div>
  </div>)
      :isEmpty(notedetail)?(
            <div className="container section">
    
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Empty</span>
          <p> </p>
        </div>
    </div>
  </div>):(
            <div className="container section">
    
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{notedetail.title}</span>
          <p>{notedetail.content} </p>
        </div>
        <div className="card-action grey-text">
        {moment(notedetail.createdAt.toDate()).calendar()}
        </div>
    </div>
  </div>)
    
    return notemarkup
}

export default NotesDetails
