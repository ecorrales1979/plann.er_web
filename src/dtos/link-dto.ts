export type LinkDTO = {
  id: string;
  title: string | null;
  url: string;
};

export type LinksResponseDTO = {
  links: LinkDTO[];
};
