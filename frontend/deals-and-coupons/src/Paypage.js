import React, { useState } from 'react';
import './Paypage.css'
import { Link, useHistory } from "react-router-dom";
import Payment from './Payment';


function Paypage() {
                                                            
    let a = ((Math.random() * 2.5)/0.00000000000000004623);
   
    return (
        <div className='login'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            <Link to='/'>
                <img
                    className="login__logo"
                    src='../logo2.png'                                                 
                alt=''
                />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            </Link>                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            <div className='login__container'>
                <h1>Payment-receipt</h1>

               <h6>Status :  done</h6>
                
               <h6>TransactionId : {a} </h6>

               
            </div>
        </div>
    )
}

export default Paypage