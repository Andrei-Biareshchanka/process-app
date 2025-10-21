import styles from "./layout.module.css";

export function Layout({
  blocks,
  arrows,
  field,
}: {
  blocks: React.ReactNode;
  arrows: React.ReactNode;
  field: React.ReactNode;
}) {
  return (
    <div className={styles.root}>
      {field}
      {blocks}
      {arrows}
    </div>
  );
}
