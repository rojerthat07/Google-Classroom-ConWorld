import React, {useState} from 'react';
import User from './User';
import Message from './Message';
import jer from '../images/jer.jpg';
import michenne from '../images/michenne.jpg';
import aljohn from '../images/aljohn.jpg';
import james from '../images/james.jpg';
import jarish from '../images/jarish.jpg';
import van from '../images/van.jpg';
import shanel from '../images/shanel.jpg';
import rowell from '../images/rowell.jpg';
import jennica from '../images/jennica.jpg';
import rikkimae from '../images/rikkimae.jpg';





function Chatbox(){

    let [check, setCheck ] = useState(true);
    function appear(){
        let myNodeList =   document.querySelectorAll(".chatbox__user");
        let i;
        document.querySelector(".chatbox__heading").style.display = "block";
        for(i = 0; i < myNodeList.length; i++){
            myNodeList[i].style.display = "flex";
        }

       setCheck(true);
        
    }

    function disappear(){
        let myNodeList =   document.querySelectorAll(".chatbox__user");
        let i;
        document.querySelector(".chatbox__heading").style.display = "none";
        for(i = 0; i < myNodeList.length; i++){
            myNodeList[i].style.display = "none";
        }
       
        setCheck(false);

    }


return(
    <div className="chatbox">
        <Message imgsrc={shanel} />
        <div onClick={check ? disappear : appear } className="chatbox__heading">
         Chat
        </div>
      <User name="Jer Carlo Catallo" imgsrc={jer} />
      <User name="Michenne Cortez" imgsrc={michenne} />
      <User name="Aljohn David" imgsrc={aljohn} />
      <User name="James Cinense" imgsrc={james} />
      <User name="Van Ezekiel Payumo" imgsrc={van} />
      <User name="Shanel Garcia" imgsrc={shanel} />
      <User name="Jarish Ramos" imgsrc={jarish} />
      <User name="Rowell Garcia" imgsrc={rowell} />
      <User name="Jennica Montoya" imgsrc={jennica} />
        <User name="Rikkimae Mallari" imgsrc={rikkimae} />
           
    <button className="chatbox__box" onClick={check ? disappear : appear } ><i className="fas fa-inbox chatbox__icon"></i> MESSAGES</button>
    </div>
)



}



export default Chatbox;

