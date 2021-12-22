import React from 'react'
import styles from '../styles/styled-components/Banner.module.scss'
import Button from './Button'
import image from '../assets/banner-image.png'
import image2 from '../assets/banner-image2.png'
import settings from '../assets/options.png'
import effect1 from '../assets/virus.png'
import effect2 from '../assets/ellipse.png'

const Banner = () => {
    return (
        <div className={styles.banner} >
            <div className={styles.bannerContainer} >
                <div className={styles.bannerContent} >
                    <h1 className={styles.bannerHeading} >The healthier you are, the better your life.</h1>
                    <p className={styles.bannerText} >In your support  journey,  you will get  many injuries and cannot be avoided by it. It is best to find a clinic that can service your injuries at the time you need it most.</p>
                    <div className={styles.bannerBtns} >
                        <Button>Get Appointment</Button>
                        <Button outline >Learn More</Button>
                    </div>
                </div>
                <div className={styles.bannerImage} >
                    <img src={image} alt="" />
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className={styles.bannerTable} >
                <div className={styles.bannerSection} >
                    <img src={settings} alt="" />
                    <h2 className={styles.bannerSectionHeading} >Our trusted customer</h2>
                </div>
                
                <div className={styles.divider} />

                <div className={styles.bannerSection} >
                    <h3>30k</h3>
                    <p>User Used</p>
                </div>

                <div className={styles.divider} />

                <div className={styles.bannerSection} >
                    <h3>98%</h3>
                    <p>Positive Feedback</p>
                </div>

                <div className={styles.divider} />

                <div className={styles.bannerSection} >
                    <h3>12k</h3>
                    <p>Exparience Doctor</p>
                </div>
            </div>
            <div className={styles.effect} >
                <img src={effect1} alt="" />
                <img src={effect2} alt="" />
                <img src={effect2} alt="" />
            </div>
        </div>
    )
}

export default Banner
