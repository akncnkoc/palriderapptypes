export type PaginationRequestDTO = {
    page: number;
    size: number;
};
export type SearchAndSortRequestDTO = {
    sorting_column: string;
    sorting: string;
    search: string | null;
};
