import { useState } from "react";
import type { BlockPosition } from "./types";

export function useBlockCreate(refetchProcess: () => void) {
  const [positionToCreate, setPositionToCreate] = useState<BlockPosition>();

  const startCreate = (position: BlockPosition) => {
    setPositionToCreate(position);
  };

  const stopCreate = () => {
    setPositionToCreate(undefined);
  };

  const successCreate = () => {
    refetchProcess();
    stopCreate();
  };

  return {
    positionToCreate,
    startCreate,
    stopCreate,
    successCreate,
  };
}
