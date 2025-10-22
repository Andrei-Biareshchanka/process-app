import type { WebhookFormData } from "../../../view-model/use-create-form";
import styles from "./styles.module.css";

export function Layout({
  formData,
  onChangeFormData: onChangeData,
}: {
  formData: WebhookFormData;
  onChangeFormData: (data: WebhookFormData) => void;
}) {
  return (
    <>
      <input
        type="text"
        className={styles.input}
        name="url"
        value={formData.url}
        onChange={(e) => onChangeData({ ...formData, url: e.target.value })}
      />
      <select
        className={styles.input}
        name="method"
        value={formData.method}
        onChange={(e) => onChangeData({ ...formData, method: e.target.value })}
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
      </select>
    </>
  );
}
