export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export const createCalendar = ({ month }) => {
  const dates = Array(MONTH_DAYS[month]).fill().map((_, i) => ({ is: true, date: new Date(2024, month, i + 1) }))
  const retDates = [...dates]

  for (let i = 0; i < dates[0].date.getDay() - 1; i++) {
    retDates.unshift({ is: false, date: new Date(2024, month - 1, MONTH_DAYS[month - 1] - i) })
  }
  let i = 0
  while (retDates.length < 35) {
    retDates.push({ is: false, date: new Date(2024, month + 1, i + 1) })
    i++
  }

  return retDates
}
