## Components y props

[Documentación](https://tailor-hub.notion.site/Componentes-y-Props-5ad80b4612634251a6fcfa14626a60a8)

En el código hemos utilizado una estructura de ficheros para una organización sencilla y clara.
Dentro de la misma hemos creado varios componentes:

- Image
  - El cual renderiza dos imágenes y una de ellas recibe una prop (`src`) para modificarla.

- Text
  - Un componente que renderiza dos paragraph. Este recibe dos props (`age`, `name`) para modificar el texto.

- Label
  - Muy similar a `Text`. Renderiza un label y un input. Recibe un única prop (`value`) para modificar el texto del label.

- Box
  - Un componente que como props recibe `children`. Recordar que un children es cualquier componente que se encuentre dentro de otro componente.

### RECORDATORIO

Para poder iniciar el proyecto es necesario instalar las dependencias con el comando `npm install` y luego ejecutar el comando `npm start` para iniciar el servidor.