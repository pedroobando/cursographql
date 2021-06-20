# rest-to-api-graphql

Transformando un apirest a API GraphQL

El api es de Ergast - F1

## Origen de Datos

ApiREST - [Ergast Developer API](http://ergast.com/mrd/)
Demasiado interesante es una api experimentas que provee datos historicos de Formuna Uno.

### Datos de :

```
Temporadas
Carreras
Conductores
Circuitos
Estatus de Carreras
Lapsos de Tiempos
Etc...
```

Los son mostrados en formato JSON que es formato nativo de APIREST para ser transformados a API GraphQL.

## Deployment

- [Api Ergast - F1](https://graphql-api-ergast-f1.vercel.app/)

## Matar los procesos activos

```
# Primero, querrá saber qué proceso está utilizando el puerto 3000
$ sudo lsof -i :3000

# Esto enumerará todos los PID que escuchan en este puerto, una vez que tenga el PID puede terminarlo:
$ kill -9 {PID}
```
