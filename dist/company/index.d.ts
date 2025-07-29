export type CompanyDTO = {
    id: string;
    name: string | null;
    official_name: string | null;
    company_branches: Array<CompanyBranchDTO>;
    onboarding_state: "initialized" | "info_updated" | "address_updated" | "completed" | "onboarded";
    company_categories: Array<CompanyCategoryDTO>;
    created_at: Date;
    updated_at: Date;
};
export type CompanyBranchDTO = {
    id: string;
    name: string;
    email: string | null;
    status: string;
    company_id: string;
    company_branch_addresses?: Array<CompanyBranchAddressDTO>;
};
export type CompanyBranchAddressDTO = {
    id: string;
    onboarding_state: string;
    address: string;
    directions: string | null;
    longitude: number;
    latitude: number;
    building_name_or_number: string | null;
    zip_code: string;
    company_branch?: CompanyBranchDTO | null;
    company_branch_id: string;
    company_branch_address_users?: Array<CompanyBranchAddressUserDTO>;
    company_branch_address_photos: Array<CompanyBranchAddressPhotoDTO>;
    company_branch_address_documents?: Array<CompanyBranchAddressDocumentDTO>;
    updated_at: string;
};
export type CompanyBranchAddressPhotoDTO = {
    id: string;
    path: string;
    size: string;
};
export type CompanyBranchAddressDocumentTypeDTO = {
    id: string;
    name: string;
    group: string;
    description: string;
};
export type CompanyBranchAddressDocumentTypeTranslationDTO = {
    id: string;
    name: string;
    company_branch_address_document_type_id: string;
    culture: string;
    group: string;
    description: string;
};
export type CompanyBranchAddressDocumentRefuseTypeDTO = {
    id: string;
    name: string;
    group: string;
    description: string;
};
export type CompanyBranchAddressDocumentRefuseTypeTranslationDTO = {
    id: string;
    name: string;
    company_branch_address_document_refuse_type_id: string;
    culture: string;
    group: string;
    description: string;
};
export type CompanyBranchAddressDocumentStatus = "pending" | "approved" | "refused";
export type CompanyBranchAddressDocumentDTO = {
    id: string;
    company_branch_address_document_type: CompanyBranchAddressDocumentTypeDTO;
    status: CompanyBranchAddressDocumentStatus;
    approved_at: string | null;
    refused_at: string | null;
    company_branch_address_document_refuse_type?: CompanyBranchAddressDocumentRefuseTypeDTO | null;
};
export type CompanyBranchAddressUserRoleDTO = {
    id: string;
    name: string;
};
export type CompanyBranchAddressUserDTO = {
    id: string;
    company_id: string | null;
    company_branch_id: string | null;
    company_branch_address_id: string | null;
    company_branch_address_user_role_id: string | null;
    created_at: string | null;
    updated_at: string | null;
    acceptance_waiting_list: Array<string>;
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    is_active: boolean;
    company: CompanyDTO | null;
    company_branch: CompanyBranchDTO | null;
    company_branch_address_user_role: CompanyBranchAddressUserRoleDTO | null;
    company_wallet_id: string | null;
};
export type CompanyPaymentMethodType = {
    id: string;
    title: string;
    card_number: string;
    expiry_date: string;
    cvv: string;
};
export type CompanyBranchAddressWalletDTO = {
    id: string;
    name: string;
    company_branch_id: string;
    balance: number;
    inconsumable_balance: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;
    deleted_at: string | null;
};
export type CompanyBranchAddressWalletTransactionType = "start" | "add" | "subtract";
export type CompanyBranchAddressWalletTransactionDTO = {
    id: string;
    company_branch_address_wallet_id: string;
    order_id: string | null;
    type: CompanyBranchAddressWalletTransactionType;
    company_branch_address_user_id: string;
    amount: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;
    deleted_at: string | null;
    company_branch_address_wallet_transaction_items: Array<CompanyBranchAddressWalletTransactionItemDTO>;
};
export type CompanyBranchAddressWalletTransactionItemType = "order_payment" | "app_using_fee";
export type CompanyBranchAddressWalletTransactionItemDTO = {
    id: string;
    name: string;
    description: string;
    amount: number;
    type: CompanyBranchAddressWalletTransactionItemType;
    company_branch_address_wallet_transaction_id: string;
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
    company_branch_address_user_id: string;
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
