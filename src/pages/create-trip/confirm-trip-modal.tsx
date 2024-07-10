import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";

type Props = {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
};

export function ConfirmTripModal({ closeConfirmTripModal, createTrip }: Props) {
  return (
    <div className="fixed bg-black/60 inset-0 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirm trip creation</h2>
            <button type="button" onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            To complete the creation of the trip to{" "}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brazil
            </span>{" "}
            on the dates of{" "}
            <span className="font-semibold text-zinc-100">
              August 16th to 27th, 2024
            </span>
            , fill in your details below:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              type="text"
              name="name"
              placeholder="Type your full name"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Type your personal email"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex justify-center items-center gap-2 hover:bg-lime-400"
          >
            Confirm trip creation
          </button>
        </form>
      </div>
    </div>
  );
}
