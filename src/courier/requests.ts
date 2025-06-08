import { FileType } from "~/common";
import { CourierDocumentType, CourierVehicleType } from ".";

export type AuthenticateCourierRequestDTO = { phone_number: string };
export type VerifyCourierRequestDTO = { phone_number: string; code: string };

export type CreateCourierBankAccountRequestDTO = {
  title: string;
  sort_code: string;
  account_holder_name: string;
  account_number: string;
};

export type UpdateCourierBankAccountRequestDTO = {
  courier_bank_account_id: string;
  title: string;
  sort_code: string;
  account_number: string;
};

export type CreateCourierDocumentRequestDTO = {
  courier_id: string;
  document: FileType;
  type: CourierDocumentType | null;
};

export type OnboardCourierRequestDTO = {
  user: OnboardingCourierUserRequestDTO;
  vehicles: Array<OnboardingCourierVehicleInfoRequestDTO>;
  documents: OnboardingCourierDocumentInfoRequestDTO;
};

export type OnboardingCourierUserRequestDTO = {
  name: string;
  surname: string;
  birthday: string;
};

export type OnboardingCourierVehicleInfoRequestDTO = {
  type: CourierVehicleType;
  plate_number: string;
  photos: Array<FileType>;
};

export type OnboardingCourierDocumentInfoRequestDTO = {
  profile_photo: FileType;
  identity_card_front: FileType;
  identity_card_back: FileType;
  driver_licence_front: FileType;
  driver_licence_back: FileType;
};

export type CreateCourierLocationRequestDTO = {
  latitude: number;
  longitude: number;
};

export type CreateCourierVehicleRequestDTO = {
  type: CourierVehicleType;
  plate_number: string;
  photos: Array<FileType>;
};

export type UpdateCourierVehicleRequestDTO = {
  courier_vehicle_id: string;
  name: string;
  is_active: boolean;
};
export type RefuseCourierVehicleRequestDTO = {
  courier_vehicle_id: string;
  courier_vehicle_refuse_type_id: string;
};

export type RefuseCourierDocumentRequestDTO = {
  courier_document_id: string;
  courier_document_refuse_type_id: string;
};
