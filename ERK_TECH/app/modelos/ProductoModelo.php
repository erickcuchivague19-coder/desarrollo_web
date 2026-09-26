<?php

declare(strict_types=1);

require_once __DIR__ . '/../config/conexion.php';

final class ProductoModelo
{
    public static function buscar(string $texto = '', int $limite = 20): array
    {
        $pdo = Conexion::obtener();

        $sql = "
            SELECT
                p.id,
                p.nombre,
                p.precio,
                p.stock,
                c.nombre AS categoria
            FROM productos p
            INNER JOIN categorias c ON c.id = p.categoria_id
            WHERE p.nombre LIKE :texto
            ORDER BY p.nombre
            LIMIT :limite
        ";

        $st = $pdo->prepare($sql);

        $st->bindValue(
            ':texto',
            '%' . $texto . '%',
            PDO::PARAM_STR
        );

        $st->bindValue(
            ':limite',
            $limite,
            PDO::PARAM_INT
        );

        $st->execute();

        return $st->fetchAll();
    }
}