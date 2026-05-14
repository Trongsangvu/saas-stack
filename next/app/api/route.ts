import { apiService } from "../../features/services/api-service";
import { errorMessage, errorResponse, successResponse } from "../../lib/api/response";

export async function GET(request: Request) {
  try {
    const params = "params";
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

export async function DELETE(request: Request) {
  try {
    const id = "id";
    const data = await apiService.delete(id);
    return successResponse(data);
  } catch (error) {
    return errorResponse(errorMessage(error));
  }
}