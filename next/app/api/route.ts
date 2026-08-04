import { apiService } from "../../features/services/api-service";
import { errorMessage, errorResponse, successResponse } from "../../lib/api/response";
import { parseQueryParams } from "../../lib/utils";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = parseQueryParams(searchParams);

    const data = await apiService.get(params);
    return successResponse(data);
  } catch (error) {
    return errorResponse(errorMessage(error));
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = await apiService.post(body);
    return successResponse(data);
  } catch (error) {
    return errorResponse(errorMessage(error));
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const data = await apiService.put(body);
    return successResponse(data);
  } catch (error) {
    return errorResponse(errorMessage(error));
  }
}

export async function DELETE(_: Request) {
  try {
    const id = "id";
    const data = await apiService.delete(id);
    return successResponse(data);
  } catch (error) {
    return errorResponse(errorMessage(error));
  }
}