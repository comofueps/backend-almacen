import { Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Cliente, ICliente } from '../models/Cliente';

export class ClienteController {

    public async getAllCliente(req: Request, res: Response) {
        try {
            const clientes: ICliente[] = await Cliente.findAll(
                {
                    where: {
                        estadoCliente: 'activo'
                    }
                }
            ) // select * from clientes;
            res.status(200).json({ clientes })
        } catch (error) {
            console.log(error);
        }
    }

    public async getOneCliente(req: Request, res: Response) {
        try {
            const cliente: ICliente | null = await Cliente.findOne(
                {
                    where: {
                        id: req.params.id,
                        estadoCliente: 'activo'
                    }
                }
            ) // select * from clientes;
            res.status(200).json({ cliente })
        } catch (error) {
            console.log(error);
        }
    }

    public async createCliente(req: Request, res: Response) {

        try {
            const cliente = await Cliente.create(req.body)
            res.status(200).json({ cliente })
        } catch (error) {
            console.error(error);
        }
    }

    public async updateCliente(req: Request, res: Response) {
        try {
            //se obtiene el id del cliente que se desea actualizar
            const id = req.params.id;

            //se obtienen los datos actualizados 
            const actualizarCliente = req.body;

            //se valida que el id exista en la base de datos
            const existeCliente = await Cliente.findByPk(id);


            if (!existeCliente) {
                return res.status(404).json({ msg: 'Cliente no encontrado' });
            }

            // Realiza la actualización del registro pasandole como parametros
            // los datos actualizados y el id 
            await Cliente.update(actualizarCliente, {
                where: { id }
            });

            // se obtiene el cliente actualizado
            const clienteActualizado = await Cliente.findByPk(id);

            //responde con el cliente actualizado
            res.status(200).json(clienteActualizado);

        } catch (error) {
            console.error(error)

        }
    }

    public async deleteCliente(req: Request, res: Response) {

        try {
            //se obtiene el id del cliente que se desea actualizar
            const id = req.params.id;

            //se valida que el id exista en la base de datos
            const existeCliente = await Cliente.findByPk(id);


            if (!existeCliente) {
                return res.status(404).json({ msg: 'Cliente no encontrado' });
            }

            await Cliente.destroy({
                where: { id }
            });

            res.status(200).json({ msg: 'Cliente eliminado' });

        } catch (error) {
            console.error(error)

        }
    }


}
