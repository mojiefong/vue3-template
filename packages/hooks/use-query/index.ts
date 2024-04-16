/**
 * @Author: Mojie
 * @Date: 2024-03-28 09:53:31
 */

export const pagination: Pagination = {
  currentPage: 1,
  pageSize: 15,
}

export function useQuery<T = any>(queryData?: T) {
  const queryForm = reactive({
    ...queryData,
    ...pagination,
  })
  const totalCount = ref(0)

  return {
    queryForm: queryForm as T & Pagination,
    totalCount,
  }
}
