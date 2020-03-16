import React from 'react';
import brand from '../images/google.svg';
import jer from '../images/jer.gif';

function Navigation(){
return(
  <div className="navigation">
      <div className="column1">
      <i className="fas fa-bars column1__icon"></i>
      <img src={brand} alt=""/>
      <div className="column1__heading"> Classroom</div>
    
      </div>
      <div className="column2">
   <div className="column2__icons">
    
   <i className="fas fa-plus column2__icon"></i>
      <i className="fas fa-th column2__icon"></i>
      <img src={jer} alt=""/>
   </div>
  

   
    
          <img src="" alt=""/>
          </div>
  </div>

)



}


export default Navigation;