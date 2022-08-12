
<h1 align="center">Componente Lottie</h1>



<p align="justify">Se realiza la creación de un componente realizado en JavaScript que genera un contenedor en tiempo dinámico con propiedades genericas donde dentro de este, se generará un "Lottie - Player" que realizará una animación recibia por parametros en formato tipo JSON.</p>

<a align="left" href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-GPL-yellow.svg" />
 </a>
<hr>
 <img align="center" alt="Imagen Ejemplo" src="https://github.com/ApidriuC/LottieGenerate/blob/main/Prueba.PNG" />
 
 # Documentación

> Implementación: ` Implementación llamado a la función `

Por defecto, los valores no asignados serán definidos por la clase del componente. El componente deberá recibir los siguientes parametros con el mismo nombre establecido. Dichos parámetros se podrán enviar en formato JSON o como un Objecto, veamos:

> Envio por JSON: ` Parametros enviados por formato JSON `

```md
    var Componente = new LottieClass({
        Divid: 'NewDivId',
        Divclass: 'Content_NewDiv',
        HostDiv: '.panelLeft',
        lottieId: 'NewLottie-Player',
        lottieClass: 'lottie-player',
        lottieSrc: 'GeneralesJS/librototal.json',
        lottieSpeed: '1',
        lottieLoop: false,
        lottieControls: false,
    });

    Componente.generarLottie();
```
<hr>

Estos son los valores por defecto del componente Lottie, si no se asigna el parametro tomará los siguientes valores. Los parametros requeridos serán el "SRC" y el "HostDiv" ya que se necesita una animación para representarla y el lugar donde se va a alojar.

> Valores Default: ` Valores Obligatorias "SRC" y "HOSTDIV" `

```md
    this.Divid = _json.Divid?.toString() || 'newDivId';
    this.Divclass = _json.Divclass?.toString() || 'content-NewDiv';
    this.HostDiv = _json.HostDiv;
    this.lottieId = _json.lottieId?.toString() || 'lottie-player';
    this.lottieClass = _json.lottieClass?.toString() || 'newLottie-Player';
    this.lottieSrc = _json.lottieSrc;
    this.lottieSpeed = _json.lottieSpeed?.toString() || '1';
    this.lottieLoop = _json.lottieLoop?.valueOf() || false;
    this.lottieControls = _json.lottieControls?.valueOf() || false; 
```

<hr>

## Atributos

Atributos para su asginación, por defecto quedarán nulos, en dado caso de no enviarse el parametro solicitado.
 
Divid: Este parámetro indica el ID de la etiqueta html del contenedor
 
 > Data Type: ` Recibe valores string `
 
```md
 Divid: ''
```

<hr>

Divclass: Este parámetro indica la clase de la etiqueta html del contenedor
 
 > Data Type: ` Recibe valores string `
 
```md
 Divclass: ''
```

<hr>

HostDiv: Este parámetro indica donde se alojará el contenedor en el html. Si el parametro es un ID de otra etiqueta se deberá especificar con (#), si es una clase (.).
 
 > Data Type: ` Recibe valores string `
 
```md
 HostDiv: ''
```

<hr>

lottieId: Este parámetro indica el ID de la etiqueta html del Lottie-Player
 
 > Data Type: ` Recibe valores string `
 
```md
 lottieId: ''
```

<hr>

lottieClass: Este parámetro indica la clase de la etiqueta html del Lottie-Player
 
 > Data Type: ` Recibe valores string `
 
```md
 lottieClass: ''
```

<hr>

lottieSrc: Este parámetro indica la ubicación del JSON de la animación Lottie-Player a reproducir
 
 > Data Type: ` Recibe valores string `
 
```md
 lottieSrc: ''
```

<hr>

lottieSpeed: Este parámetro indica la velocidad de la animación Lottie-Player a reproducir

> Data Type: ` Recibe valores string `

```md
 lottieSpeed: ''
```

<hr>


lottieLoop: Este parámetro indica si se reproducirá en bucle la animación Lottie-Player 

> Data Type: ` Recibe valores booleanos `
 
```md
 lottieLoop: 
```

<hr>

lottieControls: Este parámetro indica mostrará los controles por defecto del Lottie-Player. 
 
 > Data Type: ` Recibe valores booleanos `
 
```md
 lottieControls: 
```

<hr>

# Licenciamiento

La licencia de Lottie es necesaria incluirla en el proyecto, de lo contrario no se mostrará nada. Para obtener los JSON respectivos a sus animaciones se deberán extraer de Lottie o bien, subir nuestras animaciones a la plataforma y posteriormente generar su JSON.


