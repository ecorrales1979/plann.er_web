import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react';
import { useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { z } from 'zod';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import { Modal } from '../../../components/modal';
import { formatDateAndMonthRange } from '../../../utils/format';
import { destinationAndDateSchema } from '../schemas';

type Props = {
  isGuestListOpen: boolean;
  closeGuestList: () => void;
  openGuestList: () => void;
  destination: string;
  setDestination: (destination: string) => void;
  eventStartAndEndDates?: DateRange;
  setEventStartAndEndDates: (range?: DateRange) => void;
};

export function DestinationAndDateStep({
  closeGuestList,
  destination,
  eventStartAndEndDates,
  isGuestListOpen,
  openGuestList,
  setDestination,
  setEventStartAndEndDates,
}: Props) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleOpenGuestList = () => {
    try {
      destinationAndDateSchema.parse({ destination, eventStartAndEndDates });
      openGuestList();
    } catch (error) {
      if (error instanceof z.ZodError) {
        for (const issue of error.issues) {
          setErrors((prevState) => ({
            ...prevState,
            [issue.path[0] as string]: issue.message,
          }));
        }
      } else {
        console.error('Unexpected error: ', error);
      }
    }
  };

  const openDatePicker = () => {
    if (Object.keys(errors).length > 0) return;
    setIsDatePickerOpen(true);
  };

  const closeDatePicker = () => setIsDatePickerOpen(false);

  const displayedDate = eventStartAndEndDates
    ? formatDateAndMonthRange(eventStartAndEndDates)
    : 'When?';

  return (
    <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center gap-3 shadow-shape">
      <div className="relative flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <Input
          type="text"
          placeholder="Where do you go?"
          value={destination}
          onChange={(ev) => setDestination(ev.target.value)}
          disabled={isGuestListOpen}
        />
        {errors.destination && (
          <div className="absolute -bottom-4 left-7 text-red-700 text-xs">
            {errors.destination}
          </div>
        )}
      </div>

      <button
        onClick={openDatePicker}
        disabled={isGuestListOpen}
        className="relative flex items-center gap-2 w-40"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="bg-transparent text-sm placeholder-zinc-400 outline-none w-full">
          {displayedDate}
        </span>
        {errors.eventStartAndEndDates && (
          <div className="absolute -bottom-4 left-7 text-red-700 text-xs">
            {errors.eventStartAndEndDates}
          </div>
        )}
      </button>

      {isDatePickerOpen && (
        <Modal title="Selecione a data" onClose={closeDatePicker} size="small">
          <DayPicker
            mode="range"
            selected={eventStartAndEndDates}
            onSelect={setEventStartAndEndDates}
          />
        </Modal>
      )}

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestListOpen ? (
        <Button onClick={closeGuestList}>
          Change place/date
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={handleOpenGuestList} color="primary">
          Continue
          <ArrowRight className="size-5 text-lime-950" />
        </Button>
      )}
    </div>
  );
}
