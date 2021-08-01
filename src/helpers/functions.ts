export function commentToDate(data: string): string {
  let str: string = data;
  let strArr: string[] = str.slice(0, 10).split("-");
  let date: string = strArr[2] + "-" + strArr[1] + "-" + strArr[0];
  return date;
}
