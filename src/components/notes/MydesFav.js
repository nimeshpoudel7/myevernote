import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom';
const MydesFav = ({valueofFav}) => {
    return (
        <div className="mydes">
            {valueofFav?(valueofFav.map((detail)=>{
                return(
                <div valuedata={detail} key={detail.id}  className="container section">
                    <div className="card purple darken-4">
                    <div className="card-content white-text">
                       <Link to={'/note/'+detail.id}> <h5 className="card-title white-text">{detail.title}</h5></Link>
                        <p>{detail.content} </p>
                    </div>
                    <div className="card-action grey-text">
                    {moment(detail.createdAt.toDate()).fromNow()}
                    </div>
                    </div>
                </div>
                    )
            }))
            :('Nothing is found')}
        </div>
    )
}

export default MydesFav
