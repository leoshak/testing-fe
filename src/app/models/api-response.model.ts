import { Book } from "./book.model";

export class ApiResponse {
    error?: boolean;
    message?: string;
    data?: Book[];
}
