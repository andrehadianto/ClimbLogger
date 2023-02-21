import { DateTime } from "luxon";

export const MsToDate = (timestampMs: number) =>
  DateTime.fromMillis(timestampMs).toFormat("dd LLL yyyy").toString();
