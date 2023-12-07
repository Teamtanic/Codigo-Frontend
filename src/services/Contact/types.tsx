export interface ContactCreateRequest {
    email: string;
    telephone: string;
    cell_phone: string;
    companyId: string; 
    userId: string;
}

export interface ContactResponse {
    email: string;
    telephone: string;
    cell_phone: string;
}