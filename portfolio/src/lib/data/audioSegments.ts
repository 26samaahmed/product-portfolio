export type AudioSegment = {
  number: string;
  title: string;
  guest: string;
  duration: string;
  description: string;
  audio: string;
};

export const audioSegments: AudioSegment[] = [
  {
    number: '01',
    title: 'The Baddiemintons Food Guide',
    guest: 'with Baddiemintons',
    duration: '7:45',
    description:
      'A very serious discussion with my friend group about the best food spots near campus, plus the lore behind how the Baddiemintons got their name.',
    audio: '/audio/feed-w-baddies-ep5.mp3',
  },

  {
    number: '02',
    title: 'How We Changed in College, How We Met & More',
    guest: 'with Ashley',
    duration: '14:38',
    description:
      'Ashley and I talk about our college experiences, how we became friends, graduating, and figuring out what comes after.',
    audio: '/audio/feed-w-ash-ep3.mp3',
  },

  {
    number: '03',
    title: 'College, Graduation & Everything in Between',
    guest: 'with Boushra',
    duration: '15:48',
    description:
      'A yap session with Boushra about college, graduating, and all the thoughts that come with reaching the end of that chapter.',
    audio: '/audio/feed-w-boushra-ep4.mp3',
  },

  {
    number: '04',
    title: "Let's Talk Music",
    guest: 'with Brishna',
    duration: '15:18',
    description:
      'Brishna and I talk about music, concerts, and the experiences that make being a music fan so fun.',
    audio: '/audio/feed-w-brishna-ep2.mp3',
  },

  {
    number: '05',
    title: 'Would We Survive a Zombie Apocalypse?',
    guest: 'with Brishna',
    duration: '7:16',
    description:
      'Brishna and I figure out our zombie apocalypse survival plans and, more importantly, whether either of us would actually make it.',
    audio: '/audio/feed-w-brishna-ep1.mp3',
  },
];
