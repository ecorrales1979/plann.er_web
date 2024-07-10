import { ArrowRight, UserRoundPlus } from "lucide-react";

type Props = {
  emailsToInvite: string[];
  openGuestModal: () => void;
  openConfirmTripModal: () => void;
};

export function InviteGuestsStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestModal,
}: Props) {
  return (
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
          <span className="text-zinc-400">Who will be in the trip?</span>
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
  );
}
