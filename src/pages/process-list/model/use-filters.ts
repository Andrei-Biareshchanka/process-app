import { useDeferredValue, useState } from "react";

export function useFilters(
  items: { id: string; name: string; onDelete: () => void }[]
) {
  const [filterName, setFilterName] = useState("");
  const defferedFilterName = useDeferredValue(filterName);

  const filteredList = items.filter((item) =>
    item.name.toLowerCase().includes(defferedFilterName.toLowerCase())
  );

  return [
    filteredList,
    {
      filterName,
      setFilterName,
    },
  ] as const;
}
