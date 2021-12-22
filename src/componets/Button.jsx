import React from 'react'
import styles from '../styles/styled-components/Button.module.scss';

const Button = ({children, outline}) => {
    let classes = [styles.button]

    if ( outline ) {
        classes.push(styles.outline)
    }

    return (
        <button className={classes.join(' ')} >
            {children}
        </button>
    )
}

export default Button
