import {
  CompanyBranchAddressDTO,
  CompanyBranchDTO,
  CompanyBranchAddressUserDTO,
  CompanyDTO,
} from "~/company";
import { CourierDTO } from "~/courier";

export type OrderVehicleType = "bike" | "motorcycle" | "car";
export type OrderChannel = "mobile" | "web" | "integration";
export type OrderStatus =
  | "pending"
  | "on_going"
  | "in_review"
  | "cancelled"
  | "completed";
export type OrderDTO = {
  id: string;
  start_duration: string;
  end_duration: string;
  duration: string;
  hourly_rate: number;
  order_no: string;
  company: CompanyDTO | null;
  company_branch: CompanyBranchDTO | null;
  company_branch_address_user: CompanyBranchAddressUserDTO | null;
  company_branch_address: CompanyBranchAddressDTO | null;
  vehicle_types: Array<OrderVehicleType>;
  amount_to_paid: number;
  current_mile: number;
  current_hour: number;
  total_amount: number;
  discount: number;
  total_price: number;
  max_tota_price: number;
  channel: OrderChannel;
  status: OrderStatus;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  order_courier_attendee_count: number;
  order_bonuses: Array<OrderBonusDTO>;
  order_shipments: Array<OrderShipmentDTO>;
  order_courier_attendees: Array<OrderCourierAttendeeDTO>;
  driven_km: number;
  location_visited: number;
  current_working_hours: number;
  total_earning: number;
  courier_proximity: number;
};

export type CourierActiveOrderDTO = {
  id: string;
  start_duration: string;
  end_duration: string;
  order_no: string;
  company_branch_address: CompanyBranchAddressDTO;
  order_shipments: Array<OrderShipmentDTO>;
  driven_km: number;
  location_visited: number;
  vehicle_types: Array<OrderVehicleType>;
  current_working_hours: string;
  could_work: boolean;
  total_earning: number;
};

export type OrderShipmentStatus =
  | "waiting_delivery"
  | "on_delivery"
  | "completed"
  | "cancelled";
export type OrderShipmentCancellationReasonDTO = {
  id: string;
  name: string;
  description: string;
};
export type CourierActiveOrderShipmentDTO = {
  id: string;
  order_id: string;
  sort: number;
  notes: string;
  distance: number;
  duration: number;
  order_shipment_no: string;
  expected_delivery_time: string;
  completed_at: string | null;
  cancelled_at: string | null;
  current_order_shipment_destination_id: string | null;
  current_order_shipment_destination: OrderShipmentDestinationDTO | null;
  overview_polyline: string;
  status: OrderShipmentStatus;
  courier: CourierDTO | null;
  order_shipment_departure: OrderShipmentDepartureDTO;
  order_shipment_destinations: Array<OrderShipmentDestinationDTO>;
  order_shipment_cancellation_reason_id: string | null;
  order_shipment_cancellation_reason: OrderShipmentCancellationReasonDTO;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

export type OrderBonusDTO = {
  id: string;
  min_value: number;
  max_value: number;
  price: number;
  sort: number;
};

export type OrderCourierAttendeeStatus =
  | "accepted"
  | "arriving"
  | "waiting_for_company_approval"
  | "working"
  | "completed"
  | "abondoned"
  | "rejected";
export type OrderCourierAttendeeDTO = {
  id: string;
  order_id: string;
  courier_id: string;
  status: OrderCourierAttendeeStatus;
  latitude: number;
  longitude: number;
  distance: number;
  created_at: string;
  name: string;
  surname: string;
};
export type OrderCourierDTO = {
  id: string;
  courier_id: string;
  order_id: string;

  courier: CourierDTO | null;
};

export type OrderShipmentDepartureDTO = {
  id: string;
  company_branch_address: CompanyBranchAddressDTO;
};

export type OrderShipmentDestinationStatus =
  | "waiting_delivery"
  | "on_the_way"
  | "delivered"
  | "cancelled";
export type OrderShipmentDestinationCancellationReasonDTO = {
  id: string;
  name: string;
  description: string;
  group: string;
};
export type OrderShipmentDestinationDTO = {
  id: string;
  order_shipment_id: string;
  order_shipment_destination_no: string;
  address: string;
  sort: number;
  notes: string | null;
  overview_polyline: string;
  duration: number;
  distance: number;
  pay_at_the_door: boolean;
  received_fee: number;
  contains_adult_content: boolean;
  status: OrderShipmentDestinationStatus;
  order_shipment_destination_delivery_photos: Array<OrderShipmentDestinationDeliveryPhotoDTO>;
  order_shipment_destination_cancellation_reason_id: string | null;
  order_shipment_destination_cancellation_reason: OrderShipmentDestinationCancellationReasonDTO | null;
  expected_delivery_time: string;
  start_at: string | null;
  delivered_at: string | null;
  cancelled_at: string | null;
  latitude: number;
  longitude: number;
};
export type OrderShipmentDestinationDeliveryPhotoDTO = {
  id: string;
  order_shipment_destination_id: string;
};

export type OrderShipmentDestinationPackageItemDTO = {
  id: string;
  filename: string;
};

export type OrderShipmentCancellationDTO = {
  id: string;
  name: string;
  description: string;
};
export type OrderShipmentDTO = {
  id: string;
  order_id: string;
  sort: number;
  notes: string;
  distance: number;
  duration: number;
  order_shipment_no: string;
  expected_delivery_time: string;
  completed_at: string | null;
  cancelled_at: string | null;
  courier: CourierDTO | null;

  current_order_shipment_destination_id: string | null;
  current_order_shipment_destination: OrderShipmentDestinationDTO | null;
  overview_polyline: string;
  status: OrderShipmentStatus;
  order_shipment_departure: OrderShipmentDepartureDTO;
  order_shipment_destinations: Array<OrderShipmentDestinationDTO>;
  order_shipment_cancellation_reason_id: string | null;
  order_shipment_cancellation_reason: OrderShipmentCancellationDTO | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

export * from "./requests";
