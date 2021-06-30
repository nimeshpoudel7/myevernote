import moment from 'moment';
import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteNote,favNotes } from '../../store/action/noteAction';
import { Link } from 'react-router-dom';



const Note = ({noteAfterMap}) => {

    const dispatch = useDispatch()
    const deletehandler=()=>{
        dispatch(deleteNote(noteAfterMap))
    }
    const favChanger=()=>{
        dispatch(favNotes(noteAfterMap))
    }
    const noteEditior=()=>{
        dispatch({type:''})
    }
    const favMarkup=!noteAfterMap.favorite?('favorite_border'):('favorite')
    return (
        <div className="Note white">
           <div className="right-align">
            <i className='material-icons red-text'style={{cursor:'pointer'}} onClick={favChanger} >{favMarkup}</i>
             <i className='material-icons'style={{cursor:'pointer'}}onClick={deletehandler}>delete</i>
           </div>
          <Link to ={"/note/"+noteAfterMap.id}> <h5 className="black-text">{noteAfterMap.title}</h5></Link>
           <p className="turncate">{noteAfterMap.content}</p>
            <p className="grey-text">{moment(noteAfterMap.createdAt.toDate()).fromNow()}</p>
           <div className="right-align">
               <Link to={`/editnote/${noteAfterMap.id}`}> <i className='material-icons black-text'style={{cursor:'pointer'}}>edit</i></Link>
           </div>
        </div>
    )
}

export default Note
