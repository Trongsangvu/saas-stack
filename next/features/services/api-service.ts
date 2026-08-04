import { API_ENDPOINTS } from "../../app/constants/endpoints";
import { apiFetch } from "../../lib/api/api-fetch";
import { generateQueryString } from "../../lib/utils";
import { CreateExampleRequest, ExampleResponse, GetExampleParams } from "../types/example-type";

export const apiService = {
  async get(params: GetExampleParams) {
    const queryString = generateQueryString(params);

    const url = `${API_ENDPOINTS.example}?${queryString}`;
    return apiFetch<ExampleResponse>(url, {
      cache: "no-store"
    });
  },

  async post(data: CreateExampleRequest) {
    const url = API_ENDPOINTS.example;
    return apiFetch<ExampleResponse>(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async put(data: CreateExampleRequest) {
    const url = API_ENDPOINTS.example;
    return apiFetch<ExampleResponse>(url, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async delete(id: string) {
    const url = `${API_ENDPOINTS}/${id}`;
    return apiFetch(url, {
      method: 'DELETE',
    });
  }
};