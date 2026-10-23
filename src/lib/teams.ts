import { getCollection, type CollectionEntry } from 'astro:content';

export type Team = CollectionEntry<'teams'>;
export type Match = CollectionEntry<'matches'>;

export async function getTeams(): Promise<Team[]> {
  const teams = await getCollection('teams');
  return teams.sort((a, b) => a.data.group.localeCompare(b.data.group) || a.data.name.localeCompare(b.data.name));
}

export async function getMatches(): Promise<Match[]> {
  const matches = await getCollection('matches');
  return matches.sort((a, b) => a.data.number - b.data.number);
}

export const roleOrder = ['Batter', 'Wicket-keeper', 'All-rounder', 'Bowler'] as const;
export const rolePlural: Record<(typeof roleOrder)[number], string> = {
  Batter: 'Batters',
  'Wicket-keeper': 'Wicket-keepers',
  'All-rounder': 'All-rounders',
  Bowler: 'Bowlers',
};

export function formatDay(date: string): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}
