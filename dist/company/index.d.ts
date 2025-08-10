export type CompanyDTO = {
    id: string;
    name: string | null;
    official_name: string | null;
    company_areas: Array<CompanyAreaDTO>;
    app_fee: number;
    onboarding_state: "initialized" | "info_updated" | "address_updated" | "completed" | "onboarded";
    company_categories: Array<CompanyCategoryDTO>;
    created_at: Date;
    updated_at: Date;
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
    onboarding_state: string;
    address: string;
    directions: string | null;
    longitude: number;
    latitude: number;
    building_name_or_number: string | null;
    zip_code: string;
    company_area?: CompanyAreaDTO | null;
    company_area_id: string;
    company_area_address_users?: Array<CompanyAreaAddressUserDTO>;
    company_area_address_photos: Array<CompanyAreaAddressPhotoDTO>;
    company_area_address_documents?: Array<CompanyAreaAddressDocumentDTO>;
    updated_at: string;
};
export type CompanyAreaAddressPhotoDTO = {
    id: string;
    path: string;
    size: string;
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
    group: string;
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
export type CompanyAreaAddressDocumentStatus = "pending" | "approved" | "refused";
export type CompanyAreaAddressDocumentDTO = {
    id: string;
    company_area_address_document_type: CompanyAreaAddressDocumentTypeDTO;
    status: CompanyAreaAddressDocumentStatus;
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
    created_at: string | null;
    updated_at: string | null;
    acceptance_waiting_list: Array<string>;
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    is_active: boolean;
    company: CompanyDTO | null;
    company_area: CompanyAreaDTO | null;
    company_area_address_user_role: CompanyAreaAddressUserRoleDTO | null;
    company_wallet_id: string | null;
    company_app_fee: number;
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
    company_area_id: string;
    balance: number;
    inconsumable_balance: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;
    deleted_at: string | null;
};
export type CompanyAreaAddressWalletTransactionType = "start" | "add" | "subtract";
export type CompanyAreaAddressWalletTransactionDTO = {
    id: string;
    company_area_address_wallet_id: string;
    order_id: string | null;
    type: CompanyAreaAddressWalletTransactionType;
    company_area_address_user_id: string;
    amount: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;
    deleted_at: string | null;
    company_area_address_wallet_transaction_items: Array<CompanyAreaAddressWalletTransactionItemDTO>;
};
export type CompanyAreaAddressWalletTransactionItemType = "order_payment" | "app_using_fee";
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
    updated_at: string;
    is_deleted: boolean;
    deleted_at: string | null;
};
export type CompanyWalletTransactionType = "start" | "add" | "transfer" | "subtract";
export type CompanyWalletTransactionDTO = {
    id: string;
    company_wallet_id: string;
    type: CompanyWalletTransactionType;
    company_area_address_user_id: string;
    amount: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;
    deleted_at: string | null;
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
export * from "./requests";
