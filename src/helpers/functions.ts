import dayjs from "dayjs";

/**
 * Receives date as ex: 2021-07-24T07:36:44.652Z
 * Returns comment date as DD-MM-YYYY.
 *
 * @param {string} x Date
 * @return {string} x Date.
 */
export function commentDateFormat(data: string): string {
  let str: string = data;
  // Remove second part of string ex: T07:36:44.652Z and then split date
  let strArr: string[] = str.slice(0, 10).split("-");
  // Rearrange string date to DD-MM-YYYY
  let date: string = strArr[2] + "-" + strArr[1] + "-" + strArr[0];
  return date;
}

/**
 * Calculates difference between two dates
 * Receives date as ex: 2021-07-24T07:36:44.652Z
 * Returns comment date as
 * "Esta oferta finaliza en X días" if hours is less than 1
 * "Esta oferta finaliza en X días y 1 hora" if hours is equal to 1
 * "Esta oferta finaliza en X días y X horas" if hours is more than 1
 * @param {string} x Date
 * @return {string} x Date.
 */
export function dateDifferenceToStr(date: string): string {
  let offerExpiration = dayjs(date);
  let now = dayjs();
  let dateDifference = offerExpiration.diff(now, "day", true);
  let days = Math.floor(dateDifference);
  let hours = Math.floor((dateDifference - days) * 24);
  let offerStr = `Esta oferta finaliza en ${days.toString()} días ${
    hours > 1
      ? `y ${hours.toString()} horas`
      : hours === 1
      ? `y ${hours.toString()} hora`
      : ""
  } `;
  return offerStr;
}

export function getCurrentPagination<Type>(
  items: Array<Type>,
  currentPage: number,
  perPage: number
): Array<Type> {
  let indexOfLast = currentPage * perPage;
  let indexOfFirst = indexOfLast - perPage;
  let currents: Array<Type> = items.slice(indexOfFirst, indexOfLast);
  return currents;
}
