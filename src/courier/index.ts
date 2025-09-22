import { CompanyAreaAddressDTO } from "~/company";
import { OrderDTO, OrderRatingDTO, OrderStatus } from "~/order";

export type CourierOnboardingState =
  | "initialized"
  | "info_updated"
  | "document_uploaded"
  | "vehicle_uploaded"
  | "completed"
  | "onboarded";
export type CourierOrderState = "available" | "delivering" | "arriving";
export type CourierDTO = {
  id: string;
  name: string | null;
  identifier: string;
  onboarding_state: CourierOnboardingState;
  order_state: CourierOrderState;
  user_id: string;
  current_active_arriving_order_id: string | null;
  current_active_arrived_order_id: string | null;
  current_active_order_id: string | null;
  current_active_order_shipment_id: string | null;
  current_active_order_shipment_destination_id: string | null;
  current_active_arriving_order?: OrderDTO | null;
  active_vehicle: CourierVehicleDTO | null;
  confirmed_at: string | null;
  rejected_at_: string | null;
  created_at: string;
  courier_vehicles: Array<CourierVehicleDTO>;
  courier_bank_accounts: Array<CourierBankAccountDTO>;
  courier_documents: Array<CourierDocumentDTO>;
  courier_wallets: Array<CourierWalletDTO> | null;
  courier_wallet_transactions: Array<CourierWalletTransactionDTO> | null;
  order_ratings: Array<OrderRatingDTO>;
  average_rating: number;
  acceptance_waiting_list: Array<string>;
};

export type CourierWalletDTO = {
  id: string;
  name: string;
  balance: number;
  courier_wallet_transactions: Array<CourierWalletTransactionDTO>;
};
export type CourierDocumentType =
  | "profile_photo"
  | "identity_card_front"
  | "identity_card_back"
  | "driver_licence_front"
  | "driver_licence_back"
  | "unknown";

export type CourierDocumentRefuseTypeDTO = {
  id: string;
  name: string;
  description: string;
  group: string;
};
export type CourierDocumentStatus = "pending" | "refused" | "approved";
export type CourierDocumentDTO = {
  id: string;
  type: CourierDocumentType;
  status: CourierDocumentStatus;
  confirmed_at: string | null;
  rejected_at: string | null;
  courier_document_refuse_type_id: string | null;
  courier_document_refuse_type: CourierDocumentRefuseTypeDTO | null;
};

export type CourierWalletTransactionItemType =
  | "order_earning"
  | "app_using_fee"
  | "withdraw";
export type CourierWalletTransactionItemDTO = {
  id: string;
  name: string;
  description: string;
  amount: number;
  type: CourierWalletTransactionItemType;
};
export type CourierWalletTransactionType =
  | "start"
  | "incoming"
  | "outgoing"
  | "tip"
  | "punishment";
export type CourierWalletTransactionDTO = {
  id: string;
  amount: number;
  transaction_type: CourierWalletTransactionType;
  created_at: string;
  courier_id: string;
  order_id: string | null;
  courier_wallet_transaction_items: Array<CourierWalletTransactionItemDTO>;
};

export type CourierWalletWithdrawRequestStatus =
  | "requested"
  | "processing"
  | "accepted"
  | "rejected";
export type CourierWalletWithdrawRequestDTO = {
  id: string;
  amount: number;
  status: CourierWalletWithdrawRequestStatus;
  created_at: string;
  accepted_at?: string;
  rejected_at?: string;
  rejected_description: string;
};
export type CourierBankAccountDTO = {
  id: string;
  title: string;
  sort_code: string;
  account_holder_name: string;
  account_number: string;
  is_active: boolean;
  courier_id: string;
};

export type CourierVehicleType = "bike" | "motorcycle" | "car";
export type CourierVehicleStatus = "pending" | "approved" | "refused";
export type CourierVehicleRefuseTypeDTO = {
  id: string;
  name: string;
  description: string | null;
  group: string;
};
export type CourierVehicleDTO = {
  id: string;
  courier_id: string;
  type: CourierVehicleType;
  plate_number: string | null;
  status: CourierVehicleStatus;
  is_active: boolean;
  confirmed_at: string | null;
  rejected_at: string | null;
  courier_vehicle_photos: Array<CourierVehiclePhotoDTO>;
  courier_vehicle_refuse_type_id: string | null;
  courier_vehicle_refuse_type: CourierVehicleRefuseTypeDTO | null;
};
export type CourierVehiclePhotoDTO = {
  id: string;
  path: string;
};
export type CourierOrderDTO = {
  id: string;
  started_at: string;
  finished_at: string;
  status: OrderStatus;
  company_name: string;
  company_id: string;
  company_area_id: string;
  company_area_address_id: string;
  order_no: string;
  total_earning: number;
  is_order_rated: boolean;
  rating: number | null;
};
export type CourierBlockedCompanyAreaAddressDTO = {
  id: string;
  courier_id: string;
  company_area_address_id: string;
  courier_blocked_company_area_address_reason_id: string;
  courier: CourierDTO | null;
  company_area_address: CompanyAreaAddressDTO | null;
  courier_blocked_company_area_address_reason: CourierBlockedCompanyAreaAddressReasonDTO | null;
};
export type CourierBlockedCompanyAreaAddressReasonDTO = {
  id: string;
  name: string;
  description: string;
};
export type CourierStatisticsDTO = {
  total_earnings: number;
  total_wallet: number;
  total_mile: number;
  total_shipment_count: number;
  average_rating: number;
};
export type CourierWalletWithdrawalRequestStatus = "";
export type CourierWalletWithdrawalRequestDTO = {
  id: string;
  status: CourierWalletWithdrawalRequestStatus;
  amount: number;
  courier_bank_account: CourierBankAccountDTO;
  courier_wallet: CourierWalletDTO;
  accepted_at: string | null;
  rejected_at: string | null;
  created_at: string;
  rejected_description: string;
};
export * from "./requests";
