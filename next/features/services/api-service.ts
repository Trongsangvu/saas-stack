import { API_ENDPOINTS } from "../../app/constants/endpoints";
import { apiFetch } from "../../lib/api/api-fetch";
import { ExampleType } from "../types/example-type";

export const apiService = {
  async get(params: any) {
    const url = API_ENDPOINTS.example;
    return apiFetch<ExampleType>(url);
  },

  async post(data: any) {
    const url = API_ENDPOINTS.example;
    return apiFetch<ExampleType>(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async put(data: any) {
    const url = API_ENDPOINTS.example;
    return apiFetch<ExampleType>(url, {
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