// Define the types for your user and API responses
export interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties as needed
}

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  // Add other fields if your sign-up form requires them
}

export interface SignUpResponse {
  user: User;
  token?: string; // Optional: if your API returns a token upon sign-up
  message?: string;
}

// You can also define a type for API error responses
export interface ApiError {
  message: string;
  errors?: { [key: string]: string[] }; // Example for validation errors
}
