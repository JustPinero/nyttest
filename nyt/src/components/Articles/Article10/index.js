/* REACT */
import React, {useState} from 'react'
/* CUSTOM COMPONENTS */
import ArticleRow from '../../ArticleRow';
import Footer from "../../Footer"
/* STYLING */
import "./styles.css";

const EndPage = ()=>{
    /* LOCAL STATE */
    //IsSubscribeButtonClicked State- Boolean tracks if user has clicked subscribe button
    const [subscribeButtonIsClicked, setSubscribeButtonIsClicked] =useState(false);
    /* HANDLERS*/
    const toggleSubscribeButton = ()=>{
        let updatedState = !subscribeButtonIsClicked;
        setSubscribeButtonIsClicked(updatedState)
    }

    return (
        <div className='endpage-container'>
            <ArticleRow>
                <div className="endpage-text_container">
                    <h5 className="endpage-text">
                    More of life brought to life.
                    </h5>
                </div>
            </ArticleRow>
            <ArticleRow>
                <video id="brandVideo" className="video-container" poster="https://mwcm.nyt.com/dam/LP/brand/life/images/sneakers_placeholder_.png" controls="">
                    <source src="https://mwcm.nyt.com/dam/LP/brand/life/images/YNYT0409000H_NYT_Understanding_Sneakers_60_Landing_Page.mp4" type="video/mp4"/>
                </video>
            </ArticleRow>
            <ArticleRow>
                <div className="restart-container">
                    <h5 className="restart-text">
                        Back to the start
                    </h5>
                </div>
            </ArticleRow>
            <ArticleRow>
                <div className="button-container">
                    {
                        subscribeButtonIsClicked?
                        <h5 className="subscriptionmessage-text">
                            Thank you for supporting quality journalism.
                        </h5>
                        :
                        <>
                            <h5 className="subscriptionmessage-text">
                            Experience how Times journalism brings your interests to life.
                            </h5>
                            <div className="subscribebutton" onClick={toggleSubscribeButton}>
                            SUBSCRIBE
                            </div>
                        </>
                    }
                </div>
            </ArticleRow>
            <Footer/>
        </div>
    )
}

export default EndPage;