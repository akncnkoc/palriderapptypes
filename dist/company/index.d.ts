import { BaseUserDTO } from "~/common";
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
    company_branch_users?: Array<CompanyBranchUserDTO>;
    company_branch_documents?: Array<CompanyBranchDocumentDTO>;
    company_branch_addresses?: Array<CompanyBranchAddressDTO>;
};
export type CompanyBranchAddressDTO = {
    id: string;
    address: string;
    directions: string | null;
    longitude: number;
    latitude: number;
    building_name_or_number: string | null;
    zip_code: string;
    company_branch?: CompanyBranchDTO | null;
    updated_at: string;
};
export type CompanyBranchDocumentTypeDTO = {
    id: string;
    name: string;
};
export type CompanyBranchDocumentRefuseTypeDTO = {
    id: string;
    name: string;
};
export type CompanyBranchDocumentStatus = "pending" | "approved" | "refused";
export type CompanyBranchDocumentDTO = {
    id: string;
    company_branch_document_type: CompanyBranchDocumentTypeDTO;
    status: CompanyBranchDocumentStatus;
    approved_at: string | null;
    refused_at: string | null;
    company_branch_document_refuse_type?: CompanyBranchDocumentRefuseTypeDTO | null;
};
export type CompanyBranchUserRoleDTO = {
    id: string;
    name: string;
};
export type CompanyBranchUserDTO = {
    id: string;
    company_id: string | null;
    company_branch_id: string | null;
    company_branch_address_id: string | null;
    company_branch_user_role_id: string | null;
    created_at: string | null;
    updated_at: string | null;
    acceptance_waiting_list: Array<string>;
    user: BaseUserDTO | null;
    company: CompanyDTO | null;
    company_branch: CompanyBranchDTO | null;
    company_branch_user_role: CompanyBranchUserRoleDTO | null;
};
export type CompanyPaymentMethodType = {
    id: string;
    title: string;
    card_number: string;
    expiry_date: string;
    cvv: string;
};
export type CompanyBranchWalletDTO = {
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
export type CompanyBranchWalletTransactionType = "start" | "add" | "subtract";
export type CompanyBranchWalletTransactionDTO = {
    id: string;
    company_branch_wallet_id: string;
    order_id: string | null;
    type: CompanyBranchWalletTransactionType;
    company_branch_user_id: string;
    amount: number;
    created_at: string;
    updated_at: string;
    is_deleted: boolean;
    deleted_at: string | null;
    company_branch_wallet_transaction_items: Array<CompanyBranchWalletTransactionItemDTO>;
};
export type CompanyBranchWalletTransactionItemType = "order_payment" | "app_using_fee";
export type CompanyBranchWalletTransactionItemDTO = {
    id: string;
    name: string;
    description: string;
    amount: number;
    type: CompanyBranchWalletTransactionItemType;
    company_branch_wallet_transaction_id: string;
};
export type CompanyCategoryDTO = {
    id: string;
    name: string;
};
export * from "./requests";
