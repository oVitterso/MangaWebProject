import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function HomePagePopular()  {
    const [loading, setLoading] = useState({status : false});
    const [Data, setData]       = useState({
        top : [{mal_id: 0,
        url:"",
        image_url: "",
        title: "",
        score: 0,
        rank: 0,
        members: 0}]});
        
    
    //Runs on load and does the data fetch, While setting loading state
    useEffect (async () =>{
        setLoading(true);
        console.log(setLoading)
        setTimeout(70);
        const result = await fetch(`/api/homepage/MostPopular`, {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((res) => {
            setData(res);
            console.log("GOT THE DATA")
        })
        .catch((err) => {
            console.log(err)
        })
        
        .finally(() => {
            setLoading(false);
        })
                
    },[])
    // Loading
    if (loading.status === true){
        return <p className= "loading" >Data is loading</p>
        console.log("Currently loading");
    }
    //Change state data to only cointain needed data, saves on varable names later
    const content = Data.top;
        console.log(content)
        //What is displayed on the web page. Within the .map is the content. .map will go through each item it can printing them to the site
  return (
    
    <div className = "Special">
        <h1 className = "PageSecondtHeading">Most Popular Manga</h1>
    {content.map((content, key) => (
    <div className = "HomeMainGridPopular" className="card2" key = {content.mal_id}  id= {content.mal_id} alt= "Card" >
    <Link to ={`/title/${content.mal_id}`} >
    <img className = "GridItemHomePopular" className = "MangaImg" src = {content.image_url} alt = "CardImage" />
    <h1 className = "GridItemHomePopular" className= "Title_title" >{content.title.substring(0,20)}</h1>
    </Link>
    <div className = "GridItemHomePopular" className="Container" >
    <p className = "GridItemHomePopular" className="Rank">Rank: {content.rank}</p>
    <p className = "GridItemHomePopular" className="UserScore">Score: {content.score}  / 10</p>
    <p className = "GridItemHomePopular" className="Follows">Follows: {content.members}</p>
        </div>
    </div>
    ))}

    </div>
    
  
  );

  }
  
  export default HomePagePopular