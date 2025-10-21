import styles from "./layout.module.css";

export function Layout({
  process,
  isLoading,
}: {
  process?: {
    name: string;
  };
  isLoading?: boolean;
}) {
  return (
    <div className={styles.root}>
      {process && <h1 className={styles.title}>Process: {process.name}</h1>}
      {isLoading && <div className={styles.loading}>loading...</div>}
    </div>
  );
}
