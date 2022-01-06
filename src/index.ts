export type DateArray = [year: number, month: number, day: number]
export type TimeArray = [hour: number, minute: number, second: number]
export type DateTimeArray = [DateArray, TimeArray]

export const msToS = (ms: number) =>
  ms / 1000

export const sToMs = (s: number) =>
  s * 1000

export const mToS = (m: number) =>
  m * 60

export const sToM = (s: number) =>
  s / 60

export const mToMs = (m: number) =>
  sToMs(mToS(m))

export const msToM = (ms: number) =>
  sToM(msToS(ms))

export const padN = (n: number | string, count = 2) => (n + "").padStart(count, "0")

export const getDateArr = (d = new Date()) =>
  [
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate(),
  ] as DateArray

export const getTimeArr = (d = new Date()) =>
  [
    d.getHours(),
    d.getMinutes(),
    d.getSeconds(),
  ] as TimeArray

export const getDateTimeArr = (d = new Date()) =>
  [
    getDateArr(d),
    getTimeArr(d),
  ] as DateTimeArray

export const getDateStr = (d: DateArray | Date = new Date()): string =>
  d instanceof Date
    ? getDateStr(getDateArr(d))
    : d.map(x => padN(x)).join("-")

export const getTimeStr = (d: TimeArray | Date = new Date()): string =>
  d instanceof Date
    ? getTimeStr(getTimeArr(d))
    : d.map(x => padN(x)).join("-")

export const getDateTimeStr = (d: DateTimeArray | Date = new Date()): string =>
  d instanceof Date
    ? getDateTimeStr([getDateArr(d), getTimeArr(d)])
    : `${getDateStr(d[0])}-${getTimeStr(d[1])}`

export const setDate = (date: Date, [y, m, d]: DateArray) => {
  date.setFullYear(y)
  date.setMonth(m - 1)
  date.setDate(d)
  return date
}

export const setTime = (date: Date, [h, m, s]: TimeArray) => {
  date.setHours(h || 0)
  date.setMinutes(m || 0)
  date.setSeconds(s || 0)
  return date
}

export const setDateTime = (date: Date, [d, t]: DateTimeArray) => {
  setDate(date, d)
  setTime(date, t)
  return date
}

export const modifyDate = (date: Date, fn: (d: Date) => void | Date) =>
  fn(date) || date

export const betweenTime = (start: Date, end: Date, current: Date) => {
  const s = +start
  const e = +end
  const c = +current

  return c >= s && c <= e
}

export const ymdh = (date?: Date) =>
  getDateTimeStr(date).split("-").slice(0, 4)