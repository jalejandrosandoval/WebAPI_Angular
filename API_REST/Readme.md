<p>
    <h2 align="center"> API REST </h2>
</p>

## Conection Database

Para conectarse y crear una base de datos desde 0 a través de migraciones se debe modificar el appsettings.json del proyecto WebApi, más exactamente la siguiente linea:

```bash
"ConnectionStrings": {
    "DevConection": "Data Source='DataBase_Name';Database=S.O.D_BD;Trusted_Connection=True"
  },
```

Allí se reemplaza 'DataBase_Name' por el nombre del servidor local o externo de la base de datos, en cuyo caso debe ser gestionado a través de el SGBD de SQLSERVER (SSMS).