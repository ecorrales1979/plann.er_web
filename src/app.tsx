import {
  ArrowRight,
  Calendar,
  MapPin,
  Settings2,
  UserRoundPlus,
import { ArrowRight, Calendar, MapPin } from "lucide-react";
} from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestListOpen, setIsGuestListOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);

  const openGuestList = () => setIsGuestListOpen(true);

  const CloseGuestList = () => setIsGuestListOpen(false);

  const openGuestModal = () => setIsGuestModalOpen(true);

  const closeGuestModal = () => setIsGuestModalOpen(false);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Invite your friends and plan your next trip!
          </p>
        </div>

        <div className="space-y-4">
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
                onClick={CloseGuestList}
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

          {isGuestListOpen && (
            <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center gap-3 shadow-shape">
              <button
                type="button"
                onClick={openGuestModal}
                className="flex items-center gap-2 flex-1"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="text-zinc-400">Who will be in the trip?</span>
              </button>
              <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirm trip
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          By planning your trip using plann.er, you automatically
          <br />
          accept our{" "}
          <a href="#" className="text-zinc-300 underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-zinc-300 underline">
            Privacy Policies
          </a>
        </p>
      </div>
    </div>
  );
}
