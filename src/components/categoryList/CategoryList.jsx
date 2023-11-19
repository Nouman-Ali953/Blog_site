import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>
        <div className={styles.categories}>
          <Link
            className={`${styles.category} ${styles.style}`}
            href="/blog?cat=styles"
          >
          
            <Image src="/style.png" alt="style" width={32} height={32} className={styles.image}/>
          style
          </Link>
          <Link
            className={`${styles.category} ${styles.fashion}`}
            href="/blog?cat=styles"
          >
            <Image src="/fashion.png" alt="style" width={32} height={32} className={styles.image}/>
          fashion
          </Link>
          <Link
            className={`${styles.category} ${styles.food}`}
            href="/blog?cat=styles"
          >
            <Image src="/food.png" alt="style" width={32} height={32} className={styles.image}/>
          food
          </Link>
          <Link
            className={`${styles.category} ${styles.travel}`}
            href="/blog?cat=styles"
          >
            <Image src="/travel.png" alt="style" width={32} height={32} className={styles.image}/>
          travel
          </Link>
          <Link
            className={`${styles.category} ${styles.culture}`}
            href="/blog?cat=styles"
          >
            <Image src="/culture.png" alt="style" width={32} height={32} className={styles.image}/>
          culture
          </Link>
          <Link
            className={`${styles.category} ${styles.coding}`}
            href="/blog?cat=styles"
          >
            <Image src="/coding.png" alt="style" width={32} height={32} className={styles.image}/>
          coding
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
