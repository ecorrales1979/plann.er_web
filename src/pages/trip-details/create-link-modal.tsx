import { Link2, Tag } from 'lucide-react';
import { FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/button';
import { Modal } from '../../components/modal';
import { api } from '../../lib/axios';

type Props = {
  onClose: () => void;
};

export function CreateLinkModal({ onClose }: Props) {
  const { tripId } = useParams();

  const createLink = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = data.get('title');
    const url = data.get('url');
    api.post(`/trips/${tripId}/links`, { title, url }).then(() => {
      onClose();
    });
  };

  return (
    <Modal
      title="Register link"
      subtitle="All guests can see the important links."
      onClose={onClose}
    >
      <form onSubmit={createLink} className="space-y-3">
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Tag className="size-5 text-zinc-400" />
          <input
            type="text"
            name="title"
            placeholder="Link title"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 flex-1">
          <Link2 className="size-5 text-zinc-400" />
          <input
            type="url"
            name="url"
            placeholder="URL"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>
        <Button type="submit" color="primary" size="full">
          Save link
        </Button>
      </form>
    </Modal>
  );
}
