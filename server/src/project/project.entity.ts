import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column({ length: 500 })
  subtitle: string;

  @Column('int')
  order: number;

  @Column('text')
  image: string;

  @Column('text')
  content: string;

  @Column('text')
  slug: string;

  @Column('text')
  role: string;
}
