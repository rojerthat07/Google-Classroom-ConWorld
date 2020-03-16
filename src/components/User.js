import React from 'react';



function User(props){


    return(
        <div className="chatbox__user">
        <img className="chatbox__image" src={props.imgsrc} alt=""/> 
        <div className="chatbox__username">{props.name}</div> 
        </div>
    )
}

export default User;