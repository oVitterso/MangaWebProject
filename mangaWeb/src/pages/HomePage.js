import React from 'react';
import HomePageMainContent from '../components/HomepageMainContent'
import HomePagePopular      from '../components/HomePagePopular'
import '../components/Css/Homepage.css'
//Basic homepage, uses json to display availiable titles, only for testing now
//Meant as a backup in case api goes down


const HomePage = () => {
   
    return(
            <div className = "Home">
            <h1 className = "PageFirstHeading">Top ranked manga</h1>
            
            <HomePageMainContent/>
            
            <HomePagePopular/>

            </div>     
            
        
            
            
            
    

    );


}



export default HomePage;