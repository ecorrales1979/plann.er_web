export type TripDTO = {
  destination: string;
  ends_at: string;
  id: string;
  is_confirmed: boolean;
  starts_at: string;
};

export type TripResponseDTO = {
  trip: TripDTO;
};
