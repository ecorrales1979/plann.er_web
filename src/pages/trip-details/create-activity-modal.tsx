import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

type Props = {
  closeCreateActivityModal: () => void;
};

export function CreateActivityModal({ closeCreateActivityModal }: Props) {
  return (
    <div className="fixed bg-black/60 inset-0 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Register activity</h2>
            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            All guests can view the activities.
          </p>
        </div>

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
      </div>
    </div>
  );
}
