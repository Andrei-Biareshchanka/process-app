import styles from "./styles.module.css";

export function Layout({
  name,
  onNameChange,
}: {
  name: string;
  onNameChange: (name: string) => void;
}) {
  return (
    <div className={styles.root}>
      <input
        name="name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onNameChange(e.target.value)
        }
        type="text"
        className={styles.input}
        placeholder="process name search..."
        required
      />
    </div>
  );
}
