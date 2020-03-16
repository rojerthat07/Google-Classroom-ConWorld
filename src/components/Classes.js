import React from 'react';



function Classes(props){

return (
    <div className="classes">
     
        <div className="classes__header">
            <div className="classes__subject">{props.subject}</div>
            <div className="classes__section">{props.section}</div>
            <div className="classes__teacher">{props.teacher}</div>
            <i className="fas fa-ellipsis-v classes__icon"></i>
            <img src={props.imgsrc} alt="" className="classes__image"/>
        </div>
        <div className="classes__body"></div>
        <div className="classes__footer">
            <div className="classes__icons">
            <i className="far fa-clipboard classes__icon"></i>
            <i className="far fa-folder classes__icon"></i>
  
            </div>
     
        </div>
    </div>
);

}



export default Classes;