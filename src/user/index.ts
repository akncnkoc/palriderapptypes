export type AuthenticateSuccessResponseType = {
  status: number;
  message: string;
  data: string;
};

export type AuthenticateUserRequestDTO = {
  phone_number: string;
};

export type VerifyUserRequestDTO = {
  phone_number: string;
  code: string;
};
