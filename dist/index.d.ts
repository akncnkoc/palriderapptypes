export type SuccessfulResponse = {
    status: number;
    message: string;
    data: unknown;
};
export type SuccessfulResponseT<T> = {
    status: number;
    message: string;
    data: T;
};
export type PaginationDataResultT<T> = {
    status: number;
    message: string;
    page_number: number;
    page_size: number;
    total_records: number;
    total_pages: number;
    data: Array<T>;
};
export * from "src/auth/";
export * from "src/common";
export * from "src/company";
export * from "src/courier";
export * from "src/order";
export * from "src/user";
