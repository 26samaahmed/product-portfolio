export type Project = {
  slug: string;
  title: string;
  duration: string;
  role: string;
  impact?: string;
  preview: string;
  image?: string;
  category: string;

  type: 'case-study' | 'audio';

  figmaEmbedUrl?: string;
  figmaUrl?: string;
};

export type Button = {
  name: string;
  link: string;
};
