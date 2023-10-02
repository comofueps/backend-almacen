import { Request, Response, Application, Router } from "express";

import { ProductoController } from '../controllers/producto.controller';

export class ProductoRoutes {
    public productoController: ProductoController = new ProductoController();

    public routes(app: Application): void {
        app.route("/productos").get(this.productoController.getAllProducto);
        app.route("/productos/:id").get(this.productoController.getOneProducto);
        app.route("/productos").post(this.productoController.createProducto);
        app.route("/productos/:id").put(this.productoController.updateProducto);
        app.route("/productos/:id").delete(this.productoController.deleteProducto);
    }
}
