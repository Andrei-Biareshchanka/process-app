import { BlocksFlow } from "../../modules/blocks-flow";
import { CreateBlockModal, useStartCreate } from "../../modules/manage-blok";
import { useProcess } from "./model/use-process";
import { useProcessId } from "./model/use-process-id";
import { Root } from "./ui/root";

export function Page() {
  const id = useProcessId();
  const process = useProcess(id);
  const startCreate = useStartCreate();

  return (
    <Root
      process={process.data}
      isLoading={process.isLoading}
      flow={
        process.data && (
          <BlocksFlow blocks={process.data.blocks} onFlowClick={startCreate} />
        )
      }
      modals={<CreateBlockModal processId={id} onSuccess={process.refetch} />}
    />
  );
}
