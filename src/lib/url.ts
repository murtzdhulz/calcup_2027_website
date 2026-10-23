// Prefix a site path with the GitHub Pages base, e.g. url('teams/') -> '/calcup_2027_website/teams/'.
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
