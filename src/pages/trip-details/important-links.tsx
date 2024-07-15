import { Link2, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/button";
import { CreateLinkModal } from "./create-link-modal";

// type Props = {}

export function ImportantLinks() {
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);

  const openCreateLinkModal = () => setIsCreateLinkModalOpen(true);

  const closeCreateLinkModal = () => setIsCreateLinkModalOpen(false);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Important links</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              AirBnB reservation
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/654653864665335486543585654654
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              AirBnB reservation
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/654653864665335486543585654654
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>
      <Button onClick={openCreateLinkModal} size="full">
        <Plus className="size-5" />
        Add new link
      </Button>
      {isCreateLinkModalOpen && (
        <CreateLinkModal onClose={closeCreateLinkModal} />
      )}
    </div>
  );
}
