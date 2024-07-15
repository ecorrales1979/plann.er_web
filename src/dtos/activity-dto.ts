export type ActivityDTO = {
  id: string;
  title: string | null;
  occurs_at: string;
};

export type ActivitiesPerDate = {
  date: string;
  activities: ActivityDTO[];
};

export type ActivitiesResponseDTO = {
  activities: ActivitiesPerDate[];
};
