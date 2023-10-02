import { Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Venta, IVenta } from '../models/Venta';

export class VentaController {

    public async getAllVenta(req: Request, res: Response) {
        try {
            const ventas: IVenta[] = await Venta.findAll(
            )
            res.status(200).json({ ventas })
        } catch (error) {

            console.error(error)

        }
    }

    public async getOneVenta(req: Request, res: Response) {
        try {
            const venta: IVenta | null = await Venta.findByPk(req.params.id)
            res.status(200).json({ venta })
        } catch (error) {
            console.error(error)
        }
    }

    public async createVenta(req: Request, res: Response) {
        try {

            const venta = await Venta.create(req.body)
            res.status(200).json(venta)

        } catch (error) {
            console.error(error)
        }
    }

    public async updateVenta(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const actualizarDatos = req.body;

            const existeVenta = await Venta.findByPk(id)

            if (!existeVenta) {
                res.status(500).json({ msg: 'Venta no encontrada' })
            }

            await Venta.update(actualizarDatos, {
                where: { id }

            })

            const ventaActualizada = await Venta.findByPk(id);
            res.status(200).json(ventaActualizada);


        } catch (error) {
            console.error(error)
        }
    }

    public async deleteVenta(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const existeVenta = await Venta.findByPk(id)

            if (!existeVenta) {
                res.status(500).json({ msg: 'Venta no encontrada' })
            }

            await Venta.destroy(
                {
                    where: { id }
                }
            )

            res.status(200).json({ msg: 'Venta eliminada' });

        } catch (error) {
            console.error(error)
        }
    }




}
