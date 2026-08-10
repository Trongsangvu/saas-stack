export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  EXAMPLES: {
    LIST: "/examples",
    CREATE: "/examples/create",
    UPDATE: "/examples/update",
    DETAIL: "/examples/:id",
  },
};

export const ROUTES_GEN = {
  exampleUpdate: (id) => `examples/update/${id}`,
  exampleDetail: (id) => `examples/${id}`,
};
