/**
 * @Author: Mojie
 * @Date: 2024-04-11 16:00:55
 */

interface Pagination {
  currentPage: number
  pageSize: number
}

interface Indexable<T = any> {
  [key: string]: T
}

type Nullable<T> = T | null
