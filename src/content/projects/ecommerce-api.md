---
title: "E-commerce API"
description: "API RESTful para una tienda en línea con autenticación, gestión de productos, carrito de compras y procesamiento de pagos."
image: "/projects/ecommerce-api.jpg"
technologies: ["Django", "Django REST Framework", "PostgreSQL", "JWT"]
links:
  demo: "https://api.ecommerce.example.com/docs"
  repo: "https://github.com/jdgonzalez03/ecommerce-api"
featured: false
---

# E-commerce API

Una API robusta y escalable para tiendas en línea construida con Django.

## Endpoints Principales

- **Autenticación**: JWT con refresh tokens
- **Productos**: CRUD completo con filtros y paginación
- **Carrito**: Gestión de items del carrito
- **Órdenes**: Proceso completo de compra
- **Pagos**: Integración con Stripe

## Seguridad

La API implementa todas las mejores prácticas de seguridad:
- Autenticación JWT
- Rate limiting
- Validación de datos
- CORS configurado correctamente
- Protección contra CSRF
