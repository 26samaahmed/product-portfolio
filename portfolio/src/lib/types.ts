export type Project = {
  title: string;
  duration: string;
  role: string;
  impact?: string;
  preview: string; // A brief description or highlight of the project
  tags: string[];
  image?: string;
  caseStudyUrl: string;
};


export type Button = {
  name: string;
  link: string;
}