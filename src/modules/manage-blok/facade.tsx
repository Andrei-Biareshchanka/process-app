import { useId } from "react";
import type { BlockPosition } from "./model/types";
import { useCreateBlock } from "./model/use-create-block";
import { CreateForm } from "./ui/create-form";
import { Modal } from "./ui/modal";
import { SubmitButton } from "./ui/submit-button";

export function Facade({
  createPosition,
  onClose,
  processId,
  onSuccess,
}: {
  createPosition?: BlockPosition;
  onClose?: () => void;
  processId: string;
  onSuccess?: () => void;
}) {
  const formId = useId();

  const createBlock = useCreateBlock({
    processId,
    onSuccess,
    blockPosition: createPosition,
  });

  if (!createPosition) {
    return null;
  }

  return (
    <Modal
      onClose={onClose}
      title="Create block"
      body={<CreateForm id={formId} onSubmit={createBlock!.startCreate} />}
      footer={
        <>
          <SubmitButton formId={formId} />
        </>
      }
    />
  );
}
