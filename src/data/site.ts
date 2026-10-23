// Tournament-wide details. Event copy comes from the approved flyers (calcup repo, 2027/Final/Flyers).
export const site = {
  name: 'CalCup 2027',
  format: 'T10',
  tagline: 'The Bay is calling. Bring your game.',
  description:
    'CalCup 2027 is a T10 cricket tournament in the Bay Area, California, on March 20–21, 2027. Presented by Phizenix.',
  dates: 'March 20–21, 2027',
  datesShort: 'Mar 20–21, 2027',
  location: 'Bay Area, CA',
  // First ball, Pacific time. Drives the countdown on the home page.
  startsAt: '2027-03-20T08:00:00-07:00',
  venue: 'To be announced',
  presentedBy: 'Phizenix',

  // Shows the "preview" strip on every page while content is still placeholder.
  preview: true,

  registration: {
    deadline: 'November 14, 2026',
    zelle: 'bayareakings53@gmail.com',
    team: { fee: '$1,553', per: 'per team', line: 'The Bay is calling. Bring your game.' },
    player: { fee: '$53', per: 'per player', spots: 'First 39 players', line: 'Sign up solo. We’ll draft you into a squad.' },
  },
};

export const nav = [
  { href: '', label: 'Home' },
  { href: 'schedule/', label: 'Schedule' },
  { href: 'teams/', label: 'Teams' },
  { href: 'format/', label: 'Format & Rules' },
  { href: 'info/', label: 'Venue & FAQ' },
];
