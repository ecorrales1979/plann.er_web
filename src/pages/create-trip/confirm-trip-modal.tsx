import { Mail, User } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

type Props = {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  ownerEmail: string;
  ownerName: string;
  setOwnerEmail: (email: string) => void;
  setOwnerName: (name: string) => void;
};

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  ownerEmail,
  ownerName,
  setOwnerEmail,
  setOwnerName,
}: Props) {
  return (
    <Modal
      title="Confirm trip creation"
      subtitle={
        <>
          To complete the creation of the trip to{" "}
          <span className="font-semibold text-zinc-100">
            Florianópolis, Brazil
          </span>{" "}
          on the dates of{" "}
          <span className="font-semibold text-zinc-100">
            August 16th to 27th, 2024
          </span>
          , fill in your details below:
        </>
      }
      onClose={closeConfirmTripModal}
    >
      <form onSubmit={createTrip} className="space-y-3">
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <User className="size-5 text-zinc-400" />
          <input
            type="text"
            name="name"
            value={ownerName}
            onChange={(ev) => setOwnerName(ev.target.value)}
            placeholder="Type your full name"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Mail className="size-5 text-zinc-400" />
          <input
            type="email"
            name="email"
            value={ownerEmail}
            onChange={(ev) => setOwnerEmail(ev.target.value)}
            placeholder="Type your personal email"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>
        <Button type="submit" color="primary" size="full">
          Confirm trip creation
        </Button>
      </form>
    </Modal>
  );
}
