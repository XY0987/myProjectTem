import { useCallback, useEffect, useRef, useState } from "react";

export function useCountDown(
  initCount = 10,
  callBack = () => {},
  endBack = () => {},
) {
  const timeId = useRef<{ id: number }>({ id: 0 });
  const [count, setCount] = useState(initCount);
  const [isdisable, setIsdisable] = useState(false);
  const start = () => {
    setCount(initCount);
    setIsdisable(true);
    timeId.current.id = window.setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  };
  //   首先清除定时器
  useEffect(() => window.clearInterval(timeId.current.id), []);
  //   判断是否需要清除
  useEffect(() => {
    if (count !== initCount || isdisable) {
      callBack();
    }
    if (count === 0) {
      clearInterval(timeId.current.id);
      setCount(initCount);
      endBack();
      setIsdisable(false);
    }
  }, [callBack, count, initCount, endBack, isdisable]);
  return { start, count, isdisable };
}

// 负责传递数据
export function useLogin() {}
// 负责返回数据用于判断加载中和跳转

export const useDebounce = <V>(value: V, delay?: number): V => {
  const [debounceValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次在value变化以后设置一个定时器
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // 每次在上一个useEffect处理完以后再运行(这里返回的一个函数会执行当前 effect 之前对上一个 effect 进行清除)
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};

// 传入一个获取信息的回调函数，设置加载状态,返回获取的结果以及是否加载中
export const useAsync = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    error: null,
    total: 0,
  });

  // 返回一个函数，用于保存起来
  const retry = useRef(() => {});

  const setDate = (data: any) => {
    setState({
      data: data.data.list,
      isLoading: false,
      error: null,
      total: data.data.total,
    });
  };

  const setError = (err: any) => {
    setState({
      data: null,
      isLoading: false,
      error: err,
      total: 0,
    });
  };

  const run = useCallback(
    (promise: Promise<any>, runConfig?: { retry: () => Promise<any> }) => {
      retry.current = () => {
        if (runConfig?.retry) {
          run(runConfig?.retry(), runConfig);
        }
      };

      setState((prevState) => ({ ...prevState, isLoading: true }));
      return promise
        .then((data) => {
          setDate(data || []);
          return data;
        })
        .catch((err) => {
          setError(err);
          return err;
        });
    },
    [],
  );

  return {
    run,
    setDate,
    setError,
    ...state,
    retry,
  };
};

export const useMounted = (callBack: () => void) => {
  useEffect(callBack);
};
