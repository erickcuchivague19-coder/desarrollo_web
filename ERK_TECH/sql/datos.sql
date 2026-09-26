USE erk_tech;

-- =========================
-- CATEGORÍAS
-- =========================

INSERT INTO categorias (nombre) VALUES
('Tecnología'),
('Accesorios'),
('Oficina'),
('Redes'),
('Almacenamiento');

-- =========================
-- USUARIOS
-- =========================

INSERT INTO usuarios (nombre, correo, clave) VALUES
('Administrador ERK', 'admin@erktech.com', 'clave_demo_1'),
('Valeria Daza', 'valeria@erktech.com', 'clave_demo_2'),
('Carlos Pérez', 'carlos@erktech.com', 'clave_demo_3');

-- =========================
-- PRODUCTOS - 20
-- =========================

INSERT INTO productos (nombre, categoria_id, precio, stock) VALUES
('Portátil Lenovo IdeaPad', 1, 2450000, 8),
('Portátil HP 15', 1, 2190000, 6),
('Mouse inalámbrico Logitech', 2, 85000, 15),
('Teclado mecánico Redragon', 2, 180000, 4),
('Monitor Samsung 24 pulgadas', 1, 780000, 7),
('Monitor LG 27 pulgadas', 1, 1050000, 3),
('Memoria USB 64GB', 5, 35000, 20),
('Disco SSD 480GB', 5, 230000, 9),
('Disco SSD 1TB', 5, 390000, 5),
('Disco duro externo 2TB', 5, 320000, 4),
('Router TP-Link', 4, 160000, 10),
('Switch de 8 puertos', 4, 145000, 6),
('Cable HDMI 2 metros', 4, 28000, 25),
('Webcam HD', 1, 120000, 8),
('Audífonos Logitech', 2, 95000, 12),
('Base refrigerante para portátil', 2, 75000, 7),
('Impresora multifuncional', 3, 650000, 3),
('Silla ergonómica', 3, 890000, 2),
('Escritorio de oficina', 3, 720000, 5),
('Regleta eléctrica', 3, 55000, 14);

-- =========================
-- CLIENTES - 10
-- =========================

INSERT INTO clientes (nombre, correo, telefono) VALUES
('Laura Gómez', 'laura@gmail.com', '3001112233'),
('Andrés Rodríguez', 'andres@gmail.com', '3012223344'),
('Camila Torres', 'camila@gmail.com', '3023334455'),
('Daniel Martínez', 'daniel@gmail.com', '3034445566'),
('Sofía Hernández', 'sofia@gmail.com', '3045556677'),
('Juan Pérez', 'juan@gmail.com', '3056667788'),
('Mariana López', 'mariana@gmail.com', '3067778899'),
('Sebastián Vargas', 'sebastian@gmail.com', '3078889900'),
('Natalia Castro', 'natalia@gmail.com', '3089990011'),
('Miguel Sánchez', 'miguel@gmail.com', '3090001122');

-- =========================
-- PEDIDOS - 15
-- =========================

INSERT INTO pedidos (cliente_id, fecha, estado) VALUES
(1, '2026-09-01 09:30:00', 'Entregado'),
(2, '2026-09-02 10:15:00', 'Entregado'),
(3, '2026-09-03 11:20:00', 'Pendiente'),
(4, '2026-09-04 14:00:00', 'Entregado'),
(5, '2026-09-05 15:30:00', 'Enviado'),
(6, '2026-09-06 09:45:00', 'Pendiente'),
(7, '2026-09-07 12:10:00', 'Entregado'),
(8, '2026-09-08 13:25:00', 'Enviado'),
(9, '2026-09-09 16:40:00', 'Pendiente'),
(10, '2026-09-10 17:15:00', 'Entregado'),
(1, '2026-09-11 08:50:00', 'Entregado'),
(3, '2026-09-12 10:35:00', 'Pendiente'),
(5, '2026-09-13 14:20:00', 'Enviado'),
(7, '2026-09-14 15:45:00', 'Entregado'),
(9, '2026-09-15 11:55:00', 'Pendiente');

-- =========================
-- DETALLE DE PEDIDOS
-- =========================

INSERT INTO detalle (pedido_id, producto_id, cantidad, precio_unitario) VALUES
(1, 1, 1, 2450000),
(1, 3, 2, 85000),
(2, 5, 1, 780000),
(2, 7, 2, 35000),
(3, 4, 1, 180000),
(3, 8, 1, 230000),
(4, 11, 1, 160000),
(4, 13, 3, 28000),
(5, 6, 1, 1050000),
(5, 15, 2, 95000),
(6, 9, 1, 390000),
(7, 10, 1, 320000),
(8, 12, 1, 145000),
(8, 14, 1, 120000),
(9, 16, 2, 75000),
(10, 17, 1, 650000),
(11, 18, 1, 890000),
(12, 19, 1, 720000),
(13, 20, 2, 55000),
(14, 2, 1, 2190000),
(15, 3, 1, 85000);