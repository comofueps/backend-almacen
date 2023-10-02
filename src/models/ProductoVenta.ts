import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Producto } from "./Producto";
import { Venta } from "./Venta";

export class ProductoVenta extends Model {
    public ProductoId!: number;
    public VentaId!: number;
    public cantidad!: number;
    public precioUnitario!: Float32List;
}

export interface IProductoVenta {
    ProductoId: number;
    VentaId: number;
    cantidad: number;
    precioUnitario: Float32List;
}

ProductoVenta.init(
    {
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precioUnitario: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "productos_ventas",
        sequelize: database,
        timestamps: true
    }
);


