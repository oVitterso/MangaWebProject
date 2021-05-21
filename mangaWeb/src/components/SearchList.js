import React from 'react';

const SearchList = ({SearchList=({})}) =>{
    
    return(
        <>
        {SearchList.map((content, key) => {
            if (content) {
                return(
                    <div key = {content.key}  id= {content.mal_id}>
                <a href= {content.url}> <h2>Data is gethered from this url</h2>
                <img className = "mangaimgTitle" src = {content.image_url} alt = {content.title} />
                </a>
                <h1 className= "Title_title">{content.title}</h1>
                <h2 className="UserScore">Score: {content.score}</h2>
                <h2 className="Follows">Follows{content.members}</h2>
        
                {/* Add a reccommendation based on current title */}
                <h3>SPACING</h3>
                </div>
                )  
            }
            return null
        }   )}
        </>
    );
    
}
export default SearchList