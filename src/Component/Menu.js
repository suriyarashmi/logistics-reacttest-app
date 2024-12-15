import React, { Component } from 'react'
import MenuData from '../Data/menu.json'

function Menu ()  {
        
        return (
                                    
                
            <div class="vertical-menu">
            
            {MenuData.map((menuDetail,index)=>{
                
                return (
                   
  <a href={menuDetail.url} class="active">{menuDetail.title}</a>
                )  }) }                                      
                             
                </div>
           
        )
    }
  
   

export default Menu;
	