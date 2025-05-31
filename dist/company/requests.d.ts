import { FileType } from "~/common";
export type CreateCompanyBranchAddressRequestDTO = {
    address: string;
    phone: string;
    latitude: number;
    longitude: number;
    building_name_or_number: string;
    directions: string;
    zip_code: string;
    company_branch_id: string;
};
export type UpdateCompanyBranchAddressRequestDTO = {
    company_branch_address_id: string;
    building_name_or_number?: string;
    directions?: string;
};
export type CreateCompanyBranchAddressPhotoRequestDTO = {
    photo: FileType;
    company_branch_address_id: string;
};
export type DeleteCompanyBranchAddressPhotoRequestDTO = {
    company_branch_address_id: string;
    company_branch_address_photo_id: string;
};
export type CreateCompanyBranchDocumentRequestDTO = {
    company_branch_id: string;
    documents: Array<FileType>;
};
export type RefuseCompanyBranchDocumentRequestDTO = {
    company_branch_document_id: string;
    company_branch_document_refuse_type_id: string;
};
export type CreateCompanyBranchRequestDTO = {
    company_id: string;
    name: string;
    email: string;
};
export type UpdateCompanyBranchRequestDTO = {
    company_branch_id: string;
    name: string;
    phone_number: string;
};
export type CompanyBranchUserAuthenticateRequestDTO = {
    phone_number: string;
};
export type CompanyBranchUserVerifyRequestDTO = {
    phone_number: string;
    code: string;
};
export type UpdateCompanyBranchWalletRequestDTO = {
    company_branch_wallet_id: string;
    name: string;
};
export type DeleteCompanyBranchWalletRequestDTO = {
    company_branch_id: string;
    company_branch_wallet_id: string;
};
export type CreateCompanyCategoryRequestDTO = {
    name: string;
};
export type UpdateCompanyCategoryRequestDTO = {
    company_category_id: string;
    name: string;
};
export type CreateCompanyRequestDTO = {
    name: string;
    official_name: string;
    tax_number: string;
    tax_administration: string;
    phone: string;
    website: string;
};
export type UpdateCompanyRequestDTO = {
    name: string;
    official_name: string;
    tax_number: string;
    tax_administration: string;
    phone: string;
    website: string;
};
export type OnboardingCompanyRequestDTO = {
    company: OnboardingCompanyInfoRequestDTO;
    branch: OnboardingCompanyBranchRequestDTO;
};
export type OnboardingCompanyInfoRequestDTO = {
    name: string;
    official_name: string;
    company_category_id: string;
};
export type OnboardingCompanyBranchRequestDTO = {
    info: OnboardingCompanyBranchInfoRequestDTO;
    documents: Array<FileType>;
    user: OnboardingCompanyBranchUserRequestDTO;
    address: OnboardingCompanyBranchAddressRequestDTO;
};
export type OnboardingCompanyBranchUserRequestDTO = {
    name: string;
    surname: string;
    birthday: string | null;
};
export type OnboardingCompanyBranchInfoRequestDTO = {
    name: string;
    email: string | null;
};
export type OnboardingCompanyBranchAddressRequestDTO = {
    address: string;
    building: string;
    directions: string;
    zip_code: string;
    latitude: number;
    longitude: number;
};
export type CreateCompanyBranchUserRequestDTO = {
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    company_id: string;
    company_branch_id: string;
    company_branch_address_id: string;
    company_branch_user_role_id: string;
};
