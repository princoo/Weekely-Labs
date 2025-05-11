export interface Response <T> {
    page: string;
    results: T;
    next: string | null;
    entries: number;
}