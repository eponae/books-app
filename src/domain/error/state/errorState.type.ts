import { setError } from "./action/error";

export type ErrorReducerType = { hasError: boolean };

export type ErrorActionType = ReturnType<typeof setError>;
