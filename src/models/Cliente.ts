import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Cliente extends Model {
    public nombreCliente!: string;
    public direccionCliente!: string;
    public telefonoCliente!: string;
    public correoCliente!: string;
    public passwordCliente!: string;
    public estadoCliente!: string;
}

export interface ICliente {
    nombreCliente: string;
    direccionCliente: string;
    telefonoCliente: string;
    correoCliente: string;
    passwordCliente: string;
    estadoCliente: string;
}

Cliente.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estadoCliente:{
            type: DataTypes.ENUM('activo','inactivo'),
            allowNull: false
        }
    },
    {
        tableName: "clientes",
        sequelize: database,
        timestamps: false
    }
);
