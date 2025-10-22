import type { FlowPosition } from "../../model/types";
import styles from "./styles.module.css";

export function Layout({
  onClick,
}: {
  onClick: ({ x, y }: FlowPosition) => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return <div className={styles.root} onClick={handleClick}></div>;
}
