export type AuthenticateSuccessResponseType = {
    status: number;
    message: string;
    data: string;
};
export type AuthenticateRequestType = {
    email: string;
    password: string;
};
export type AuthenticateVerifyRequestType = {
    phone_number: string;
    code: string;
};
export type BaseUserDto = {
    id: string;
    name: string;
    surname: string;
    phone_number: string;
    email: string;
    username: string;
    user_type: "dashboard_user";
    phone_number_verified_at: Date | null;
    email_verified_at: Date | null;
    dashboard_user: any;
    app_state: "background" | "active";
};
