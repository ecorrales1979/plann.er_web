import { z } from 'zod';

export const destinationAndDateSchema = z.object({
  destination: z.string().min(1, 'Destination is required'),
  eventStartAndEndDates: z.object(
    {
      from: z.date({ message: 'Start date is required' }),
      to: z.date({ invalid_type_error: 'End date is required' }),
    },
    { message: 'Dates are required' }
  ),
});

export const emailToInviteSchema = z.string().email();

export const emailsToInviteSchema = z.object({
  emailsToInvite: z.array(emailToInviteSchema),
});

export const ownerSchema = z.object({
  ownerName: z.string().min(1, 'Owner name is required'),
  ownerEmail: z.string().email({ message: 'Owner email is required' }),
});

export const createTripSchema = destinationAndDateSchema
  .merge(emailsToInviteSchema)
  .merge(ownerSchema);
