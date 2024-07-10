import { ArrowRight, UserRoundPlus } from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { InviteGuestsModal } from "./invite-guests-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";

export function CreateTrip() {
  const [isGuestListOpen, setIsGuestListOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const navigate = useNavigate();

  const openGuestList = () => setIsGuestListOpen(true);

  const closeGuestList = () => setIsGuestListOpen(false);

  const openGuestModal = () => setIsGuestModalOpen(true);

  const closeGuestModal = () => setIsGuestModalOpen(false);

  const openConfirmTripModal = () => setIsConfirmTripModalOpen(true);

  const closeConfirmTripModal = () => setIsConfirmTripModalOpen(false);

  const createTrip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          <DestinationAndDateStep
            closeGuestList={closeGuestList}
            isGuestListOpen={isGuestListOpen}
            openGuestList={openGuestList}
          />

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
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}
