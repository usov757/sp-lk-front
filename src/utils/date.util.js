Date.formatDateTime = (date, options) =>
  new Date(date).toLocaleString(
    'ru-ru',
    Object.assign({ dateStyle: 'medium', timeStyle: 'medium' }, options),
  )

Date.formatDateTimeZone = (date, options) => {
  date = new Date(date)
  Date.applyOffset(date)
  return date.toLocaleString(
    'ru-RU',
    Object.assign({ dateStyle: 'medium', timeStyle: 'medium' }, options),
  )
}

// dd-mm-yyyy
Date.formatDate = (date, options) =>
  new Date(date).toLocaleDateString('ru-ru', Object.assign({ dateStyle: 'short' }, options))

// dd-mm-yyyy
Date.formatDateNoYear = (date, options) =>
  new Date(date).toLocaleDateString('ru-RU', {
    month: '2-digit',
    day: '2-digit',
    ...options,
  })

// yyyy-mm-dd
Date.formatDateYearFirst = (date, options) =>
  new Date(date).toLocaleDateString('sv-SE', Object.assign({ dateStyle: 'short' }, options))

Date.formatTime = (date, options) =>
  new Date(date).toLocaleTimeString('ru-ru', Object.assign({ timeStyle: 'medium' }, options))

Date.applyOffset = (date) => {
  const offset = date.getTimezoneOffset() * 60 * 1000
  date.setTime(date.getTime() - offset)
}

Date.formatDateIso = (date, keepOffset = true) => {
  date = new Date(date)

  if (keepOffset) {
    Date.applyOffset(date)
  }

  return date.toISOString().substring(0, 10)
}

Date.formatHour = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new Error('Hour must be between 0 and 23.')
  }
  const startHour = hour.toString().padStart(2, '0')
  const endHour = (hour + 1).toString().padStart(2, '0')

  const date = `${startHour}-${endHour}`

  return date
}

Date.formatTimeIso = (date, keepOffset = true) => {
  date = new Date(date)

  if (keepOffset) {
    Date.applyOffset(date)
  }

  return date.toISOString().substring(11, 16)
}

Date.formatDateBrowser = (date) => {
  return date.toLocaleString('ru-RU', { dateStyle: 'short' })
}

Date.formatTimeBrowser = (date) => {
  return date.toLocaleString('ru-RU', { timeStyle: 'medium' })
}

Date.formatDuration = (ms, verbosityLevel = 2) => {
  ms = Math.abs(ms)

  const duration = {
    'дн.': Math.floor(ms / 86400000),
    'ч.': Math.floor(ms / 3600000) % 24,
    'мин.': Math.floor(ms / 60000) % 60,
    'сек.': Math.floor(ms / 1000) % 60,
    'мс.': Math.floor(ms) % 1000,
  }

  return Object.entries(duration)
    .filter(([, v]) => v !== 0)
    .slice(0, verbosityLevel)
    .map(([k, v]) => `${v} ${k}`)
    .join(', ')
}

Date.formatDurationHourLimit = (ms, verbosityLevel = 2) => {
  ms = Math.abs(ms)

  const duration = {
    'ч.': Math.floor(ms / 3600000),
    'мин.': Math.floor(ms / 60000) % 60,
    'сек.': Math.floor(ms / 1000) % 60,
    'мс.': Math.floor(ms) % 1000,
  }

  return Object.entries(duration)
    .filter(([, v]) => v !== 0)
    .slice(0, verbosityLevel)
    .map(([k, v]) => `${v} ${k}`)
    .join(', ')
}

Date.today = () => {
  return Date.formatDateIso(new Date())
}

Date.startOfWeek = () => {
  const now = new Date()
  const dayOfWeek = now.getDay()
  const mondayOffset = (dayOfWeek + 6) % 7
  const mondayDate = new Date(now.setDate(now.getDate() - mondayOffset))
  return Date.formatDateIso(mondayDate)
}

Date.endOfWeek = () => {
  const now = new Date()
  const dayOfWeek = now.getDay()
  const sundayOffset = 6 - dayOfWeek
  const sundayDate = new Date(now.setDate(now.getDate() + sundayOffset))
  return Date.formatDateIso(sundayDate)
}

Date.currentTime = () => {
  return Date.formatTimeIso(new Date())
}

Date.startOfMonth = (date = new Date()) => {
  date = new Date(date)
  const y = date.getFullYear()
  const m = date.getMonth()
  return Date.formatDateIso(new Date(y, m, 1))
}

Date.endOfMonth = (date = new Date()) => {
  date = new Date(date)
  const y = date.getFullYear()
  const m = date.getMonth()
  return Date.formatDateIso(new Date(y, m + 1, 0))
}

Date.shift = (date, days = 0, months = 0, years = 0) => {
  date = new Date(date)
  date.setDate(date.getDate() + days)
  date.setMonth(date.getMonth() + months)
  date.setFullYear(date.getFullYear() + years)
  return Date.formatDateIso(date)
}

Date.compareDates = (a, b) => {
  const y = a.getFullYear() === b.getFullYear()
  const m = a.getMonth() === b.getMonth()
  const d = a.getDate() === b.getDate()

  return y && m && d
}

Date.compareDates = (a, b) => {
  const y = a.getFullYear() === b.getFullYear()
  const m = a.getMonth() === b.getMonth()
  const d = a.getDate() === b.getDate()

  return y && m && d
}
