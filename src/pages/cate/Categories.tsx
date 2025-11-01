import React from "react";
import styles from "./Categories.module.css";

export const Categories = () => {
    return (
        <React.Fragment>
            <main className={styles.cat__container}>
                <h1 className={styles.title}>Categories</h1>
                <section>
                    <div className={styles.bounce__element}></div>
                    <div className={styles.rotate__element}></div>
                    <div className={styles.pulse__element}></div>
                    <div className={styles.slideIn__element}></div>
                    <div className={styles.fadeIn__element}></div>
                </section>
            </main>
        </React.Fragment>
    );
};


