import type { CaseStudy } from '$lib/types';

export const caseStudies: Record<string, CaseStudy> = {
  'myrepchat': {
    duration: '10 Weeks',
    role: 'UX Research Intern',
    title: 'MyRepChat',
    tags: ['User Research', 'Data Analysis', 'Usability Testing'],
    introduction:
      'MyRepChat is a communication platform for financial advisors...',
    problem_statement:
      'How might we improve the usability of a communication platform for financial advisors by identifying pain points and streamlining client interactions?.',
  },

  'fullyhacks2025': {
    duration: '9 months',
    role: 'Co-Director',
    title: 'FullyHacks 2025',
    tags: ['Event Planning', 'Team Leadership', 'Community Building'],
    introduction:
      'FullyHacks is an annual hackathon that brings together developers...',
    problem_statement:
      'How might we design a hackathon that feels welcoming to beginners while still offering advanced challenges, workshops, and mentorship for experienced participants?',
  },

  'fullybeyond2024': {
    duration: '7 months',
    role: 'Web Dev Lead & Co-Host',
    title: 'FullyBeyond: Leading Web Infrastructure for CSUF’s First Design-a-thon',
    tags: ['Web Development', 'UI/UX Design', 'Collaboration'],
    introduction:
      'FullyBeyond was CSUF’s first-ever student-led design-a-thon, built to create space for creatives and designers to thrive in a hackathon-style event. As Web Development Lead, I took charge of our digital infrastructure—ensuring the site was updated, live, and aligned with our team’s evolving vision. My role was both technical and collaborative, bridging developers, designers, and organizers to bring our platform to life.',
    problem_statement:
      'How might we build a responsive, user-friendly website that communicates event details clearly while attracting participants and sponsors to our designathon?',
  }
};