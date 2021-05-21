import React, { useState} from 'react';


const SearchBar = ({ setSearchInfo, setLoading}) => {
    
    const [SearchInput, setInput] = useState('');
    
    const addSearch = async () =>{
        setLoading(true);
        console.log(setLoading)
        setTimeout(70);
        const result = await fetch(`/api/Search/${SearchInput}`, {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((SearchInfo) => {
            setSearchInfo(SearchInfo);
            console.log("GOT THE DATA SEARCH")
        })
        .catch((err) => {
            console.log(err)
        })
        
        .finally(() => {
            setLoading(false);
        })
                
    }
    

    
  return (
      <div className = 'SearchForm'>
          <input
           type = "text"
           name = "Search"
           onChange={(event) => setInput(event.target.value)}
           placeholder="Type something to search"
           value={SearchInput}
           className="Searchbar"
           />
           <button onClick={() => addSearch()}>
            Search
           </button>
      </div>
    
  );
  }
  
  export default SearchBar