export const enum Roles {
  DESIGNER = 'Designer',
  DEVELOPER = 'Developer'
}

export interface Program {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  content: string;
  slug: string;
  role: Roles;
}
