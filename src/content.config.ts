import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One JSON file per team in src/content/teams/. The file name is the team's URL slug.
const teams = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/teams' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      code: z.string().length(3),
      group: z.enum(['A', 'B']),
      colours: z.object({ primary: z.string(), secondary: z.string() }),
      colourNames: z.string().optional(),
      crest: image().optional(),
      kit: image().optional(),
      placeholder: z.boolean().default(false),
      players: z.array(
        z.object({
          name: z.string(),
          role: z.enum(['Batter', 'Wicket-keeper', 'All-rounder', 'Bowler']),
          captain: z.boolean().default(false),
          viceCaptain: z.boolean().default(false),
        }),
      ),
    }),
});

// teamA/teamB are team slugs (e.g. "giants") or a label such as "A1" or "Winner SF1".
const matches = defineCollection({
  loader: file('src/content/matches.json'),
  schema: z.object({
    number: z.number(),
    day: z.union([z.literal(1), z.literal(2)]),
    date: z.string(),
    time: z.string(),
    ground: z.string(),
    stage: z.enum(['Group A', 'Group B', 'Semi-final', 'Final']),
    teamA: z.string(),
    teamB: z.string(),
  }),
});

export const collections = { teams, matches };
