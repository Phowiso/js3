import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/data/products";
import styles from "./page.module.css";

export default function Home() {
  const products = getAllProducts();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>МебельДом</h1>
        <p className={styles.tagline}>Мебель для дома и офиса</p>
      </header>

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Каталог товаров</h2>

        <div className={styles.grid}>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.price}>
                  {product.price.toLocaleString("ru-RU")} ₽
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>МебельДом — учебный проект на Next.js | Студенческая работа</p>
      </footer>
    </div>
  );
}
