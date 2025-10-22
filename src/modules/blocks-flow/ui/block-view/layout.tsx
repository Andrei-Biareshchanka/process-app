import type { Block } from "../../model/types";
import styles from "./styles.module.css";

export function Layout({ block }: { block: Block }) {
  return (
    <div className={styles.root} style={{ left: block.x, top: block.y }}>
      {block.name}
    </div>
  );
}
