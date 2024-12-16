"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Divider from '../../../components/Divider/Divider';
import emailjs from 'emailjs-com';

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        referral: '',
        message: ''
    });

    const [feedback, setFeedback] = useState({ message: '', type: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_zmb1jvh',
                'template_vg656q7',
                e.target,
                'uS50A--KdlVt5oGKs'
            )
            .then(
                (result) => {
                    setFeedback({
                        message: 'Mensagem enviada com sucesso!',
                        type: 'success'
                    });

                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        referral: '',
                        message: ''
                    });

                    setTimeout(() => {
                        setFeedback({ message: '', type: '' });
                    }, 7000);
                },
                (error) => {
                    setFeedback({
                        message: 'Erro ao enviar a mensagem, tente novamente.',
                        type: 'error'
                    });

                    setTimeout(() => {
                        setFeedback({ message: '', type: '' });
                    }, 7000);
                }
            );
    };

    return (
        <div className={styles.contactPage}>
            <Divider text="Fala connosco!" />
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <div className={styles.field}>
                        <label className={styles.label}>Nome</label>
                        <input
                            type="text"
                            className={styles.input}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Email</label>
                        <input
                            type="email"
                            className={styles.input}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.field}>
                        <label className={styles.label}>Telefone</label>
                        <input
                            type="tel"
                            className={styles.input}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Como ouviste falar de nós?</label>
                        <select
                            className={styles.dropdown}
                            name="referral"
                            value={formData.referral}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Escolha uma opção
                            </option>
                            <option value="amigos">Amigos</option>
                            <option value="redes sociais">Redes Sociais</option>
                            <option value="pesquisa online">Pesquisa Online</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>
                </div>
                <div className={`${styles.field} ${styles.messageField}`}>
                    <label className={styles.label}>Mensagem</label>
                    <textarea
                        className={styles.textarea}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button type="submit" className={styles.button}>
                    Enviar mensagem
                </button>
            </form>
            {feedback.message && (
                <div
                    className={`${styles.feedbackMessage} ${feedback.type === 'success' ? styles.success : styles.error}`}
                >
                    {feedback.message}
                </div>
            )}
        </div>
    );
};

export default Page;