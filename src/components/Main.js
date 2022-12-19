import React from 'react';

//styles
import styles from './Main.module.css'

//Image
import image from '../assets/images/image-web-3-desktop.jpg'

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.imgContainer}>
                    <img src={image} alt="banner" />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.web3}>
                        <h1>The Bright <br/>Future of<br/>Web 3.0? </h1>
                    </div>
                    <div className={styles.dive}>
                        <p>We dive into the next evolution of web that<br/>claims to put the power of the plarforms back<br/>into the hands of the people. But is it really<br/>fulfilling its promise?</p>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.first}>
                    <h1>New</h1>
                    <h3>Hydrogen VS Electric Cars</h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className={styles.second}>
                    <h3>The Downsides of AI Aristry</h3>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className={styles.third}>
                    <h3>Is VC Funding Drying Up?</h3>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
        </div>
    );
};

export default Main;