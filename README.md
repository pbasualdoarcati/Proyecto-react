# Comandos para trabajar en equipo en Github

1. git status (nos indica en que posicion estamos)
2. git pull (trae el repo actualizado)

# Para crear una rama y comitear
1. git checkout -b feature/*nombrederama* (crea una nueva rama) 
2. git status (checkea donde estamos parados)
3. hacemos nuestros cambios
4. git status (muestra los cambios)
Si tenemos muchos archivos cambiados lo recomendable es hacer un commit por archivo cambiado, haciendo referencia a cada uno de ellos de forma clara. 
5. git add *nombre de archivo*
5. git add . (*para añadir todos los archivos*)
6. git commit -m 'referencia de que cambio se hizo'
7. git push origin feature/*nombrederama* (*la misma que se creo al inicio*)

### El push genera un boton en el repositorio remoto en Github *Compare and Pull Request*, darle click y pedir REVIEW.

## OJO que en nuestro local seguimos en nuestra branch!

### **Una vez aprobado el pull request**
1. git status ( CORROBORAMOS ESTAR EN MAIN )  
#### Si no estamos en main  
2. ***git checkout main***
3. git pull 

# Y LISTO!! 
