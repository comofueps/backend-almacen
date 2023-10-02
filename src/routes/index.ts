import { ClienteRoutes } from './cliente';
import { ProductoRoutes } from './producto';
import { TipoProductoRoutes } from './tipoProducto';
import { VentaRoutes } from './venta';
import { ProductoVentaRoutes } from './productoVenta';

export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public ventaRoutes: VentaRoutes = new VentaRoutes();
    public tipoProductoRoutes: TipoProductoRoutes = new TipoProductoRoutes();
    public productoRoutes: ProductoRoutes = new ProductoRoutes();
    public productoVentaRoutes: ProductoVentaRoutes = new ProductoVentaRoutes();
}
