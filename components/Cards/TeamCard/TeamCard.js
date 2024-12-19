import React from 'react';
import styles from './TeamCard.module.css';

const TeamCard = ({ image, name, role, bio }) => {
    return (
        <div className={styles.card}>
            <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{name}</h3>
                <div className={styles.cardRoleContainer}>
                    <p className={styles.cardRole}>{role}</p>
                </div>
                <p className={styles.cardDescription}>{bio}</p>
                <div className={styles.socialIcons}>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
