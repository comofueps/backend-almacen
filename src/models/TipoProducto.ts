import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Producto } from "./Producto";


export class TipoProducto extends Model {
    public nombre!: string;
}

export interface ITipoProducto {
    nombre: string;
}

TipoProducto.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "tipo_productos",
        sequelize: database,
        timestamps: true
    }
);

Producto.belongsTo(TipoProducto)
TipoProducto.hasMany(Producto)


