import { ApiError } from "./errors";

type NextFetchInit = RequestInit & {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

export async function apiFetch<T>(
  input: RequestInfo,
  init?: NextFetchInit
): Promise<T> {
  const res = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const json = await res.json();

  if (!res.ok) {
    throw new ApiError(
      json.message || "Something went wrong",
      res.status
    );
  }

  return json as T;
}