import React from 'react';

import '../components/Css/Chapter.css'
import { Link } from 'react-router-dom';
const Mangachapter = ({match}) => {
        var chapterid = match.params.chapterid;
        //Import and display all images within a folder

        const ChapterImgData = [
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/1.jpg"
            },
        ]
        const ChapterImg1 = [
   
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/1.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/2.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/3.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/4.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/5.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/6.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/7.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/8.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/9.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/10.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/11.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/12.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/13.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/14.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/15.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/16.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/17.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/18.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/19.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/20.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/21.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/22.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/23.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/24.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/25.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/26.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/27.jpg"
            },
            {
                Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter1/28.jpg"
            },
        ]
        const ChapterImg2 = [
   
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/1.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/2.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/3.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/4.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/5.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/6.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/7.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/8.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/9.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/10.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/11.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/12.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/13.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/14.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/15.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/16.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/17.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/18.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/19.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/20.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/21.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/22.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/23.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/24.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/25.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter2/26.jpg"
    },
    
        ]

        const ChapterImg3 = [
   
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/1.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/2.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/3.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/4.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/5.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/6.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/7.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/8.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/9.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/10.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/11.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/12.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/13.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/14.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/15.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/16.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/17.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/18.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/19.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/20.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/21.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/22.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/23.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/24.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/25.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/26.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/27.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/28.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/29.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/30.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/31.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/32.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/33.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/34.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/35.jpg"
    },
    {
        Image: "https://ov25.brighton.domains/Imgs/Imagesfiles/Chapter3/36.jpg"
    },
        ]
if (chapterid === "1") {
    ChapterImgData = ChapterImg1
}

        return(
            <div>
                <Link to = {`/title/121496`} className = "Title link"><h1>Back to title </h1></Link>
                {ChapterImg1.map((CID) => (
                <img src = {CID.Image} className = "Chapterimage" alt = "Image Gotten from Mananelo"/> 
             ))}
            </div>
        );
}
    
    


export default Mangachapter;