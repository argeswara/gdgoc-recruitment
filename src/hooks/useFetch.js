import { useState, useEffect, useCallback } from "react";
import { fetchEndpoint } from "../services/api";

export default function useFetch(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchEndpoint(path, controller.signal)
      .then(setData)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [path, attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  return { data, loading, error, retry };
}