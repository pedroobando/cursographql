# Academia Online

Api GraphQL de Academia Online

## Origen de Datos

Archivos de JSON, courses.json que contendra los cursos y
students, que contendra los estudiantes...

## Deployment

- [Api Hola Mundo](https://graphql-hola-mundo.vercel.app/)
- [Api Academia Online](https://graphql-academia-online-seven.vercel.app/)
- [Api Ergast - F1](https://graphql-api-ergast-f1.vercel.app/)

## Matar los procesos activos

```
# Primero, querrá saber qué proceso está utilizando el puerto 3000
$ sudo lsof -i :3000

# Esto enumerará todos los PID que escuchan en este puerto, una vez que tenga el PID puede terminarlo:
$ kill -9 {PID}
```
