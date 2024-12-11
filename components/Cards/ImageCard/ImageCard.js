import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, altText }) => {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={image} alt={altText} />
        </div >
    );
};

export default ImageCard;
