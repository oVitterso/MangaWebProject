import React, {useState} from 'react';
import SearchBar from '../components/Searchbar';
import { Link } from 'react-router-dom';
import '../components/Css/SearchStyle.css'


//search page manages the content of the search
const Search = ({match}) =>  {
    
    // Fetching data from 
    //Needed a loading state due to react rendering return before running the rest of the code. 
    const [loading, setLoading] = useState({status : false});
    const [SearchInfo, setSearchInfo] = useState({
        results : [{mal_id: 0,
        url:"",
        image_url: "",
        title: "",
        publishing: false,
        synopsis: "",
        type: "",
        chapters: 0,
        volumes: 0,
        score: 0,
        start_date: "0",
        end_date: "0",
        members: 0}]});
var Visability = "visibility: hidden"
        if (loading.status === true){
            console.log("Currently loading");
            Visability = "visibility: visible"
            return <p className= "loading" >Data is loading</p>
            
        }
        const content = SearchInfo.results;
        console.log(content)

        return (
            //<> is just shortend from <react> 
            
            <>
            <SearchBar  setSearchInfo= {setSearchInfo} setLoading={setLoading}/>
            <div className= "SearchGrid" >
            {content.map((content, key) => (
            <div className = "GridItem" className="card" key = {content.mal_id}  id= {content.mal_id} alt= "Card" >
            <a href= {content.url}>
            <img className = "GridItem" className = "MangaImg" src = {content.image_url} alt = "CardImage" />
            </a>
            <div className = "GridItem" className="Container" >
            <Link to ={`/title/${content.mal_id}`} > 
            <h1 className = "GridItem" className= "Title_title" >{content.title.substring(0,20)}</h1>
            </Link>
                
            
           
            <p className = "GridItem" className="UserScore">Score: {content.score}</p>
            <p className = "GridItem" className="Follows">Follows: {content.members}</p>
                </div>
            </div>
            ))}

            </div>
            
            </>
            
        );
  }






export default Search;