import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Pet } from "./Pet";

@Entity("outlays")
export class Outlay {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  pet_id: number;

  @ManyToOne((type) => Pet, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "pet_id" })
  pet: Pet;
}
