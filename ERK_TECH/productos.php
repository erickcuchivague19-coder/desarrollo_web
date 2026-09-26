<?php

declare(strict_types=1);

require_once __DIR__ . '/app/modelos/ProductoModelo.php';

$texto = trim($_GET['buscar'] ?? '');

try {
    $productos = ProductoModelo::buscar($texto);
    $error = null;
} catch (PDOException $e) {
    $productos = [];
    $error = 'No fue posible cargar los productos.';
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos - ERK TECH</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>

<body>

    <main class="contenido">
        <h1>Productos</h1>

        <form method="GET" action="productos.php">
            <label for="buscar">Buscar producto</label>

            <input
                type="search"
                id="buscar"
                name="buscar"
                value="<?= htmlspecialchars($texto, ENT_QUOTES, 'UTF-8') ?>"
                placeholder="Escribe el nombre del producto"
            >

            <button type="submit">Buscar</button>
        </form>

        <?php if ($error !== null): ?>

            <p><?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?></p>

        <?php else: ?>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>

                <tbody>

                    <?php foreach ($productos as $producto): ?>

                        <tr>
                            <td><?= (int) $producto['id'] ?></td>

                            <td>
                                <?= htmlspecialchars(
                                    $producto['nombre'],
                                    ENT_QUOTES,
                                    'UTF-8'
                                ) ?>
                            </td>

                            <td>
                                <?= htmlspecialchars(
                                    $producto['categoria'],
                                    ENT_QUOTES,
                                    'UTF-8'
                                ) ?>
                            </td>

                            <td>
                                $<?= number_format(
                                    (float) $producto['precio'],
                                    0,
                                    ',',
                                    '.'
                                ) ?>
                            </td>

                            <td><?= (int) $producto['stock'] ?></td>
                        </tr>

                    <?php endforeach; ?>

                </tbody>
            </table>

        <?php endif; ?>

    </main>

</body>
</html>