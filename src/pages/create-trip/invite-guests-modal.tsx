import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";

type Props = {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addEmailToInviteList: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInviteList: (emailToRemove: string) => void;
};

export function InviteGuestsModal({
  addEmailToInviteList,
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInviteList,
}: Props) {
  return (
    <div className="fixed bg-black/60 inset-0 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Select participants</h2>
            <button type="button" onClick={closeGuestsModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Guests will receive an email to confirm their participation on your
            trip
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => (
            <div
              key={email}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{email}</span>
              <button
                type="button"
                onClick={() => removeEmailFromInviteList(email)}
              >
                <X className="size-4 text-zinc-400" />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={addEmailToInviteList}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <AtSign className="size-5 text-zinc-400" />
          <input
            type="email"
            name="email"
            placeholder="Type participant email"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
          <button
            type="submit"
            className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 w-fit"
          >
            Invite
            <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
