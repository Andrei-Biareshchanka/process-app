import { useState } from "react";
import { manageBlockApi } from "../api";
import type { BlockPosition } from "./types";

export type CreateBlockData = {
  name: string;
  type: string;
  data: string;
};

export function useCreateBlock({
  processId,
  blockPosition,
  onSuccess,
}: {
  processId: string;
  blockPosition?: BlockPosition;
  onSuccess?: () => void;
}) {
  const [isCreating, setIsCreating] = useState(false);

  if (!blockPosition) {
    return;
  }

  const create = (data: CreateBlockData) => {
    setIsCreating(true);
    manageBlockApi
      .createBlock({
        processId,
        ...data,
        ...blockPosition,
      })
      .then(onSuccess)
      .finally(() => setIsCreating(false));
  };

  return { isCreating, startCreate: create };
}
