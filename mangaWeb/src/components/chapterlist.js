import React, { useState } from 'react';
import {Link} from 'react-router-dom'
//Basic homepage, uses json to display availiable titles, only for testing now
//Meant as a backup in case api goes down
const Chapterlist = ({ malID}) => {
    const ID = malID;
    const [TitleID, setTitleID] = useState('0')
    setTitleID(ID);
    if(TitleID = '121496'){
        return(
            <div className = "ChapterList">
                <ul>
                <li>
                <Link to ={`/chapter/${TitleID}/1`} > </Link>
                </li>
                <li>
                <Link to ={`/chapter/${TitleID}/2`} > </Link>
                </li>
                <li>
                <Link to ={`/chapter/${TitleID}/3`} > </Link>
                </li>
            </ul>
            <p>Nothing here yet</p>

            </div>
            
        );
    }
    else{
        return (
            <p>Currently no chapters</p>
        );
    }
    
  }
  
  

export default Chapterlist;