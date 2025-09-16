import { CourierDTO } from "~/courier";
import { OrderRatingDTO } from "~/order";
export type CompanyDTO = {
    id: string;
    name: string | null;
    official_name: string | null;
    stripe_customer_id: string;
    app_fee: number;
    onboarding_state: "initialized" | "info_updated" | "address_updated" | "completed" | "onboarded";
    status: "active" | "passive" | "suspended";
    company_areas: Array<CompanyAreaDTO>;
    company_categories: Array<CompanyCategoryDTO>;
    created_at: string;
};
export type CompanyAreaDTO = {
    id: string;
    name: string;
    email: string | null;
    status: string;
    company_id: string;
    company_area_addresses?: Array<CompanyAreaAddressDTO>;
};
export type CompanyAreaAddressDTO = {
    id: string;
    company_area_id: string;
    address: string;
    directions: string | null;
    longitude: number;
    latitude: number;
    building_name_or_number: string | null;
    average_rating?: number;
    post_code: string;
    onboarding_state: string;
    company_area_address_users?: Array<CompanyAreaAddressUserDTO>;
    company_area_address_documents?: Array<CompanyAreaAddressDocumentDTO>;
    company_area_address_photos?: Array<CompanyAreaAddressPhotoDTO>;
    order_ratings?: Array<OrderRatingDTO>;
    updated_at: string;
};
export type CompanyAreaAddressPhotoDTO = {
    id: string;
    company_area_address_photo_type: CompanyAreaAddressPhotoTypeDTO | null;
    status: CompanyAreaAddressPhotoStatus;
    company_id: string;
    company_area_address_id: string;
    approved_at: string | null;
    refused_at: string | null;
    company_area_address_photo_refuse_type?: CompanyAreaAddressPhotoRefuseTypeDTO | null;
};
export type CompanyAreaAddressDocumentTypeDTO = {
    id: string;
    name: string;
    group: string;
    description: string;
};
export type CompanyAreaAddressDocumentTypeTranslationDTO = {
    id: string;
    name: string;
    company_area_address_document_type_id: string;
    culture: string;
    group: string;
    description: string;
};
export type CompanyAreaAddressDocumentRefuseTypeDTO = {
    id: string;
    name: string;
    description: string;
};
export type CompanyAreaAddressDocumentRefuseTypeTranslationDTO = {
    id: string;
    name: string;
    company_area_address_document_refuse_type_id: string;
    culture: string;
    group: string;
    description: string;
};
export type CompanyAreaAddressPhotoTypeDTO = {
    id: string;
    name: string;
    group: string;
    description: string;
};
export type CompanyAreaAddressPhotoTypeTranslationDTO = {
    id: string;
    name: string;
    company_area_address_photo_type_id: string;
    culture: string;
    group: string;
    description: string;
};
export type CompanyAreaAddressPhotoRefuseTypeDTO = {
    id: string;
    name: string;
    description: string;
};
export type CompanyAreaAddressPhotoRefuseTypeTranslationDTO = {
    id: string;
    name: string;
    company_area_address_photo_refuse_type_id: string;
    culture: string;
    group: string;
    description: string;
};
export type CompanyAreaAddressDocumentStatus = "pending" | "approved" | "refused";
export type CompanyAreaAddressPhotoStatus = "pending" | "approved" | "refused";
export type CompanyAreaAddressDocumentDTO = {
    id: string;
    company_area_address_document_type: CompanyAreaAddressDocumentTypeDTO | null;
    status: CompanyAreaAddressDocumentStatus;
    company_id: string;
    company_area_address_id: string;
    approved_at: string | null;
    refused_at: string | null;
    company_area_address_document_refuse_type?: CompanyAreaAddressDocumentRefuseTypeDTO | null;
};
export type CompanyAreaAddressUserRoleDTO = {
    id: string;
    name: string;
};
export type CompanyAreaAddressUserDTO = {
    id: string;
    company_id: string | null;
    company_area_id: string | null;
    company_area_address_id: string | null;
    company_area_address_user_role_id: string | null;
    company_wallet_id: string | null;
    company_app_fee: number;
    acceptance_waiting_list: Array<string>;
    created_at: string | null;
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    is_active: boolean;
    company_area_address_user_role: CompanyAreaAddressUserRoleDTO | null;
};
export type CompanyPaymentMethodType = {
    id: string;
    title: string;
    card_number: string;
    expiry_date: string;
    cvv: string;
};
export type CompanyAreaAddressWalletDTO = {
    id: string;
    name: string;
    company_area_address_id: string;
    company_area_id: string;
    balance: number;
    inconsumable_balance: number;
    created_at: string;
};
export type CompanyAreaAddressWalletTransactionType = "start" | "add" | "subtract" | "transfer";
export type CompanyAreaAddressWalletTransactionDTO = {
    id: string;
    company_area_address_wallet_id: string;
    company_wallet_id: string;
    order_id: string | null;
    type: CompanyAreaAddressWalletTransactionType;
    company_area_address_user_id: string | null;
    amount: number;
    created_at: string;
    company_area_address_wallet_transaction_items: Array<CompanyAreaAddressWalletTransactionItemDTO>;
};
export type CompanyAreaAddressWalletTransactionItemType = "order_payment" | "transfer" | "app_using_fee";
export type CompanyAreaAddressWalletTransactionItemDTO = {
    id: string;
    name: string;
    description: string;
    amount: number;
    type: CompanyAreaAddressWalletTransactionItemType;
    company_area_address_wallet_transaction_id: string;
};
export type CompanyCategoryDTO = {
    id: string;
    name: string;
    culture: string;
};
export type CompanyCategoryTranslationDTO = {
    id: string;
    company_category_id: string;
    culture: string;
    name: string;
};
export type CompanyWalletDTO = {
    id: string;
    name: string;
    company_id: string;
    balance: number;
    inconsumable_balance: number;
    company_wallet_transactions: Array<CompanyWalletTransactionDTO>;
    created_at: string;
};
export type CompanyWalletTransactionType = "start" | "add" | "transfer" | "subtract";
export type CompanyWalletTransactionDTO = {
    id: string;
    company_wallet_id: string;
    type: CompanyWalletTransactionType;
    company_area_address_user_id: string;
    amount: number;
    created_at: string;
    company_wallet_transaction_items: Array<CompanyWalletTransactionItemDTO>;
};
export type CompanyWalletTransactionItemType = "transfer" | "balance_add" | "balance_withdraw";
export type CompanyWalletTransactionItemDTO = {
    id: string;
    name: string;
    description: string;
    amount: number;
    type: CompanyWalletTransactionItemType;
    company_wallet_transaction_id: string;
};
export type CompanyWalletTransferRequestDTO = {
    id: string;
    status: "pending" | "approved" | "rejected";
    company_wallet_id: string;
    company_area_address_wallet_id: string;
    company_area_address_user_id: string;
    company_area_address_user: CompanyAreaAddressUserDTO | null;
    amount: number;
    approved_at: string | null;
    rejected_at: string | null;
    created_at: string;
    company_area_address: CompanyAreaAddressDTO | null;
    company_area_address_wallet: CompanyAreaAddressWalletDTO | null;
    company_wallet: CompanyWalletDTO | null;
};
export type CompanyAreaAddressBlockedCourierDTO = {
    id: string;
    company_area_address_id: string;
    courier_id: string;
    company_area_adddress_blocked_courier_reason_id: string;
    created_at: string;
    company_area_adddress_blocked_courier_reason: CompanyAreaAddressBlockedCourierReasonDTO;
    courier: CourierDTO | null;
};
export type CompanyAreaAddressBlockedCourierReasonDTO = {
    id: string;
    name: string;
    description: string;
};
export * from "./requests";
