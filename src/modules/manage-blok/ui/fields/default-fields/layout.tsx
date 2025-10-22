import { BlockTypes } from "../../../model/types";
import type { FormData } from "../../../view-model/use-create-form";
import styles from "./styles.module.css";

export function Layout({
  formData,
  handleNameChange,
  handleTypeChange,
}: {
  formData: FormData;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <>
      <select
        className={styles.input}
        required
        name="type"
        value={formData.type}
        onChange={handleTypeChange}
      >
        {Object.values(BlockTypes).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <input
        type="text"
        className={styles.input}
        placeholder="block name"
        required
        name="name"
        value={formData.name}
        onChange={handleNameChange}
      />
    </>
  );
}
