import { useState } from "react";
import { BlockTypes, type FormData } from "../../model/types";
import { WebhookFields } from "../webhook-fields";
import styles from "./layout.module.css";

export function Layout({
  id,
  onSubmit,
}: {
  id: string;
  onSubmit: (formData: FormData) => void;
}) {
  const [formData, setFormData] = useState<FormData>({
    name: "Start",
    type: BlockTypes.Start,
    data: `{}`,
  });

  const handleTypeChange = (type: string) => {
    setFormData({ ...formData, type, data: `{}`, name: type });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit} id={id}>
      <select
        className={styles.input}
        required
        name="type"
        value={formData.type}
        onChange={(e) => handleTypeChange(e.target.value)}
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
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {formData.type === BlockTypes.Webhook && (
        <WebhookFields
          data={formData.data}
          onChangeData={(data) => setFormData({ ...formData, data })}
        />
      )}
    </form>
  );
}
