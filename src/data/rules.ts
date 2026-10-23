// DRAFT. Placeholder rules for the committee to review. Nothing here is confirmed yet.
export const format = [
  { step: '01', title: 'Group stage', body: 'Ten teams in two groups of five. Each team plays the other four in its group once.' },
  { step: '02', title: 'Semi-finals', body: 'The top two in each group go through. A1 plays B2 and B1 plays A2.' },
  { step: '03', title: 'Final', body: 'The two semi-final winners meet on Sunday afternoon for the CalCup.' },
];

export const points = [
  { result: 'Win', pts: 2 },
  { result: 'Tie / no result', pts: 1 },
  { result: 'Loss', pts: 0 },
];

export const rules = [
  { title: 'Overs', body: '10 overs per side. Each bowler can bowl a maximum of 2 overs.' },
  { title: 'Powerplay', body: 'Overs 1–3. Only two fielders allowed outside the inner circle.' },
  { title: 'Squads', body: 'Up to 14 players per squad, 11 on the field. Squads are locked before the first match.' },
  { title: 'Ball', body: 'Ball type to be confirmed.' },
  { title: 'Timing', body: 'Each innings should finish within 40 minutes. Teams report 30 minutes before their match.' },
  { title: 'Ties', body: 'A tied knockout match is decided by a Super Over.' },
  { title: 'Standings', body: 'Teams level on points are separated by net run rate, then head-to-head result.' },
  { title: 'Umpires', body: 'The umpires’ decisions are final. Disputes go to the tournament committee.' },
];
