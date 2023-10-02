import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { TipoProducto } from "./TipoProducto";
import { Venta } from "./Venta";
import { ProductoVenta } from "./ProductoVenta";


export class Producto extends Model {
    public nombre!: string;
    public marca!: string;
    public precio!: Float32List;
    public stockMin!: Float32List;
    public cantidad!: Float32List;
    public tipoProductoId!: number;
}

export interface IProducto {
    nombre: string;
    marca: string;
    precio: Float32List;
    stockMin: Float32List;
    cantidad: Float32List;
    tipoProductoId: number;
}

Producto.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stockMin: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.FLOAT,
            allowNull: false
        }

    },
    {
        tableName: "productos",
        sequelize: database,
        timestamps: true
    }
);

Producto.belongsToMany(Venta, { through: ProductoVenta })
Venta.belongsToMany(Producto, { through: ProductoVenta })




