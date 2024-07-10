import {
  ArrowRight,
  Calendar,
  Mail,
  MapPin,
  Settings2,
  User,
  UserRoundPlus,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";

export function CreateTrip() {
  const [isGuestListOpen, setIsGuestListOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const navigate = useNavigate();

  const openGuestList = () => setIsGuestListOpen(true);

  const CloseGuestList = () => setIsGuestListOpen(false);

  const openGuestModal = () => setIsGuestModalOpen(true);

  const closeGuestModal = () => setIsGuestModalOpen(false);

  const openConfirmTripModal = () => setIsConfirmTripModalOpen(true);

  const closeConfirmTripModal = () => setIsConfirmTripModalOpen(false);

  const createTrip = () => {
    navigate("/trips/123");
  };

  const addEmailToInviteList = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const email = data.get("email")?.toString();
    if (!email || emailsToInvite.includes(email)) return;
    setEmailsToInvite((oldState) => [...oldState, email]);
    ev.currentTarget.reset();
  };

  const removeEmailFromInviteList = (emailToRemove: string) => {
    setEmailsToInvite(
      [...emailsToInvite].filter((email) => email !== emailToRemove)
    );
  };

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
                {emailsToInvite.length > 0 ? (
                  <span className="text-zinc-100">
                    {emailsToInvite.length} people invited
                  </span>
                ) : (
                  <span className="text-zinc-400">
                    Who will be in the trip?
                  </span>
                )}
              </button>
              <button
                onClick={openConfirmTripModal}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
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

      {isGuestModalOpen && (
        <InviteGuestsModal
          addEmailToInviteList={addEmailToInviteList}
          closeGuestsModal={closeGuestModal}
          emailsToInvite={emailsToInvite}
          removeEmailFromInviteList={removeEmailFromInviteList}
        />
      )}

      {isConfirmTripModalOpen && (
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

            <form onSubmit={addEmailToInviteList} className="space-y-3">
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
                onClick={createTrip}
                className="w-full bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex justify-center items-center gap-2 hover:bg-lime-400"
              >
                Confirm trip creation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
