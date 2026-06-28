export interface ApiResponse<T = null> {
  success : boolean;
  message : string;
  data?   : T;
  errors?: Record<string, string[]> | unknown;
}

export function successResponse<T>(
  message : string,
  data?   : T,
): ApiResponse<T> {
  return {
    success : true,
    message,
    ...(data !== undefined && { data }),
  };
}

export function errorResponse(
  message: string,
  errors?: unknown,
): ApiResponse {
  return {
    success: false,
    message,
    ...(errors !== undefined && { errors }),
  };
}