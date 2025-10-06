export type Project = {
  title: string;
  project_duration: string;
  role: string;
  problem_statement: string;
  imageUrl: string;
  tags: string[];
  casestudyUrl: string;
};

export type Button = {
  name: string;
  link: string;
}

export type BucketListItem = {
  text: string;
  done: boolean;
}

export type CaseStudy = {
  timeline: string;
  title: string;
  roles: string[];
  introduction: string;
  problem_statement: string;
}