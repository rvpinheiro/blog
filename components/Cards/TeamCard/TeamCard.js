'use client'

import React, { useEffect } from 'react';
import styles from './TeamCard.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamCard = ({ image, name, role, bio }) => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);
    return (
        <div className={styles.card}
            data-aos="zoom-in-up">
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
