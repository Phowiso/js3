import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById, getAllProducts } from "@/data/products";
import styles from "./page.module.css";

// Статические параметры для всех товаров
export function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({
    id: p.id.toString(),
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const productId = parseInt(id, 10);
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← В каталог
        </Link>
        <span className={styles.logo}>МебельДом</span>
      </header>

      <main className={styles.main}>
        <div className={styles.productCard}>
          <div className={styles.imageSection}>
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={380}
              className={styles.productImage}
              priority
            />
          </div>

          <div className={styles.infoSection}>
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.price}>
              {product.price.toLocaleString("ru-RU")} ₽
            </p>

            <div className={styles.specs}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Материал</span>
                <span className={styles.specValue}>{product.material}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Артикул</span>
                <span className={styles.specValue}>{product.id}</span>
              </div>
            </div>

            <div className={styles.descBlock}>
              <h2 className={styles.descTitle}>Описание</h2>
              <p className={styles.description}>{product.description}</p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>МебельДом — учебный проект на Next.js | Студенческая работа</p>
      </footer>
    </div>
  );
}
