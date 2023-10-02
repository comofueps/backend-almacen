import { Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Producto, IProducto } from '../models/Producto';

export class ProductoController {

    public async getAllProducto(req: Request, res: Response) {
        try {
            const productos: IProducto[] = await Producto.findAll(
            ) // select * from Productos;
            res.status(200).json({ productos })
        } catch (error) {
            console.log(error);
        }
    }

    public async getOneProducto(req: Request, res: Response) {
        try {
            const producto: IProducto | null = await Producto.findByPk(
                req.params.id)
            if (producto == null) {
                res.status(200).json({ msg: 'Producto no encontrado' })
            }
            res.status(200).json({ producto })
        } catch (error) {
            console.log(error);
        }
    }

    public async createProducto(req: Request, res: Response) {
        try {
            const producto = await Producto.create(req.body);
            res.status(200).json(producto);

        } catch (error) {
            console.log(error);
        }
    }

    public async updateProducto(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const actualizarProducto = req.body;
            const existeProducto = await Producto.findByPk(id);

            if (!existeProducto) {
                res.status(500).json({ msg: 'Producto no encontrado' });
            }
            await Producto.update(actualizarProducto,
                {
                    where: { id }
                });
            const productoActualizado = await Producto.findByPk(id);
            res.status(200).json(productoActualizado);

        } catch (error) {
            console.log(error);
        }
    }

    public async deleteProducto(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const existeProducto = await Producto.findByPk(id);

            if (!existeProducto) {
                res.status(500).json({ msg: 'Producto no encontrado' });
            }

            await Producto.destroy(
                {
                    where: { id }
                }
            )
            res.status(200).json({ msg: 'Producto eliminado' });


        } catch (error) {
            console.log(error);
        }
    }


}
