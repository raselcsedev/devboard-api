export interface LoginInput {
  email     : string;
  password  : string;
  ipAddress : string;
  userAgent : string;
}

export interface LoginResult {
  accessToken : string;
  user        : {
    id    : string;
    name  : string;
    email : string;
  };
}