import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

type Props = {
  isGuestListOpen: boolean;
  closeGuestList: () => void;
  openGuestList: () => void;
};

export function DestinationAndDateStep({
  closeGuestList,
  isGuestListOpen,
  openGuestList,
}: Props) {
  return (
    <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center gap-3 shadow-shape">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Where do you go?"
          disabled={isGuestListOpen}
          className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
        />
      </div>

      <div className="flex items-center gap-2 w-40">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="When?"
          disabled={isGuestListOpen}
          className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
        />
      </div>

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
