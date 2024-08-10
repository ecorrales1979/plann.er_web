import { AtSign, Plus, X } from 'lucide-react';
import { FormEvent } from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Modal } from '../../components/modal';

type Props = {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addEmailToInviteList: (email: string) => void;
  removeEmailFromInviteList: (emailToRemove: string) => void;
};

export function InviteGuestsModal({
  addEmailToInviteList,
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInviteList,
}: Props) {
  const handleAddEmail = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const email = data.get('email')?.toString();
    if (!email || emailsToInvite.includes(email)) return;
    addEmailToInviteList(email);
    ev.currentTarget.reset();
  };

  return (
    <Modal
      title="Select participants"
      subtitle="Guests will receive an email to confirm their participation on your trip"
      onClose={closeGuestsModal}
    >
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
        onSubmit={handleAddEmail}
        className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
      >
        <AtSign className="size-5 text-zinc-400" />
        <Input type="email" name="email" placeholder="Type participant email" />
        <Button type="submit" color="primary">
          Invite
          <Plus className="size-5" />
        </Button>
      </form>
    </Modal>
  );
}
