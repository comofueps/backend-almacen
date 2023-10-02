import { Request, Response } from 'express';
import { where } from 'sequelize/types';

import { ProductoVenta, IProductoVenta } from '../models/ProductoVenta';

export class ProductoVentaController {

    public async getAllProductoVenta(req: Request, res: Response) {
        try {
            const productoVenta: IProductoVenta[] = await ProductoVenta.findAll(
            )
            res.status(200).json({ productoVenta })
        } catch (error) {
            console.log(error);
        }
    }

    public async getOneProductoVenta(req: Request, res: Response) {
        try {
            const productoVenta: IProductoVenta | null = await ProductoVenta.findByPk(
                req.params.ProductoId)
            res.status(200).json({ productoVenta })
        } catch (error) {
            console.log(error);
        }
    }

    public async createProductoVenta(req: Request, res: Response) {
        try {
            const productoVenta = await ProductoVenta.create(req.body);
            res.status(200).json({ productoVenta });
        } catch (error) {
            console.log(error);
        }
    }

    public async updateProductoVenta(req: Request, res: Response) {
        try {
            const productoId = req.params.ProductoId;
            const actualizarProductoVenta = req.body;
            const existeProductoVenta = await ProductoVenta.findByPk(productoId);

            if (!existeProductoVenta) {
                res.status(500).json({ msg: 'Producto por venta no encontrado' })
            }

            await ProductoVenta.update(actualizarProductoVenta,
                {
                    where: { productoId }
                })

            const productoVentaActualizado = await ProductoVenta.findByPk(productoId);
            res.status(200).json({ productoVentaActualizado });

        } catch (error) {
            console.log(error);
        }
    }

    public async deleteProductoVenta(req: Request, res: Response) {
        try {
            const productoId = req.params.ProductoId;

            const existeProductoVenta = await ProductoVenta.findByPk(productoId);

            if (!existeProductoVenta) {
                res.status(500).json({ msg: 'Producto por venta no encontrado' })
            }
            await ProductoVenta.destroy(
                {
                    where: { productoId }
                }
            )
            res.status(200).json({ msg:'¡Producto por venta eliminado!' });

        } catch (error) {
            console.log(error);
        }
    }
}