import styles from "./styles.module.css";

export function Layout({
  title,
  body,
  footer,
  onClose,
}: {
  title: string;
  body: React.ReactNode;
  footer: React.ReactNode;
  onClose?: () => void;
}) {
  return (
    <div className={styles.root}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          x
        </button>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.body}>{body}</div>
        <div className={styles.footer}>{footer}</div>
      </div>
    </div>
  );
}
