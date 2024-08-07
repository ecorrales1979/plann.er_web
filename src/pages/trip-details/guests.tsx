import { CircleCheck, CircleDashed, UserCog } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../../components/button';
import { ParticipantDTO, ParticipantsResponseDTO } from '../../dtos';
import { useToast } from '../../hooks/toast';
import { api } from '../../lib/axios';

type Props = {
  tripId: string;
};

export function Guests({ tripId }: Props) {
  const [participants, setParticipants] = useState<ParticipantDTO[]>([]);
  const { toastError } = useToast();

  useEffect(() => {
    api
      .get<ParticipantsResponseDTO>(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants))
      .catch((error: Error) => {
        toastError(error.message);
      });
  }, [tripId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Guests</h2>
      <div className="space-y-5">
        {participants.map((participant, index) => (
          <div
            key={`participant_${participant.id}`}
            className="flex items-center justify-between gap-4"
          >
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {participant.name || `Guest ${index}`}
              </span>
              <span className="block text-sm text-zinc-400 truncate">
                {participant.email}
              </span>
            </div>
            {participant.is_confirmed ? (
              <CircleCheck className="size-5 text-lime-300" />
            ) : (
              <CircleDashed className="size-5 text-zinc-400 shrink-0" />
            )}
          </div>
        ))}
      </div>
      <Button size="full">
        <UserCog className="size-5" />
        Manage guests
      </Button>
    </div>
  );
}
