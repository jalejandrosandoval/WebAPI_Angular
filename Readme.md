<p>
    <h1 align="center"> WebApi Angular </h1>
</p>

Proyecto de un WebApi de tipo Rest, el cual es consumido de un proyecto secundario desarrollado en AngularJS 9. Se subdivide en Front y en Backend; este ultimo codificado en MVc5, APIREST y .NETCORE utilizando EntityFrameworCore.

<hr>

## Requisitos Previos Para NetCore

Instalar:
* VScode o Visual Studio en la versión de preferencia.
* NetCore [SDK](https://dotnet.microsoft.com/download/dotnet-core)
* Instalar paquete de nuggets en cada proyecto por separado. 
* Microsoft.AspNetCore.Authentication.JwtBearer --version:???

## Requisitos Previos Para Angular

### Instalar NodeJs

Descargar el instalador desde: https://nodejs.org/es/
Ejecutar el instalador.

### Instalar Angular
utilizando el mismo **nvm**
```bash
npm install -g @angular/cli
```
verificar
```bash
ng --version
```
<hr>

Este proyecto de desarrollo se subdivide en dos subdesarrollos:  
## Proyecto API_REST


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
#### Requisitos Packages

Se debe instalar el siguiente paquete

* System.ComponentModel.DataAnnotations --version: 4.7.0

 <!-- * Microsoft.AspNetCore.Identity.EntityFrameworkCore --version:???
  * Microsoft.AspNetCore.Mvc.NewtonsoftJson --version:???
    * **VisualStudio PM>** `Install-Package Microsoft.AspNetCore.Mvc.NewtonsoftJson --Version 3.1.2`
    * **vscode CLI** `dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson --Version 3.1.2`
  * Microsoft.EntityFrameworkCore" --version:???
  * Microsoft.EntityFrameworkCore.InMemory --version:???
    * **VisualStudio PM>** `Install-Package Microsoft.EntityFrameworkCore.InMemory --Version 3.1`
    * **vscode CLI** 
    `dotnet add package Microsoft.EntityFrameworkCore.InMemory -Version 3.1`
  * Microsoft.EntityFrameworkCore.Sqlite --version:???
  * Microsoft.EntityFrameworkCore.SqlServer --version:???
  * Microsoft.EntityFrameworkCore.Tools --version:??? -->

## Proyecto Angular

Sistema de Archivos:

```bash
└─ Front-Angular
    ├─e2e
    ├─node_modules 
    └─src 
      ├─app
      ├─assets
      └─enviroments
```