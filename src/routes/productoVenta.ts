import { Request, Response, Application, Router } from "express";
import { ProductoVentaController } from "../controllers/productoVenta.controller";


export class ProductoVentaRoutes {
    public ProductoVentaController: ProductoVentaController = new ProductoVentaController();

    public routes(app: Application): void {
        app.route("/productosventas").get(this.ProductoVentaController.getAllProductoVenta);
        app.route("/productosventas/:ProductoId").get(this.ProductoVentaController.getOneProductoVenta);
        app.route("/productosventas").post(this.ProductoVentaController.createProductoVenta);
        app.route("/productosventas/:ProductoId").put(this.ProductoVentaController.updateProductoVenta);
        app.route("/productosventas/:ProductoId").delete(this.ProductoVentaController.deleteProductoVenta);        
    }
}
