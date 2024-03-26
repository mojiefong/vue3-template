export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})

  /**
   * 获取用户信息
   */
  async function fetchUserInfo() {
    // const { data } = await getUserInfo()
    // userInfo.value = data
  }

  return {
    userInfo,
    fetchUserInfo,
  }
})
