export interface BankAccountCreateRequest {
  name: string
  balance: number
  location: string
}

export interface BankAccountResponse {
  id: string;
  name: string;
  balance: number;
  location: string;
}