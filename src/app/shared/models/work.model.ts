export const enum Roles {
  DESIGNER = 'Designer',
  DEVELOPER = 'Developer'
}

export interface Work {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  content: string;
  slug: string;
  order: number;
  role: Roles;
}
