import { CompanyAreaAddressUserDTO } from "~/company";
import { CourierDTO } from "~/courier";

export type BaseUserType =
  | "company_area_address_user"
  | "courier"
  | "dashboard_user"
  | "unidentified";
export type BaseUserAppState = "background" | "active";
export type BaseUserDTO = {
  id: string;
  phone_number: string;
  email: string;
  username: string;
  name: string | null;
  surname: string | null;
  is_active: boolean;
  is_deactivated: boolean;
  birth_at: string | null;
  phone_number_verified_at: string | null;
  email_verified_at: string | null;
  user_type: BaseUserType;
  app_state: BaseUserAppState;
  courier: CourierDTO | null;
  company_area_address_user: CompanyAreaAddressUserDTO | null;
};

export type FileType = {
  name: string;
  uri: string;
  size: number;
  type: string;
};

export * from "./requests";
