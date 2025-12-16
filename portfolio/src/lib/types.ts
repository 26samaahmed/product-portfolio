export type Project = {
  title: string;
  duration: string;
  role: string;
  problem_statement: string;
  tags: string[];
  casestudyUrl: string;
};

export type Button = {
  name: string;
  link: string;
}

export type CaseStudy = {
  duration: string;
  role: string;
  title: string;
  tags: string[];
  introduction: string;
  problem_statement: string;
}