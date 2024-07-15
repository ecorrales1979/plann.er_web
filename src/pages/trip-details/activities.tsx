import { format } from "date-fns";
import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActivitiesPerDate, ActivitiesResponseDTO } from "../../dtos";
import { api } from "../../lib/axios";

export function Activities() {
  const { tripId } = useParams();
  const [activities, setActivities] = useState<ActivitiesPerDate[]>([]);

  useEffect(() => {
    api
      .get<ActivitiesResponseDTO>(`/trips/${tripId}/activities`)
      .then((response) => setActivities(response.data.activities));
  }, [tripId]);

  return (
    <div className="space-y-8">
      {activities.map((activitiesPerDate) => (
        <div
          key={`activities_on_date_${activitiesPerDate.date}`}
          className="space-y-2.5"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-xl text-zinc-300 font-semibold">
              {format(activitiesPerDate.date, "do")}
            </span>
            <span className="text-xs text-zinc-500">
              {format(activitiesPerDate.date, "EEEE")}
            </span>
          </div>
          {activitiesPerDate.activities.length === 0 ? (
            <p className="text-zinc-500 text-sm">
              No activities registered on this date
            </p>
          ) : (
            <div className="space-y-2.5">
              {activitiesPerDate.activities.map((activity) => (
                <div
                  key={`activity_${activity.id}`}
                  className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3"
                >
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">{activity.title}</span>
                  <span className="text-zinc-400 text-sm ml-auto">
                    {format(activity.occurs_at, "HH:mm'h'")}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
