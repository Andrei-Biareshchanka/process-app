import styles from "./styles.module.css";

export function Layout({
  createForm,
  cards,
  isLoading,
  filters,
}: {
  filters: React.ReactNode;
  createForm: React.ReactNode;
  cards: React.ReactNode;
  isLoading?: boolean;
}) {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Process list</h1>
      {createForm}
      {filters}
      <div className={styles.list}>
        {cards}
        {isLoading && <div className={styles.loading}>loading...</div>}
      </div>
    </div>
  );
}
