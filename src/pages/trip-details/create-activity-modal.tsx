import { Calendar, Tag } from "lucide-react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

type Props = {
  closeCreateActivityModal: () => void;
};

export function CreateActivityModal({ closeCreateActivityModal }: Props) {
  return (
    <Modal
      title="Register activity"
      subtitle="All guests can view the activities."
      onClose={closeCreateActivityModal}
    >
      <form className="space-y-3">
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Tag className="size-5 text-zinc-400" />
          <input
            type="text"
            name="name"
            placeholder="Activity name"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 flex-1">
          <Calendar className="size-5 text-zinc-400" />
          <input
            type="datetime-local"
            name="date"
            placeholder="Date"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>
        <Button type="submit" color="primary" size="full">
          Save activity
        </Button>
      </form>
    </Modal>
  );
}
