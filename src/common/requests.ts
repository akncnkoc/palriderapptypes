import { BaseUserAppState } from ".";

export type PaginationRequestDTO = {
  page: number;
  size: number;
};

export type SearchAndSortRequestDTO = {
  sorting_column: string;
  sorting: string;
  search: string | null;
};

export type UpdateNotificationInfoRequestDTO = {
  one_signal_app_player_id: string;
};

export type UpdateUserAppInformationRequestDTO = {
  app_version_id: string;
  app_state: BaseUserAppState;
  platform: string;
  device_model: string;
  os_version: string;
  device_info_json: string;
  last_seen_at: string;
  app_opened_at: string;
  app_closed_at: string;
  network_type: string;
  carrier: string;
  language: string;
  timezone: string;
};
