import React from 'react'
import styles from '../styles/styled-components/Info.module.scss'
import image from '../assets/info-image.png'
import review from '../assets/review.png'
import arrow from '../assets/arrow.png'
import schedule from '../assets/schedule.png'
import Button from './Button'

const Info = () => {
    return (
        <div className={styles.info} >
           <div className={styles.infoImage} >
                <img src={image} alt="" />
                <div className={styles.infoReview} >
                    <div className={styles.infoReviewHeader} >
                        <div className={styles.infoUser} >
                            <img src={review} alt="" />
                            <div>
                                <h3>Dr. Anthony Barlen</h3>
                                <p>Specialist Neurology</p>
                            </div>
                        </div>
                        <button>
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                    <div className={styles.infoReviewFooter} >
                        <img src={schedule} alt="" />
                        <p>Sunday, December-5, 11:03-11:04</p>
                    </div>
                </div>
           </div>
           <div className={styles.infoContent} >
                <h2 className={styles.infoHeading} >Good health saves money, bad health cost more</h2>
                <p>Medical Service Company is a Post-Acute Healthcare Provider that specializes in Sleep Disorder and Chronic-Respiratory Disease Management. This is done through partnering with Health Systems.</p>
                <Button>Learn More</Button>
           </div>
        </div>
    )
}

export default Info
