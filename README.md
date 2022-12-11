# AGENCIA DE VIAJES BDD

## CONTENIDO

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## DESCRIPCIÓN <a name = "about"></a>

Api: Javascript
Librerias/Frameworks: Sequelize, express-generator
BDD dialect: MySQL

## DISEÑO DE BDD <a name = "getting_started"></a>

![alt text](/my-server/imagenes_README/agencia_viajes_reservas_diagram_BDD.png)

### REQUISITOS

-Node.js
-Postman para realizar consultas de desarrollador

### Instalación

Instalar todas la dependencias:

```
npm install
```

Iniciar el servidor para desarrollo:

```
npm run dev
```

## Endpoints <a name = "usage"></a>

Url Para produccion: https://project-agenciaviajes-production.up.railway.app/

Url Para desarrollo en Port 3000: localhost:3000

Url + /clientes : Mostrara toda la información
Url + /clientes/+ introducir numero id de un cliente: Mostrara toda la información del cliente seleccionado.
Url + /clientes/nombre/ + introducir nombre de un cliente: Mostrara toda la información del cliente seleccionado.
Url + /clientes/apellido/ + introducir apellido de un cliente: Mostrara toda la información del cliente seleccionado.
Url + /clientes/email/ + introducir email de un cliente: Mostrara toda la información del cliente seleccionado.
Url + /clientes/dni/ + introducir dni de un cliente: Mostrara toda la información del cliente seleccionado.
Url + /clientes/telefono/ + introducir el telefono de un cliente: Mostrara toda la información del cliente seleccionado.

Url + /hoteles: Mostrara toda la información.
Url + /hoteles/ + introducir numero id de un hotel: Mostrara toda la información del hotel seleccionado.
Url + /hoteles/nombre_hotel/ + introducir nombre de hotel: Mostrara toda la información del hotel seleccionado.

Url + /reservas: Mostrara toda la información.
Url + /reservas/ + introducir numero id de una reserva.
Url + /reservas/fecha_entrada/ + introducir la fecha de entrada al hotel
Url + /reservas/fecha_salida/ + introducir la fecha de salida del hotel
