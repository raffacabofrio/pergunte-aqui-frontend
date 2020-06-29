import Vue from 'vue'

const dateFilter = (value) => {
  return formatDate(value)
}

function formatDate(inputDate) {
  const date = new Date(inputDate)
  const year = date.getFullYear()
  const month = appendLeadingZeroes(date.getMonth() + 1)
  const day = appendLeadingZeroes(date.getDate())
  const hour = appendLeadingZeroes(date.getHours())
  const minute = appendLeadingZeroes(date.getMinutes())
  const formattedDate = day + '/' + month + '/' + year + ' ' + hour + ':' + minute
  return formattedDate
}

function appendLeadingZeroes(n) {
  if (n <= 9) {
    return '0' + n
  }
  return n
}

Vue.filter('date', dateFilter)
