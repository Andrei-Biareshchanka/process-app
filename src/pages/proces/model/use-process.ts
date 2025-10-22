import { useEffect, useState } from "react";
import { processApi } from "../api";
import type { Process } from "./types";

export function useProcess(id: string) {
  const [process, setProcess] = useState<Process>();
  const [isLoading, setLoading] = useState(true);

  const fetchProcess = () => {
    return processApi.getById(id).then((process) => {
      setProcess(process);
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchProcess().finally(() => setLoading(false));
  }, []);

  return {
    data: process,
    isLoading,
    refetch: fetchProcess,
  };
}
