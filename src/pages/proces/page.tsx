import { BlocksFlow } from "../../modules/blocks-flow";
import { CreateBlockModal } from "../../modules/manage-blok";
import { useBlockCreate } from "./model/use-block-create";
import { useProcess } from "./model/use-process";
import { useProcessId } from "./model/use-process-id";
import { Root } from "./ui/root";

export function Page() {
  const id = useProcessId();
  const process = useProcess(id);
  const createBlock = useBlockCreate();

  return (
    <Root
      process={process.data}
      isLoading={process.isLoading}
      flow={
        process.data && (
          <BlocksFlow
            blocks={process.data.blocks}
            onFlowClick={createBlock.startCreate}
          />
        )
      }
      modals={
        <CreateBlockModal
          isOpen={createBlock.isCreating}
          onClose={createBlock.stopCreate}
        />
      }
    />
  );
}
