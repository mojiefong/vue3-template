interface Pagination {
  currentPage: number
  pageSize: number
}

interface Indexable<T = any> {
  [key: string]: T
}

type Nullable<T> = T | null
