import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

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
      <Button onClick={openConfirmTripModal} color="primary">
        Confirm trip
        <ArrowRight className="size-5 text-lime-950" />
      </Button>
    </div>
  );
}
