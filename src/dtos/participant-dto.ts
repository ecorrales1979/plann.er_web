export type ParticipantDTO = {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
};

export type ParticipantsResponseDTO = {
  participants: ParticipantDTO[];
};
