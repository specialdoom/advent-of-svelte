import dayjsmodule from "dayjs";
import durationPlugin from "dayjs/plugin/duration";
import relativeTimePlugin from "dayjs/plugin/relativeTime";

export default function getDayJs() {
  return createDayJs();
}

function createDayJs() {
  dayjsmodule.extend(durationPlugin)
  dayjsmodule.extend(relativeTimePlugin);

  return dayjsmodule();
}