import dayjs from "dayjs";

export function commentToDate(data: string): string {
  let str: string = data;
  let strArr: string[] = str.slice(0, 10).split("-");
  let date: string = strArr[2] + "-" + strArr[1] + "-" + strArr[0];
  return date;
}

export function dateDifference(date: string): { days: number; hours: number } {
  let offerExpiration = dayjs(date);
  let now = dayjs();
  let dateDifference = offerExpiration.diff(now, "day", true);
  let days = Math.floor(dateDifference);
  let hours = Math.floor((dateDifference - days) * 24);
  return { days, hours };
}
