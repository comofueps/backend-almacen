import { Request, Response } from 'express';
import { where } from 'sequelize/types';

import { TipoProducto, ITipoProducto } from '../models/TipoProducto';

export class TipoProductoController {

    public async getAllTipoProducto(req: Request, res: Response) {
        try {
            const tipoProductos: ITipoProducto[] = await TipoProducto.findAll(
            ) // select * from TipoProductos;
            res.status(200).json({ tipoProductos })
        } catch (error) {
            console.log(error);
        }
    }

    public async getOneTipoProducto(req: Request, res: Response) {
        try {
            const tipoProducto: ITipoProducto | null = await TipoProducto.findByPk(
                req.params.id
            )
            res.status(200).json({ tipoProducto })
        } catch (error) {
            console.log(error);
        }
    }

    public async createTipoProducto(req: Request, res: Response) {
        try {
            const tipoProducto = await TipoProducto.create(req.body);
            res.status(200).json({ tipoProducto })
        } catch (error) {
            console.log(error);
        }
    }

    public async updateTipoProducto(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const actualizarTipoProducto = req.body;
            const existeTipoProducto = await TipoProducto.findByPk(id);

            if (!existeTipoProducto) {
                res.status(500).json({ msg: 'Tipo de producto no encontrado' });
            }
            await TipoProducto.update(actualizarTipoProducto,
                {
                    where: { id }
                });
            const tProductoActualizado = await TipoProducto.findByPk(id);
            res.status(200).json(tProductoActualizado);

        } catch (error) {
            console.log(error);
        }
    }

    public async deleteTipoProducto(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const existeTipoProducto = await TipoProducto.findByPk(id);

            if (!existeTipoProducto) {
                res.status(500).json({ msg: 'Tipo de producto no encontrado' });
            }
            await TipoProducto.destroy(
                {
                    where: { id }
                }
            )

            res.status(200).json({msg:'Tipo de producto eliminado'});

        } catch (error) {
            console.log(error);
        }
    }


}
