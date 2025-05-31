import { BaseUserDTO } from "~/common";
import { OrderDTO } from "~/order";
export type CourierOnboardingState = "initialized" | "info_updated" | "document_uploaded" | "vehicle_uploaded" | "completed" | "onboarded";
export type CourierOrderState = "available" | "delivering" | "arriving";
export type CourierDTO = {
    id: string;
    name: string | null;
    user?: BaseUserDTO | null;
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
    approved_at: string | null;
    rejected_at_: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    courier_vehicles: Array<CourierVehicleDTO>;
    courier_bank_accounts: Array<CourierBankAccountDTO>;
    courier_documents: Array<CourierDocumentDTO>;
    courier_wallets: Array<CourierWalletDTO> | null;
    courier_wallet_transactions: Array<CourierWalletTransactionDTO> | null;
    acceptance_waiting_list: Array<string>;
};
export type CourierWalletDTO = {
    id: string;
    name: string;
    balance: number;
    courier_wallet_transactions: Array<CourierWalletTransactionDTO>;
};
export type CourierDocumentType = "profile_photo" | "identity_card_front" | "identity_card_back" | "driver_licence_front" | "driver_licence_back" | "unknown";
export type CourierDocumentStatus = "pending" | "refused" | "approved";
export type CourierDocumentDTO = {
    id: string;
    type: CourierDocumentType;
    status: CourierDocumentStatus;
    confirmed_at: string | null;
    rejected_at: string | null;
};
export type CourierWalletTransactionItemType = "order_earning" | "app_using_fee";
export type CourierWalletTransactionItemDTO = {
    id: string;
    name: string;
    description: string;
    amount: number;
    type: CourierWalletTransactionItemType;
};
export type CourierWalletTransactionDTO = {
    id: string;
    amount: number;
    transaction_type: "incoming" | "outgoing" | "tip" | "punishment";
    created_at: string;
    courier_wallet_transaction_items: Array<CourierWalletTransactionItemDTO>;
};
export type CourierWalletWithdrawRequestStatus = "requested" | "processing" | "accepted" | "rejected";
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
    is_suspended: boolean;
    is_primary: boolean;
    is_active: boolean;
    courier_id: string;
};
export type CourierVehicleType = "bike" | "motorcycle" | "car";
export type CourierVehicleStatus = "pending" | "approved" | "refused";
export type CourierVehicleDTO = {
    id: string;
    courier_id: string;
    type: CourierVehicleType;
    plate_number: string;
    status: CourierVehicleStatus;
    is_active: boolean;
    courier_vehicle_images: Array<CourierVehicleImageDTO>;
};
export type CourierVehicleImageDTO = {
    id: string;
    path: string;
};
