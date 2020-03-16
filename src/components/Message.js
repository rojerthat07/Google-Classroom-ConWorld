import React, { Component } from 'react';


function hide(){
    document.getElementById('message1').style.display = "none";
}

let d = new Date();
let day = "";
(function week(){
    switch(d.getDay()){
        case 0:
            day = 'Sun';
            break;
            case 1:
                day = 'Mon';
                break;
                case 2:
                    day = 'Tues';
                    break;
                    case 3:
                        day = 'Wed';
                        break;
                        case 4:
                            day ='Thur';
                            break;
                            case 5:
                                day = 'Fr';
                                break;
                                case 6:
                                    day = 'Sat';
                                    break;
                                    default:
                                        day = 'undefined';
                                        break;

    }
})();






export class Message extends Component {


    render() {
        return (
           
        <div className="message" id="message1">
        <div className="message__header">
        <img className="message__picture" src={this.props.imgsrc} alt=""/>
           <div className="message__name"> 
          Shanel Krystel Garcia
           <br></br>
           <i className="fas fa-dot-circle message__status-indicator"></i> <span className="message__status">Active Now</span>
           <button className="message__exit" onClick={hide}><i className="fas fa-times"></i></button>
        </div> 
            </div>
        <div className="message__body">
            <div className="message__timestamp">{day}, { d.getHours()}: {d.getMinutes()}</div> 
            <div className="message__body-message">
            <div className="message__body-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut perspiciatis, consequatur, fugiat, non similique earum praesentium inventore vitae iure fugit officiis! Quas cumque officia est voluptatibus officiis! Magni, voluptatibus at.</div>
        <img className="message__body-picture" src={this.props.imgsrc} alt=""/>
  
            </div>
          
    
            </div>
            <div className="message__footer">
                <form action="">
                <input type="text"  placeholder="Enter message..." name="message" className="message__footer-message" />
                <input type="submit" value="SEND"/>
                </form>
             
            </div>
       
    </div>
        )
    }
}

export default Message
