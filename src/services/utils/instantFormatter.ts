import { format } from "date-fns";

export function humanInstant(instant: string | number) {
  const date = new Date(Number(instant) * 1000);
  return format(date, "dd/MM/yyyy hh:mm:ss");
}
