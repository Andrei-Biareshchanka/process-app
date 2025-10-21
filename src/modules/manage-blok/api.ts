import type { Process } from "./model/types";

export async function getById(id: string) {
  return await fetch(`/api/processes/${id}`).then(
    (res) => res.json() as Promise<Process>
  );
}

type CreateBLockBody = {
  processId: string;
  name: string;
  type: string;
  data: string;
  x: number;
  y: number;
};

export async function createBlock(data: CreateBLockBody) {
  return await fetch(`/api/block`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

type CreateRelationBody = {
  inputId: string;
  outputId: string;
  inputPort: string;
  outputPort: string;
};

export async function addRelation(data: CreateRelationBody) {
  return await fetch(`/api/block/relation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export const processApi = {
  getById,
  createBlock,
  addRelation,
};
