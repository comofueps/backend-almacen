import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Cliente } from "./Cliente";

export class Venta extends Model {
    public fechaVenta!: string;
    public subtotal!: Float32List;
    public impuestos!: Float32List;
    public descuentos!: Float32List;
    public total!: Float32List;
    public clienteId!: number;
}

export interface IVenta {
    fechaVenta: string;
    subtotal: Float32List;
    impuestos: Float32List;
    descuentos: Float32List;
    total: Float32List;
    clienteId: number;
}

Venta.init(
    {
        fechaVenta: {
            type: DataTypes.DATE,
            allowNull: false
        },
        subtotal: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        impuestos: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        descuentos: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        tableName: "ventas",
        sequelize: database,
        timestamps: true
    }
);

Venta.belongsTo(Cliente)
Cliente.hasMany(Venta)
