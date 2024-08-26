export type ID = undefined | null | number

export type PaginationState = {
    page: number
    items_per_page: 10 | 30 | 50 | 100
    links?: Array<{ label: string; active: boolean; url: string | null; page: number | null }>
}

export type SortState = {
    sort?: string
    order?: 'asc' | 'desc'
}

export type FilterState = {
    filter?: unknown
}

export type SearchState = {
    search?: string
}

export type Response<T> = {
    data?: T
    payload?: {
        message?: string
        errors?: {
            [key: string]: Array<string>
        }
        pagination?: PaginationState
    }
}

export type QueryState = PaginationState & SortState & FilterState & SearchState
export type QueryResponseContextProps<T> = {
    response?: Response<Array<T>> | undefined
    refetch: () => void
    isLoading: boolean
    query: string
}
