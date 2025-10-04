import React from "react";
import styles from "./Products.module.css";
import { useSearchParams } from "react-router";
import { API } from "../../global/API";
import { ShoppingCart, Star } from "lucide-react";

export const Products = () => {
    const [sea] = useSearchParams();
    const category = sea.get("category") || undefined;
    const { error, isLoading, data } = API.useProdQuery({
        limit: 50,
        skip: 0,
        category
    });

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>;
        } else {
            return <h1>Error: {error.message}</h1>;
        }
    };

    if (isLoading) {
        return (
            <aside className={styles.loading}>
                <div className={styles.spinner}></div>
            </aside>
        );
    }
    
    return (
    <React.Fragment>
    <main className={styles.prod__container}>
        <aside className={styles.prod__header}>
            <h1 className={styles.prod__title}>
                {category ? `${category.charAt(0).toUpperCase() + 
                    category.slice(1)} Products` : "All Products"}
            </h1>
            <p 
                className={styles.prod__subtitle}
                >{data?.total} Products Available
            </p>
        </aside>
        
        <aside className={styles.prod__grid}>
            {data && data.products.map((prod) => (
                <section key={prod.id} className={styles.prod__card}>
                    <aside className={styles.img__wrap}>
                        <img 
                            className={styles.image}
                            alt={prod.title}
                            src={prod.thumbnail}
                        />
                        {prod.discountPercentage > 0 && (
                            <div className={styles.discount}>
                                -{Math.round(prod.discountPercentage)}%
                            </div>
                        )}
                    </aside>

                    <aside className={styles.card__body}>
                        <h3 className={styles.card__title}>
                            {prod.title}
                        </h3>
                        <p className={styles.card__desc}>
                            {prod.description}
                        </p>
                        <div className={styles.card__rating}>
                            <Star className={styles.card__star} />
                            <span className={styles.card__rating}
                                >{prod.rating}
                            </span>
                            <span className={styles.card__stock}>
                                {prod.stock > 0 ? 
                                    `${prod.stock} in stock` : 
                                    "Out-of-stock"}
                            </span>
                        </div>
                        <section className={styles.card__footer}>
                            <aside>
                                <span className={styles.card__price}>
                                    {prod.price}
                                </span>
                                <button
                                    disabled={prod.stock === 0}
                                    className={styles.card__button}
                                    onClick={() => {"addToCart"}}
                                >
                                    <ShoppingCart className={styles.cart__shop} />
                                    <span>Add</span>
                                </button>
                            </aside>
                        </section>
                    </aside>
                </section>
            ))}
        </aside>
    </main>
    </React.Fragment>
    );
};


