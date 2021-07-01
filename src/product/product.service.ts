import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Product } from "./interfaces/product.interface";
import { CreateProductDTO } from "./dto/product.dto";

@Injectable()
export class ProductService {
    
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    /**
     * Obtener todos los productos
     * 
     * @returns Promise<Product[]>
     */
    async getProducts(): Promise<Product[]> {
        return await this.productModel.find();
    }

    /**
     * Obtener un producto según su ID
     * 
     * @param productID
     * @returns Promise<Product>
     * @example
     * this.productModel.findById(12d4B799y)
     */
    async getProduct(productID: string): Promise<Product> {
        return await this.productModel.findById(productID);
    }

    /**
     * Crear un producto
     * @param createProductDTO 
     * @returns Promise<Product>
     * @example 
     * this.productModel({name: 'Monitor', description: 'Monitor HP', 
     *                    imageURL: 'imageMonitor.png', price: 250000})
     */
    async createProduct(createProductDTO: CreateProductDTO): Promise<Product>{
        const product = new this.productModel(createProductDTO);
        return await product.save();
    }

    /**
     * Borrar un producto
     * @param productID 
     * @returns Promise<Product>
     * @example 
     * this.productModel.findByIdAndDelete(12d4B799y)
     */
    async deleteProduct(productID: string): Promise<Product>{
        return await this.productModel.findByIdAndDelete(productID);
    }

    /**
     * Actualizar un producto
     * @param productID 
     * @param createProductDTO 
     * @returns Promise<Product>
     * @example 
     * this.productModel.findByIdAndUpdate(12d4B799y, {name: 'Monitor', description: 'Monitor HP 2.0', 
     *                    imageURL: 'imageMonitor2.png', price: 300000})
     */
    async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<Product>{ 
        return await this.productModel.findByIdAndUpdate(productID, createProductDTO, {new: true});
    }

}
