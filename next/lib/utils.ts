type QueryValue = string | number | boolean | undefined | null;

type QueryParams = Record<string, QueryValue>;

export function parseQueryParams(searchParams: URLSearchParams) {
  return Object.fromEntries(searchParams.entries());
}

export function generateQueryString(params: QueryParams = {}) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.append(key, String(value));
    }
  });

  return query.toString();
}