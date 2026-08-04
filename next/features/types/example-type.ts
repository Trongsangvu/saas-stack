export type ExampleResponse = {
  id: number;
  name: string;
  description?: string;
};

export type CreateExampleRequest = {
  name: string;
  description?: string;
};

export type GetExampleParams = {
  page?: number;
  limit?: number;
};