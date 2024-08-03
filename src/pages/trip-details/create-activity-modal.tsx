import { Calendar, Tag } from 'lucide-react';
import { FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Modal } from '../../components/modal';
import { api } from '../../lib/axios';

type Props = {
  closeCreateActivityModal: () => void;
};

export function CreateActivityModal({ closeCreateActivityModal }: Props) {
  const { tripId } = useParams();

  const createActivity = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = data.get('title');
    const occurs_at = data.get('occurs_at');
    api.post(`/trips/${tripId}/activities`, { title, occurs_at }).then(() => {
      closeCreateActivityModal();
    });
  };

  return (
    <Modal
      title="Register activity"
      subtitle="All guests can view the activities."
      onClose={closeCreateActivityModal}
    >
      <form onSubmit={createActivity} className="space-y-3">
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Tag className="size-5 text-zinc-400" />
          <Input type="text" name="title" placeholder="Activity name" />
        </div>
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 flex-1">
          <Calendar className="size-5 text-zinc-400" />
          <Input type="datetime-local" name="occurs_at" placeholder="Date" />
        </div>
        <Button type="submit" color="primary" size="full">
          Save activity
        </Button>
      </form>
    </Modal>
  );
}
