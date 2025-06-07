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
