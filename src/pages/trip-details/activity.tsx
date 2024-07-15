import { compareAsc, format } from "date-fns";
import { CircleCheck, CircleDashed } from "lucide-react";
import { useCallback } from "react";
import { ActivityDTO } from "../../dtos";

type Props = {
  activity: ActivityDTO;
};

export function Activity({ activity }: Props) {
  const isDatePast = useCallback(() => {
    return compareAsc(new Date(), activity.occurs_at) === -1;
  }, [activity.occurs_at]);

  return (
    <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
      {isDatePast() ? (
        <CircleDashed className="size-5 text-zinc-400 shrink-0" />
      ) : (
        <CircleCheck className="size-5 text-lime-300" />
      )}
      <span className="text-zinc-100">{activity.title}</span>
      <span className="text-zinc-400 text-sm ml-auto">
        {format(activity.occurs_at, "HH:mm'h'")}
      </span>
    </div>
  );
}
