import React, { useState } from 'react'
import styles from '../styles/styled-components/Navbar.module.scss';
import logo from '../assets/logo.png';
import Button from '../componets/Button'
import { slide as Menu } from 'react-burger-menu'
import '../styles/burger.scss'

const List = () => (
    <>
        <a href="#" className={styles.navbarLink} >Our Patients</a>
        <a href="#" className={styles.navbarLink} >Our Partners</a>
        <a href="#" className={styles.navbarLink} >Our People</a>
        <a href="#" className={styles.navbarLink} >Our Services</a>
        <a href="#" className={styles.navbarLink} >About</a>
    </>
)

const Navbar = () => {
    return (
        <div className={styles.navbar} >
            <div className={styles.navbarLogo} >
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div className={styles.navbarNav} >
                <div className={styles.navbarLinks} >
                    <List/>
                </div>
                <Button>
                    Get Appointment
                </Button>
            </div>
            <div className={styles.navbarMenu} >
                <Menu right>
                    <List/>
                    <Button>
                        Get Appointment
                    </Button>
                </Menu>
            </div>
        </div>
    )
}

export default Navbar
