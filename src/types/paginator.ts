export interface PaginatorProps{
    onNext: () => void;
    onPrevious: () => void;
    next: string | null;
    page: string;
}