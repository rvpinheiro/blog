import React from 'react';
import styles from './TeamCard.module.css';

const TeamCard = ({ image, name, role, description }) => {
    return (
        <div className={styles.card}>
            <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{name}</h3>
                <p className={styles.cardRole}>{role}</p>
                <p className={styles.cardDescription}>{description}</p>
                <div className={styles.socialIcons}>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-facebook"></i>
                </div>
                <p className={styles.profileLink}>Ver Perfil</p>
            </div>
        </div>
    );
};

export default TeamCard;
