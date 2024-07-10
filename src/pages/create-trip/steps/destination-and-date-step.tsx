import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

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
        <button
          onClick={closeGuestList}
          className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
        >
          Change place/date
          <Settings2 className="size-5" />
        </button>
      ) : (
        <button
          onClick={openGuestList}
          className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
        >
          Continue
          <ArrowRight className="size-5 text-lime-950" />
        </button>
      )}
    </div>
  );
}
