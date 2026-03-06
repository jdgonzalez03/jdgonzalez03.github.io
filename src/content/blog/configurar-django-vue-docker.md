---
title: "Cómo configurar Django con Vue.js y Docker"
description: "Una guía paso a paso para integrar Django como API backend con Vue.js frontend usando Docker para el despliegue."
date: 2025-02-10
image: "/blog/django-vue-docker.jpg"
tags: ["tutorial", "django", "vue", "docker", "backend"]
draft: false
---

# Cómo configurar Django con Vue.js y Docker

En este tutorial te mostraré cómo crear una aplicación full stack usando Django REST Framework para el backend y Vue.js para el frontend, todo containerizado con Docker.

## Estructura del Proyecto

```
my-project/
├── backend/         # Django API
├── frontend/        # Vue.js app
├── docker-compose.yml
└── README.md
```

## Paso 1: Configurar el Backend con Django

Primero, creemos el proyecto Django:

```bash
django-admin startproject backend
cd backend
python manage.py startapp api
```

## Paso 2: Configurar Vue.js

Usaremos Vite para crear el proyecto frontend:

```bash
npm create vite@latest frontend -- --template vue
cd frontend
npm install
```

## Paso 3: Dockerizar todo

Creamos el `Dockerfile` para cada servicio y el `docker-compose.yml` para orquestarlos.

## Conclusión

¡Listo! Tienes una aplicación full stack funcionando con Docker. En futuros posts profundizaremos en cada parte del proceso.
