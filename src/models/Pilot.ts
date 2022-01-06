import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity({ name: 'pilots' })
class Pilots extends BaseEntity {
  @Column({ unique: true })
  certification: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  credits: number;
}

export default Pilots;
