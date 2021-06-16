# Academia Online

Api GraphQL de Academia Online

## Origen de Datos

Archivos de JSON, courses.json que contendra los cursos y
students, que contendra los estudiantes...

## Matar los procesos activos

```
# Primero, querrá saber qué proceso está utilizando el puerto 3000
$ sudo lsof -i :3000

# Esto enumerará todos los PID que escuchan en este puerto, una vez que tenga el PID puede terminarlo:
$ kill -9 {PID}
```
