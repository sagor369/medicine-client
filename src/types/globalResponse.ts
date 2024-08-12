import { BaseQueryApi } from "@reduxjs/toolkit/query";

type errorResponse = {
  data: {
    success: boolean;
    message: string;
    stack: string;
  };
  status: number;
};
type successResponse = {
  success: boolean;
  message: string;
  stack: string;
};
type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  error?: errorResponse;
  data?: T;
  meta?: TMeta;
  success: boolean
  message: string
};

export type TResponseData<T> = TResponse<T> &BaseQueryApi 
