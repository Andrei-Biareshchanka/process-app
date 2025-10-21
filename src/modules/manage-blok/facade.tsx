import { useId } from "react";
import { CreateForm } from "./ui/create-form";
import { Modal } from "./ui/modal";
import { SubmitButton } from "./ui/submit-button";

export function Facade({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) {
  const formId = useId();
  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      onClose={onClose}
      title="Create block"
      body={<CreateForm id={formId} onSubmit={() => {}} />}
      footer={
        <>
          <SubmitButton formId={formId} />
        </>
      }
    />
  );
}
