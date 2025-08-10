import { FileType } from "~/common";
export type CreateCompanyAreaAddressRequestDTO = {
    address: string;
    phone: string;
    latitude: number;
    longitude: number;
    building_name_or_number: string;
    directions: string;
    zip_code: string;
    company_area_id: string;
    address_photos: Array<FileType>;
    address_documents: Array<FileType>;
};
export type UpdateCompanyAreaAddressRequestDTO = {
    company_area_address_id: string;
    building_name_or_number?: string;
    directions?: string;
};
export type CreateCompanyAreaAddressPhotoRequestDTO = {
    photo: FileType;
    company_area_address_id: string;
};
export type DeleteCompanyAreaAddressPhotoRequestDTO = {
    company_area_address_id: string;
    company_area_address_photo_id: string;
};
export type CreateCompanyAreaAddressDocumentRequestDTO = {
    company_area_address_id: string;
    documents: Array<FileType>;
};
export type RefuseCompanyAreaDocumentRequestDTO = {
    company_area_address_document_id: string;
    company_area_address_document_refuse_type_id: string;
};
export type CreateCompanyAreaRequestDTO = {
    company_id: string;
    name: string;
    email: string;
};
export type UpdateCompanyAreaRequestDTO = {
    company_area_id: string;
    name: string;
    phone_number: string;
};
export type CompanyAreaUserAuthenticateRequestDTO = {
    phone_number: string;
};
export type CompanyAreaUserVerifyRequestDTO = {
    phone_number: string;
    code: string;
};
export type UpdateCompanyAreaAddressWalletRequestDTO = {
    company_area_address_wallet_id: string;
    name: string;
};
export type DeleteCompanyAreaWalletRequestDTO = {
    company_area_id: string;
    company_area_wallet_id: string;
};
export type CreateCompanyCategoryRequestDTO = {
    name: string;
    culture: string;
};
export type UpdateCompanyCategoryRequestDTO = {
    company_category_id: string;
    name: string;
    culture: string;
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
    app_fee: number;
};
export type OnboardingCompanyRequestDTO = {
    company: OnboardingCompanyInfoRequestDTO;
    area: OnboardingCompanyAreaRequestDTO;
};
export type OnboardingCompanyInfoRequestDTO = {
    name: string;
    official_name: string;
    company_category_id: string;
};
export type OnboardingCompanyAreaRequestDTO = {
    info: OnboardingCompanyAreaInfoRequestDTO;
    user: OnboardingCompanyAreaUserRequestDTO;
    address: OnboardingCompanyAreaAddressRequestDTO;
};
export type OnboardingCompanyAreaUserRequestDTO = {
    name: string;
    surname: string;
    birthday: string | null;
};
export type OnboardingCompanyAreaInfoRequestDTO = {
    name: string;
    email: string | null;
};
export type OnboardingCompanyAreaAddressRequestDTO = {
    address: string;
    building: string;
    directions: string;
    zip_code: string;
    latitude: number;
    longitude: number;
    documents: Array<FileType>;
};
export type CreateCompanyAreaAddresssUserRequestDTO = {
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    company_area_address_id: string;
    company_area_address_user_role_id: string;
};
