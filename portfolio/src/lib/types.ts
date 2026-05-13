export type Project = {
	title: string;
	duration: string;
	role: string;
	impact?: string;
	preview: string; // A brief description or highlight of the project
	image?: string;
	caseStudyUrl: string;
	category: string;
};

export type Button = {
	name: string;
	link: string;
};
