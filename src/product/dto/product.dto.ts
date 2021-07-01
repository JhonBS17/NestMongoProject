import { IsEmail, IsInt, Max } from "class-validator";

export class CreateProductDTO {
    readonly name: string;
    readonly description: string;
    readonly imageURL: string;

    @IsInt()
    @Max(1000000, {
        message: 'El precio máximo es $1.000.000 COP.'
    })
    readonly price: number;
    
    readonly createdAt: Date;
}