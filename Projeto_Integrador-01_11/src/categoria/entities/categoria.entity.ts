import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_categoria"})
export class Categoria{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;


    @IsNotEmpty()
    @Column({length:100, nullable: false})
    @ApiProperty()
    nome: string;

    @Column({ default: true})
    @ApiProperty()
    doacao: boolean;

    @ApiProperty({ type: () => Produto})
    @OneToMany(() => Produto, (Produto) => Produto.categoria)
    produto: Produto[]

}

