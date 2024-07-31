import { Link2, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { LinkDTO, LinksResponseDTO } from "../../dtos";
import { api } from "../../lib/axios";
import { CreateLinkModal } from "./create-link-modal";

// type Props = {}

export function ImportantLinks() {
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);
  const [links, setLinks] = useState<LinkDTO[]>([]);
  const { tripId } = useParams();

  useEffect(() => {
    api
      .get<LinksResponseDTO>(`/trips/${tripId}/links`)
      .then((response) => setLinks(response.data.links));
  }, [tripId]);

  const openCreateLinkModal = () => setIsCreateLinkModalOpen(true);

  const closeCreateLinkModal = () => setIsCreateLinkModalOpen(false);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Important links</h2>
      {links.length === 0 ? (
        <p>No links to show</p>
      ) : (
        <div className="space-y-5">
          {links.map((link) => (
            <div
              key={`link_${link.id}`}
              className="flex items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <span className="block font-medium text-zinc-100">
                  {link.title}
                </span>
                <a
                  href={link.url}
                  className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                >
                  {link.url}
                </a>
              </div>
              <Link2 className="size-5 text-zinc-400 shrink-0" />
            </div>
          ))}
        </div>
      )}
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
