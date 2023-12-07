import { UserResponse } from "../User/types";

export interface CourseCreateRequest {
    name: string;
}

export interface CourseResponse {
    id: number;
    name: string;
}
  
export interface CourseWithUsersResponse {
    id: string;
    name: string;
    users: UserResponse[];
}