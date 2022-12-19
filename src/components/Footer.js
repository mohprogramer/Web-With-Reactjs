import React from 'react';

//images
import image1 from '../assets/images/image-retro-pcs.jpg'
import image2 from '../assets/images/image-gaming-growth.jpg'
import image3 from '../assets/images/image-top-laptops.jpg'

//styles
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cart }>
                <div className={styles.imgContainer}>
                    <img src={image1} alt="img"/>
                </div>
                <div className={styles.textContainer}>
                    <h1>01</h1>
                    <h3>Reviving Retro PCs</h3>
                    <p>What happen when old PCs are given modern upgrates?</p>
                </div>
            </div>
            <div className={styles.cart}>
                <div className={styles.imgContainer}>
                    <img src={image3} alt="img2" />
                </div>
                <div className={styles.textContainer}>
                    <h1>02</h1>
                    <h3>Top 10 Laptops of 2022</h3>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className={styles.cart}>
                <div className={styles.imgContainer}>
                    <img src={image2} alt="img3" />
                </div>
                <div className={styles.textContainer}>
                    <h1>03</h1>
                    <h3>The Growth of Gaming</h3>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;