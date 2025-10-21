import { useEffect, useState } from "react";
import { processApi } from "../api";
import type { Process } from "./types";

export function useProcess(id: string) {
  const [process, setProcess] = useState<Process>();
  const [isLoading, setLoading] = useState(true);

  const fetchProcess = () => {
    processApi.getById(id).then((process) => {
      setProcess(process);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchProcess();
  }, []);

  return {
    data: process,
    isLoading,
  };
}
