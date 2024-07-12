import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Button } from "../../../components/button";
import { Modal } from "../../../components/modal";
import { formatDateAndMonthRange } from "../../../utils/format";

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

  const openDatePicker = () => setIsDatePickerOpen(true);

  const closeDatePicker = () => setIsDatePickerOpen(false);

  const displayedDate = eventStartAndEndDates
    ? formatDateAndMonthRange(eventStartAndEndDates)
    : "When?";

  return (
    <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center gap-3 shadow-shape">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Where do you go?"
          value={destination}
          onChange={(ev) => setDestination(ev.target.value)}
          disabled={isGuestListOpen}
          className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
        />
      </div>

      <button
        onClick={openDatePicker}
        disabled={isGuestListOpen}
        className="flex items-center gap-2 w-40"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="bg-transparent text-sm placeholder-zinc-400 outline-none w-full">
          {displayedDate}
        </span>
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
        <Button onClick={openGuestList} color="primary">
          Continue
          <ArrowRight className="size-5 text-lime-950" />
        </Button>
      )}
    </div>
  );
}
