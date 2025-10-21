import { Modal } from "./ui/modal";

export function Facade({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      onClose={onClose}
      title="Create block"
      body={<div>hello</div>}
      footer={null}
    />
  );
}
