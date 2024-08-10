import { FormEvent, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useToast } from '../../hooks/toast';
import { api } from '../../lib/axios';
import { ConfirmTripModal } from './confirm-trip-modal';
import { InviteGuestsModal } from './invite-guests-modal';
import { createTripSchema } from './schemas';
import { DestinationAndDateStep } from './steps/destination-and-date-step';
import { InviteGuestsStep } from './steps/invite-guests-step';

export function CreateTrip() {
  const [isGuestListOpen, setIsGuestListOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [destination, setDestination] = useState('');
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const { toastError } = useToast();

  const navigate = useNavigate();

  const openGuestList = () => setIsGuestListOpen(true);

  const closeGuestList = () => setIsGuestListOpen(false);

  const openGuestModal = () => setIsGuestModalOpen(true);

  const closeGuestModal = () => setIsGuestModalOpen(false);

  const openConfirmTripModal = () => setIsConfirmTripModalOpen(true);

  const closeConfirmTripModal = () => setIsConfirmTripModalOpen(false);

  const createTrip = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const parsedSchema = createTripSchema.parse({
        destination,
        eventStartAndEndDates,
        emailsToInvite,
        ownerName,
        ownerEmail,
      });

      const response = await api
        .post('/trips', {
          destination: parsedSchema.destination,
          starts_at: parsedSchema.eventStartAndEndDates.from,
          ends_at: parsedSchema.eventStartAndEndDates.to,
          emails_to_invite: parsedSchema.emailsToInvite,
          owner_name: parsedSchema.ownerName,
          owner_email: parsedSchema.ownerEmail,
        })
        .catch((error: Error) => {
          toastError(error.message);
          throw error;
        });

      const { tripId } = response.data;

      navigate(`/trips/${tripId}`);
    } catch (error) {
      if (error instanceof z.ZodError) {
        // for (const issue of error.issues) {
        //   setErrors((prevState) => ({
        //     ...prevState,
        //     [issue.path[0] as string]: issue.message,
        //   }));
        // }
        toastError(
          'Some required information is missing. Please, go back and check it'
        );
      } else {
        console.error('Unexpected error: ', error);
      }
    }
  };

  const addEmailToInviteList = (email: string) => {
    // ev.preventDefault();
    // const data = new FormData(ev.currentTarget);
    // const email = data.get('email')?.toString();
    // if (!email || emailsToInvite.includes(email)) return;
    setEmailsToInvite((oldState) => [...oldState, email]);
    // ev.currentTarget.reset();
  };

  const removeEmailFromInviteList = (emailToRemove: string) => {
    setEmailsToInvite(
      [...emailsToInvite].filter((email) => email !== emailToRemove)
    );
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Invite your friends and plan your next trip!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            closeGuestList={closeGuestList}
            destination={destination}
            eventStartAndEndDates={eventStartAndEndDates}
            isGuestListOpen={isGuestListOpen}
            openGuestList={openGuestList}
            setDestination={setDestination}
            setEventStartAndEndDates={setEventStartAndEndDates}
          />

          {isGuestListOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
              openGuestModal={openGuestModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          By planning your trip using plann.er, you automatically
          <br />
          accept our{' '}
          <a href="#" className="text-zinc-300 underline">
            Terms of Use
          </a>{' '}
          and{' '}
          <a href="#" className="text-zinc-300 underline">
            Privacy Policies
          </a>
        </p>
      </div>

      {isGuestModalOpen && (
        <InviteGuestsModal
          addEmailToInviteList={addEmailToInviteList}
          closeGuestsModal={closeGuestModal}
          emailsToInvite={emailsToInvite}
          removeEmailFromInviteList={removeEmailFromInviteList}
        />
      )}

      {isConfirmTripModalOpen && destination && eventStartAndEndDates && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
          dateEnd={eventStartAndEndDates.from!}
          dateStart={eventStartAndEndDates.to!}
          destination={destination}
          ownerEmail={ownerEmail}
          ownerName={ownerName}
          setOwnerEmail={setOwnerEmail}
          setOwnerName={setOwnerName}
        />
      )}
    </div>
  );
}
