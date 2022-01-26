/** 
 * Google Book API
 */

export interface Result {
    items: BookItem[];
    kind: string;
    totalItems: number;
}

/**
 * Books Detail
 */

export interface BookItem {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        publishedDate?: string;
        description?: string;
        publisher?: string;
        imageLinks?: {
            smallThumbnail: string;
            thumbnail: string;
        };
        pageCount: number;
        previewLink?: string;
    };
    saleInfo?: {
        listPrice: {
            amount: number;
        };
    };
}

/**
 * query params
 */

export interface Params {
    q: string;
    startIndex?: number;
}

export interface BookRepositoryInterface {
    get(params: Params): Promise<Result>;
    find(id: string): Promise<BookItem>;
}