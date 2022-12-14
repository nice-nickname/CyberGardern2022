import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
 } from "typeorm";

@Entity()
class HobbieModel {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    hobbie: string
}

export default HobbieModel