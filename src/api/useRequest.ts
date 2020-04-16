import {useState} from 'react';

export default function useRequest<T>(
  request: (...args) => Promise<T>,
  callbacks?: {
    onStart?: () => void,
    onSuccess?: (res: T) => void,
    onError?: (error: Error) => void,
    onComplete?: () => void,
  },
) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetch = async (...args: any[]) => {
    try {
      callbacks?.onStart?.();

      setLoading(true);
      setSuccess(false);
      setFail(false);

      setData(null);
      setError(null);

      const response = await request(...args);

      callbacks?.onSuccess?.(response);

      setLoading(false);
      setSuccess(true);

      setData(response);
    } catch (err) {
      callbacks?.onError?.(err);

      setLoading(false);
      setFail(true);

      setError(err);
    } finally {
      callbacks?.onComplete?.();
    }
  };

  return {
    loading,
    success,
    fail,
    data,
    error,
    fetch,
  };
}
