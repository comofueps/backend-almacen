-- sentencia SQL para insertar 10 filas a la tabla clientes
INSERT INTO `clientes` (`nombre`, `direccion`, `telefono`, `correo`, `password`, `estadoCliente`)
VALUES
  ('Cliente1', 'Dirección1', '111-111-1111', 'cliente1@example.com', 'contraseña1', 'activo'),
  ('Cliente2', 'Dirección2', '222-222-2222', 'cliente2@example.com', 'contraseña2', 'inactivo'),
  ('Cliente3', 'Dirección3', '333-333-3333', 'cliente3@example.com', 'contraseña3', 'activo'),
  ('Cliente4', 'Dirección4', '444-444-4444', 'cliente4@example.com', 'contraseña4', 'inactivo'),
  ('Cliente5', 'Dirección5', '555-555-5555', 'cliente5@example.com', 'contraseña5', 'activo'),
  ('Cliente6', 'Dirección6', '666-666-6666', 'cliente6@example.com', 'contraseña6', 'inactivo'),
  ('Cliente7', 'Dirección7', '777-777-7777', 'cliente7@example.com', 'contraseña7', 'activo'),
  ('Cliente8', 'Dirección8', '888-888-8888', 'cliente8@example.com', 'contraseña8', 'inactivo'),
  ('Cliente9', 'Dirección9', '999-999-9999', 'cliente9@example.com', 'contraseña9', 'activo'),
  ('Cliente10', 'Dirección10', '101-101-1010', 'cliente10@example.com', 'contraseña10', 'inactivo');


-- sentencia SQL para insertar 10 filas a la tabla ventas
INSERT INTO ventas (fechaVenta, subtotal, impuestos, descuentos, total, createdAt, updatedAt, ClienteId)
VALUES
  (NOW(), 50000, 9000, 2000, 57000, NOW(), NOW(), 1),
  (NOW(), 75000, 13500, 3000, 94500, NOW(), NOW(), 2),
  (NOW(), 60000, 10800, 2400, 73200, NOW(), NOW(), 3),
  (NOW(), 42000, 7560, 1680, 50480, NOW(), NOW(), 4),
  (NOW(), 69000, 12420, 2760, 83760, NOW(), NOW(), 5),
  (NOW(), 55000, 9900, 2200, 67100, NOW(), NOW(), 6),
  (NOW(), 48000, 8640, 1920, 57520, NOW(), NOW(), 7),
  (NOW(), 80000, 14400, 3200, 97600, NOW(), NOW(), 8),
  (NOW(), 62000, 11160, 2480, 75560, NOW(), NOW(), 9),
  (NOW(), 71000, 12780, 2840, 86640, NOW(), NOW(), 10);

  -- sentencia SQL para insertar 7 filas a la tabla tipo_productos
INSERT INTO tipo_productos (nombre)
VALUES
  ('Tipo de Producto 1'),
  ('Tipo de Producto 2'),
  ('Tipo de Producto 3'),
  ('Tipo de Producto 4'),
  ('Tipo de Producto 5'),
  ('Tipo de Producto 6');

  -- sentencia SQL para insertar 15 productos a la tabla productos
INSERT INTO productos (nombre, marca, precio, stockMin, cantidad, createdAt, updatedAt, TipoProductoId)
VALUES
  ('Producto 1', 'Marca A', 50000, 10, 100, NOW(), NOW(), 1),
  ('Producto 2', 'Marca B', 75000, 15, 150, NOW(), NOW(), 2),
  ('Producto 3', 'Marca C', 60000, 12, 120, NOW(), NOW(), 3),
  ('Producto 4', 'Marca D', 42000, 8, 80, NOW(), NOW(), 4),
  ('Producto 5', 'Marca E', 69000, 14, 140, NOW(), NOW(), 5),
  ('Producto 6', 'Marca F', 55000, 11, 110, NOW(), NOW(), 1),
  ('Producto 7', 'Marca G', 48000, 9, 90, NOW(), NOW(), 2),
  ('Producto 8', 'Marca H', 80000, 16, 160, NOW(), NOW(), 3),
  ('Producto 9', 'Marca I', 62000, 12, 120, NOW(), NOW(), 4),
  ('Producto 10', 'Marca J', 71000, 14, 140, NOW(), NOW(), 5),
  ('Producto 11', 'Marca K', 53000, 10, 100, NOW(), NOW(), 1),
  ('Producto 12', 'Marca L', 72000, 13, 130, NOW(), NOW(), 2),
  ('Producto 13', 'Marca M', 61000, 12, 120, NOW(), NOW(), 3),
  ('Producto 14', 'Marca N', 44000, 8, 80, NOW(), NOW(), 4),
  ('Producto 15', 'Marca O', 68000, 14, 140, NOW(), NOW(), 5);

  -- sentencia SQL para insertar 8 productosVentas a la tabla productos_ventas
INSERT INTO productos_ventas (cantidad, precioUnitario, createdAt, updatedAt, ProductoId, VentumId)
VALUES
  (5, 35000, NOW(), NOW(), 1, 1),
  (3, 48000, NOW(), NOW(), 2, 1),
  (2, 60000, NOW(), NOW(), 3, 2),
  (4, 42000, NOW(), NOW(), 4, 2),
  (6, 69000, NOW(), NOW(), 5, 3),
  (1, 55000, NOW(), NOW(), 6, 3),
  (3, 80000, NOW(), NOW(), 7, 4),
  (2, 62000, NOW(), NOW(), 8, 4);



