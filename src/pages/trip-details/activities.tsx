import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActivitiesPerDate, ActivitiesResponseDTO } from '../../dtos';
import { useToast } from '../../hooks/toast';
import { api } from '../../lib/axios';
import { Activity } from './activity';

export function Activities() {
  const { tripId } = useParams();
  const [activities, setActivities] = useState<ActivitiesPerDate[]>([]);
  const { toastError } = useToast();

  useEffect(() => {
    api
      .get<ActivitiesResponseDTO>(`/trips/${tripId}/activities`)
      .then((response) => setActivities(response.data.activities))
      .catch((error: Error) => {
        toastError(error.message);
      });
  }, [tripId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-8">
      {activities.map((activitiesPerDate) => (
        <div
          key={`activities_on_date_${activitiesPerDate.date}`}
          className="space-y-2.5"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-xl text-zinc-300 font-semibold">
              {format(activitiesPerDate.date, 'do')}
            </span>
            <span className="text-xs text-zinc-500">
              {format(activitiesPerDate.date, 'EEEE')}
            </span>
          </div>
          {activitiesPerDate.activities.length === 0 ? (
            <p className="text-zinc-500 text-sm">
              No activities registered on this date
            </p>
          ) : (
            <div className="space-y-2.5">
              {activitiesPerDate.activities.map((activity) => (
                <Activity key={`activity_${activity.id}`} activity={activity} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
