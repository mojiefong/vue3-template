export function useCountdown(text = '重新发送', countdown = 60) {
  const countingDown = ref(false)
  const countdownText = ref('')
  let timer: NodeJS.Timeout

  function startCountdown() {
    let count = countdown
    countingDown.value = true
    countdownText.value = `${count}s`
    clearInterval(timer)
    timer = setInterval(() => {
      count--
      countdownText.value = `${count}s`
      if (count === 0) {
        clearInterval(timer)
        countingDown.value = false
        countdownText.value = text
      }
    }, 1000)
  }

  return {
    countingDown,
    countdownText,
    startCountdown,
  }
}
