import React from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../../store/action/noteAction';
import Inputhook from './../../customhook/Inputhook';
const Form = () => {
    const[title,bindTitle,clearTitle]=Inputhook()
    const[content,bindContent,clearContent]=Inputhook()
    const dispatch = useDispatch()
    const onsubmitHandler=(event)=>{
        event.preventDefault()
        dispatch(addNote({title,content}))
        console.log(title)
        console.log(content)
        clearTitle()
        clearContent()
    }
    return (
                <div className="section container">
            <form  className='white' onSubmit={onsubmitHandler}>
                <h5 className="grey-text text-darken-2">New Notes</h5>
                    <div className="input-field">
                        <input {...bindTitle} id="note_title" type="text" className="validate"/>
                        <label className="active" htmlFor="note_title">Note title</label>
                    </div>
                  
                    <div className="input-field">
                        <textarea {...bindContent}  id="note_content" className="materialize-textarea"></textarea>
                        <label htmlFor="note_content">note content</label>
                    </div>
           
                    <button className=" waves-light btn green">button</button>
         
            </form>
            </div>
    )
}

export default Form
