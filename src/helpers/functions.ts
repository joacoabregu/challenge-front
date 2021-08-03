import dayjs from "dayjs";

export function commentToDate(data: string): string {
  let str: string = data;
  let strArr: string[] = str.slice(0, 10).split("-");
  let date: string = strArr[2] + "-" + strArr[1] + "-" + strArr[0];
  return date;
}

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
