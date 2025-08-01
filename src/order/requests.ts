import { FileType } from "~/common";
import { CourierVehicleType } from "~/courier";

export type OrderAcceptAttendeesRequestDTO = {
  order_id: string;
  courier_ids: Array<string>;
};

export type OrderAcceptAttendeeRequestDTO = {
  order_id: string;
  courier_id: string;
};
export type OrderRejectAttendeesRequestDTO = {
  order_id: string;
  courier_ids: Array<string>;
};

export type OrderCourierAttendeRequestDTO = {
  courier_id: string;
  latitude: number;
  longitude: number;
};

export type CreateOrderBonusRequestDTO = {
  min: number;
  max: number;
  sort: number;
  price: number;
};
export type CreateOrderRequestDTO = {
  company_branch_id: string;
  company_branch_address_id: string;
  company_branch_wallet_id: string;
  start_time: number;
  work_hour: number;
  hourly_rate: number;
  courier_count: number;
  vehicle_types: Array<CourierVehicleType>;
  order_bonus_by_distance: Array<CreateOrderRequestDTO>;
  order_bonus_per_shipment: Array<CreateOrderRequestDTO>;
};

export type CreateOrderShipmentDestinationRequestDTO = {
  sort: number;
  address: string;
  latitude: number;
  longitude: number;
  zip_code: string;
  notes: string | null;
  payment_at_the_door: boolean;
  receive_fee: number;
  contains_adult_content: boolean;
};
export type CreateOrderShipmentRequestDTO = {
  destinations: Array<CreateOrderShipmentDestinationRequestDTO>;
};

export type DeliverOrderShipmentDestinationRequestDTO = {
  notes: string;
  order_shipment_destination_delivery_pictures: Array<FileType>;
};
export type CancelOrderShipmentDestinationRequestDTO = {
  order_shipment_destination_cancellation_reason_id: string;
  order_shipment_destination_cancellation_photos: Array<FileType>;
};
