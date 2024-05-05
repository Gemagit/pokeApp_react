# pokeApp_react


## Introduction
Os presento mi primer proyecto de React. Un ejercicio propuesto en clase en el que pongo en práctica mis conocimientos de React. PokeApp es una aplicación web que consta de un buscador de Pokemons y un formulario para crear tu propio Pokemon personalizado.

## Table of Contents
1. Mobile First
2. Tecnologies
3. Features
4. Design

## 1. Mobile First

Hay que destacar la importancia que tiene hoy en día **"mobile-first"**, con ello, se provee al usuario de una buena experiencia para todos los tamaños de pantalla, empezando por una experiencia de usuario que funcione bien para dispositivos pequeños, para posteriormente, basada en dicha experiencia, continuar desarrollando para enriquecer la experiencia de usuario conforme el tamaño de pantalla es mayor. En este caso os muestro lo bien que se adapta mi proyecto a un dispositivo móvil, a un ipad y a un ordenador.

### MOBILE

![mobile](https://github.com/Gemagit/pokeApp_react/assets/143506667/db8acdaa-1372-4853-8b38-369710abda3c)

### IPAD

![ipad](https://github.com/Gemagit/pokeApp_react/assets/143506667/97746989-a97e-451f-98bd-29bb4a5dc569)

### DESKTOP

![desktop](https://github.com/Gemagit/pokeApp_react/assets/143506667/700cb34d-efc7-44cb-906e-d8e081987caa)

## 2. Tecnologies

Las tecnologías usadas en esta app son las siguientes:

1. HTML
2. CSS
3. JAVASCRIPT
4. REACT
5. NETIFLY
6. GITHUB


## 3. Features

En primer lugar diseñé un esquema con cada una de las vistas y sus respectivos componentes. Lo más importante al empezar un proyecto en *React* de cero es tener claro quién será el Provider y quiénes serán los consumidores. Has de saber también qué vistas tendrás y número de enlaces que tendrá tu aplicación web.  

![pokemonappcomponentesok](https://github.com/Gemagit/pokeApp_react/assets/143506667/6f490523-809d-45e3-92ae-fc30f7bc2dfe)

También he tenido que instalarme algunas dependencias nuevas que han permitido que mi app sea más funcional. Os muestro aquí cuales son las dependencias necesarias si necesitáis utilizar mi proyecto. Tendríais que ejecutar en el comando de la terminal **npm install (dependencia que necesitéis)**.

![dependencias](https://github.com/Gemagit/pokeApp_react/assets/143506667/394529c7-3f9b-42c2-a081-854afd190793)

Os cuento un poco como funciona PokeApp. Cuando abres la app,encuentras dos enlaces. Uno, que es la *Home*, en la que vemos el buscador de Pokemon. 

![ipad](https://github.com/Gemagit/pokeApp_react/assets/143506667/763453a8-95ed-430e-8077-786b4dfcfb9d)

![encuentraPokemon](https://github.com/Gemagit/pokeApp_react/assets/143506667/74deb3b5-8479-4a1e-a1c4-107f0afb9b30)

Éste hace una llamada a la Api de Pokemon y pinta una Card con el nombre y la imagen del pokemon buscado. Puedes ir acumulando una lista de personajes buscados.


![listaPokemon](https://github.com/Gemagit/pokeApp_react/assets/143506667/984ae7cf-4f79-4024-bc80-1de4e1db865c)

En la parte derecha de cada tarjeta, hay un botón en el que pone: *Más info*.

![masInfo](https://github.com/Gemagit/pokeApp_react/assets/143506667/335cd329-3c17-4039-b7a0-dfdc9647d162)

Este te lleva a otra vista con las propiedades más relevantes de ese Pokemon.

![detalles](https://github.com/Gemagit/pokeApp_react/assets/143506667/fef0f2c9-bd11-47da-92ae-21c55234041b)

Ahora vamos a la parte más creativa de la web. Si pulsamos en *Create a Pokemon* nos llevará a un formulario en el que podrás crear un Pokemon personalizado. Podrás acumular tantos Pokemons nuevos como desees. 

![creaPokemon](https://github.com/Gemagit/pokeApp_react/assets/143506667/2c223dcb-6cce-41de-81ec-4af00393438c)

![pokemonCreados](https://github.com/Gemagit/pokeApp_react/assets/143506667/526b2107-153b-4d49-be51-a1d576a6e7d9)

Si intentas crear un Pokemon y no has rellenado alguno de los campos requeridos, te saldrá un mensaje de validación. 

![validacion](https://github.com/Gemagit/pokeApp_react/assets/143506667/ef92ddef-31a3-4c81-8946-db0b58185ef3)

Me gustaría seguir implementando funcionalidades a este proyecto, como el Firebase pero el tiempo que he tenido me ha permitido llegar hasta aquí, estoy muy satisfecha con el resultado y con todo lo aprendido.


## 4. Design

Se trata de un diseño web muy sencillo. He querido utilizar la tonalidad de la bola mítica de Pokemon (negro, blanco y rojo) y los colores del famoso Pikachu (amarillo, azul...) 

![PIKACHU](https://github.com/Gemagit/pokeApp_react/assets/143506667/1a220fc8-0317-4b76-8b65-443bddf4a6c0)

Otro detalle creativo es que he convertido el menú clásico hamburguesa, en una hamburBola. Cuando estás en la versión adaptada a móvil, al pulsar la bola, se despliega el menú.


![hamburBola](https://github.com/Gemagit/pokeApp_react/assets/143506667/834b316c-d2d0-4498-94c3-2f13cdc63eb6)

Mi aplicación web huye un poco de los artificios ya que quiero que el usuario disfrute de la experiencia de navegar en una web sencilla pero a la vez visualmente atractiva.


## [Pulsa aquí para visitar mi proyecto PokeApp]()
