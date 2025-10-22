import { Link } from "react-router";
import styles from "./styles.module.css";

export function Layout({
  id,
  name,
  onDelete,
}: {
  id: string;
  name: string;
  onDelete?: () => void;
}) {
  return (
    <div className={styles.root}>
      <div className={styles.name}>{name}</div>
      <Link to={`/process/${id}`} className={styles.link}>
        open
      </Link>
      <button className={styles.deleteBtn} onClick={onDelete}>
        delete
      </button>
    </div>
  );
}
