import React, { useState,useEffect } from 'react';
import '../components/Css/Titlepage.css'

import {Link} from 'react-router-dom'

const Mangatitle = ({match}) =>  {
    const [ID, setID] = useState(match.params.id)
   
    const [loading, setLoading] = useState({status: false});
    const [titleinfo, setTitleinfo] = useState({
                mal_id: 0,
                url: "Loading...",
                title: "Loading...",
                image_url: "Loading...",
                title_japanese: "",
                status: "Loading...",
                type: "Loading...",
                score: 4,
                rank: 'Loading...',
                volumes: "Loading...",
                chapters: "Loading...",
                synopsis: "Loading...",
                background: "Loading...",
                genres: [{
                    name: ""
                }
                    
                ]
    });
   
        //Checks that data is valid
   
    if (isNaN(ID)){
       alert("Invalid ID, please go back and try again") 
    } 

        //************************************************************** */
        useEffect (async () =>{
            setLoading(true);
            console.log(setLoading)
            console.log(ID)
            setTimeout(70);
            const result = await fetch(`/api/title/${ID}`, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(resu => setTitleinfo(resu)
                //console.log("GOT THE DATA")
                
            )
            .catch((err) => {
                console.log(err)
            })
            
            .finally(() => {
                setLoading(false);
            })
                    
        },[ID])

        if (loading.status === true){
            return <p>Data is loading</p>
            console.log("Currently loading");
        }
        var Chapterlist = []
        var TestID = '121496';
        if (TestID === ID) {
         Chapterlist = ["1","2","3"]
        }
        
        const content = titleinfo;
        console.log(titleinfo);
        console.log(content);

        //****************************************************************************** */
        
        return (
            <div className = "TitlePageData"> 
            <div key = {content.mal_id}  id= {content.mal_id} className = "InfoWrap">
            <h1 className= "Title_title">{content.title}</h1>
            <a href= {content.url}>
                <img className = "mangaimgTitle" src = {content.image_url} alt = {content.title} />
                </a>
            <h1 className = "Japanese-title">Japanese title: {content.title_japanese} </h1>
            <h2 className="status">Status: {content.status}</h2>
            <h2 className="Type">Content type: {content.type}</h2>
            <h2 className="UserScore">Score: {content.score} / 10</h2>
            <h2 className = "Rank">Rank: {content.rank}</h2>
            <h2 className = "Volumes">Volumes: {content.volumes} Chapterss: {content.chapters}</h2>
            <h2 className = "Genres">Genre: {content.genres[0].name}</h2>
            <h2 className="Follows">Follows: {content.members}</h2>
            <br></br>
            <h2 className="DescriptionHead">Description</h2>
            <p className="Description">{content.synopsis}</p>
            <h2 className = "BackgroundInfo">Background information:</h2>
            <p  className = "Binfo">{content.background}</p>
            </div>
            <div className = "ChapterDiv">
            <h2 className = "ChapterlistTitle">Chapterlist</h2>
            <ul className = "Chapterlist">
                {Chapterlist.map((CID) => (
                   <li className = "ChapterlistItem">
                   <Link to ={`/chapter/${ID}/${CID}`} > Chapter {CID}</Link>
                   <p>Uploaded : 15.05.2021</p>
                   </li> 
                ))}
            </ul>

            </div>
            
            </div>
                
            
        );
       
    }


    //Got error, no time to fix for now, leave until a later date 
    //<h2>Genres: {content.genres[0].name} {content.genres[1].name} {content.genres[2].name}</h2>

    /*
    [{
        mal_id: 0,
        url: "",
        title: "",
        imageurl: "",
        title_japanese: "",
        status: "",
        type: "",
        score: 0,
        rank: '',
        volumes: "",
        chapters: "",
        synopsis: "",
        background: "",
        }]


    */
export default Mangatitle;

