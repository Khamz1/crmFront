export type directorDataType = {
    _id: string;
    fullName: string;
    email: string;
    password: string;
  };
  
  export type LoginResponse = {
    token: string;
    error: string | null;
    director: directorDataType;
  
  };