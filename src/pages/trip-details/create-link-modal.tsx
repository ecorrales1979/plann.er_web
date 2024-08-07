import { Link2, Tag } from 'lucide-react';
import { FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Modal } from '../../components/modal';
import { useToast } from '../../hooks/toast';
import { api } from '../../lib/axios';

type Props = {
  onClose: () => void;
};

export function CreateLinkModal({ onClose }: Props) {
  const { tripId } = useParams();
  const { toastError } = useToast();

  const createLink = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = data.get('title');
    const url = data.get('url');
    api
      .post(`/trips/${tripId}/links`, { title, url })
      .then(() => {
        onClose();
      })
      .catch((error: Error) => {
        toastError(error.message);
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
          <Input type="text" name="title" placeholder="Link title" />
        </div>
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 flex-1">
          <Link2 className="size-5 text-zinc-400" />
          <Input type="url" name="url" placeholder="URL" />
        </div>
        <Button type="submit" color="primary" size="full">
          Save link
        </Button>
      </form>
    </Modal>
  );
}
