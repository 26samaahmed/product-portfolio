import type { CaseStudy } from '$lib/types';

export const caseStudies: Record<string, CaseStudy> = {
  'carplay-karaoke': {
    timeline: 'Test - Test',
    title: 'CarPlay Karaoke',
    roles: ['UX Design', 'UI Design', 'Prototyping', 'User Research'],
    introduction:
      'CarPlay Karaoke is an in-car karaoke experience that allows users to sing along...',
    problem_statement:
      'Many people enjoy singing along to their favorite songs while driving...',
  },

  'myrepchat': {
    timeline: '10 Weeks',
    title: 'MyRepChat',
    roles: ['UX Research', 'Data Analysis', 'Usability Testing'],
    introduction:
      'MyRepChat is a communication platform for financial advisors...',
    problem_statement:
      'How might we improve the usability of a communication platform...',
  },

  'fullyhacks2025': {
    timeline: '2 Days',
    title: 'FullyHacks 2025',
    roles: ['Hackathon Participant', 'Full-Stack Development', 'UI/UX Design'],
    introduction:
      'FullyHacks is an annual hackathon that brings together developers...',
    problem_statement:
      'How can we create an innovative solution to address a real-world problem...',
  },

  'fullybeyond2024': {
    timeline: 'Summer – Fall 2024',
    title: 'FullyBeyond: Leading Web Infrastructure for CSUF’s First Design-a-thon',
    roles: ['Web Development Lead', 'Developer Support', 'Organizer'],
    introduction:
      'FullyBeyond was CSUF’s first-ever student-led design-a-thon, built to create space for creatives and designers to thrive in a hackathon-style event. As Web Development Lead, I took charge of our digital infrastructure—ensuring the site was updated, live, and aligned with our team’s evolving vision. My role was both technical and collaborative, bridging developers, designers, and organizers to bring our platform to life.',
    problem_statement:
      'CSUF lacked a dedicated platform for students to collaborate, showcase their skills, and tackle real-world problems through UX design. While hackathons existed, they didn’t focus on UX/UI design, and design-a-thons often lacked beginner-friendly learning environments.',
  }
};
