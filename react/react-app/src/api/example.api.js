import { generateQueryString } from "../utils/string.util";
import { callAPI } from "./axios.client";

const exampleEndpoints = {
  list: "examples",
  byId: (id) => `examples/${id}`,
};

const exampleApi = {
  list: (query = {}) => {
    const queryString = generateQueryString(query);
    return callApi("get", `${exampleEndpoints.list}?${queryString}`);
  },
  create: (data) => {
    return callApi("post", exampleEndpoints.list, data);
  },
  byId: (id) => {
    return callApi("get", exampleEndpoints.byId(id));
  },
  update: async (id, params) => {
    return await callAPI("put", exampleEndpoints.byId(id), params);
  },
  delete: async (id) => {
    return await callAPI("delete", exampleEndpoints.byId(id));
  },
};

export default exampleApi;
