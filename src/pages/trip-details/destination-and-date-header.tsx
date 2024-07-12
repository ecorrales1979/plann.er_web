import { Calendar, MapPin, Settings2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { TripDTO, TripResponseDTO } from "../../dtos";
import { api } from "../../lib/axios";
import { formatDateAndMonthRange } from "../../utils/format";

type Props = {
  tripId: string;
};

export function DestinationAndDateHeader({ tripId }: Props) {
  const [trip, setTrip] = useState<TripDTO | undefined>();

  useEffect(() => {
    api
      .get<TripResponseDTO>(`/trips/${tripId}`)
      .then((response) => setTrip(response.data.trip));
  }, [tripId]);

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">
            {!!trip &&
              formatDateAndMonthRange({
                from: trip.starts_at,
                to: trip.ends_at,
              })}
          </span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <Button>
          Change place/date
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
