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

export async function deleteRelation(id: string) {
  return await fetch(`/api/block/relation${id}`, {
    method: "DELETE",
  });
}

export const blocksFlowApi = {
  addRelation,
  deleteRelation,
};
