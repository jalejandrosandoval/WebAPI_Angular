<p>
    <h1 align="center"> WebApi Angular </h1>
</p>

Proyecto de un WebApi de tipo Rest, el cual es consumido de un proyecto secundario desarrollado en AngularJS 9. Se subdivide en Front y en Backend; este ultimo codificado en MVc5, APIREST y .NETCORE utilizando EntityFrameworCore.

<hr>

## Proyecto API_REST

Requisitos Previos


### Bussiness_Logic

Este proyecto es de tipo "Biblioteca de Clases", se realiza, con el fin de centralizar a groso modo, los disitintos modelos y/o metodos que son sensibles en el lado del Backend, con el fin de garantizar una capa adicional de seguridad en el codigo.

Se compone de la siguiente forma:

#### Estructura de Archivos

```bash
└─Models
    └─Employee
       ├─Employee.cs
       └─Employee_Type.cs
```

## Proyecto Angular

Sistema de Archivos:
