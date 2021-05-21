import React, { useEffect, useState} from 'react';


const Genre = () => {
    const [loading, setLoading] = useState({status : false});
    const [Data, setData]       = useState({
        top : [{mal_id: 0,
        url:"",
        image_url: "",
        title: "",
        score: 0,
        rank: 0,
        members: 0}]});
    //Runs on load
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
    if (loading.status === true){
        return <p className= "loading" >Data is loading</p>
        console.log("Currently loading");
    }
    const content = Data.top;
        console.log(content)
        
  return (
    
    <div className = "SpecialSelectionGrid">
    {content.map((content, key) => (
    <div className = "HomeMainGrid" className="card" key = {content.mal_id}  id= {content.mal_id} alt= "Card" >
    <a href= {content.url}>
    <img className = "GridItemHome" className = "MangaImg" src = {content.image_url} alt = "CardImage" />
    </a>
    <div className = "GridItemHome" className="Container" >
    <h1 className = "GridItemHome" className= "Title_title" >{content.title.substring(0,20)}</h1>
    <p className = "GridItemHome" className="UserScore">Rank:TEST {content.rank}</p>
    <p className = "GridItemHome" className="UserScore">Score: {content.score}</p>
    <p className = "GridItemHome" className="Follows">Follows: {content.members}</p>
        </div>
    </div>
    ))}

    </div>
    
  
  );

  }
  
  export default Genre