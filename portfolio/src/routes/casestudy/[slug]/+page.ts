import { caseStudies } from '$lib/caseStudies';

export function load({ params }) {
  const slug = params.slug;
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    throw new Error(`Case study not found: ${slug}`);
  }

  return { caseStudy };
}
