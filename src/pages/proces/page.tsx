import { useProcess } from "./modal/use-process";
import { useProcessId } from "./modal/use-process-id";
import { Root } from "./ui/root";

export function Page() {
  const id = useProcessId();
  const process = useProcess(id);
  return <Root process={process.data} isLoading={process.isLoading} />;
}
