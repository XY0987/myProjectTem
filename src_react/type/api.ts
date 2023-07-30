import type { AxiosRequestConfig, AxiosResponse } from "axios";

// axios
export interface MyIntercepton<T = AxiosResponse> {
  requsetSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requsetFailureFn?: (err: any) => any;
  responseSuccessFn?: (res: T) => T;
  responseFailureFn?: (err: any) => any;
}

export interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MyIntercepton<T>;
}
