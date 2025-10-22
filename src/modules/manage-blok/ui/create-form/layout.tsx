import { useCreateForm, type FormData } from "../../view-model/use-create-form";
import { DefaultFields } from "../fields/default-fields";
import { WebhookFields } from "../fields/webhook-fields";
import styles from "./styles.module.css";

export function Layout({
  formId,
  onSubmit,
}: {
  formId: string;
  onSubmit: (formData: FormData) => void;
}) {
  const createForm = useCreateForm(onSubmit);

  return (
    <form
      className={styles.root}
      onSubmit={createForm.handleSubmit}
      id={formId}
    >
      <DefaultFields
        formData={createForm.formData}
        handleNameChange={createForm.handleNameChange}
        handleTypeChange={createForm.handleTypeChange}
      />
      {createForm.webhookFormData && (
        <WebhookFields
          formData={createForm.webhookFormData}
          onChangeFormData={createForm.handleChangeWebhookFormData}
        />
      )}
    </form>
  );
}
