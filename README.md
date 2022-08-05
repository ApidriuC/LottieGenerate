
<h1 align="center">Componente Lottie</h1>



<p align="justify">Se realiza la creación de un componente realizado en JavaScript que generé un contenedor con propiedades genericas Donde dentro de este, se generará un Lottie-Player que realizará una animación recibia por parametros en formato tipo Json.</p>

<a align="left" href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-GPL-yellow.svg" />
 </a>
<hr>
 <img align="center" alt="Imagen Ejemplo" src="https://github.com/ApidriuC/LottieGenerate/blob/main/Prueba.PNG" />
 
 # Documentación

> Implementación: ` Implementación llamado a la función `

Por defecto, los valores no asignados serán tomados como nulos. El componenete deberá recibir los siguientes parametros, con el mismo nombre establecido. Dichos parámetros se podrán enviar en formato JSON o como un Object, veamos:

> Envio por JSON: ` Envio de parametros por JSON `

```md
 var code = {
        Divid: 'NewDivId',
        Divclass: 'Content_NewDiv',
        HostDiv: '.panelLeft',
        DivWidth: '50%',
        DivHeight: '100%',
        lottieId: 'NewLottie-Player',
        lottieClass: 'lottie-player',
        lottieSrc: 'GeneralesJS/librototal.json',
        lottieSpeed: '1',
        lottieLoop: false,
        lottieControls: false,
        lottieAutoPlay: true
    }

    LottieComponent(JSON.stringify(code));
```

<hr>

> Envio por Object: ` Envio de parametros por JSON `

```md
 LottieComponent({
        Divid: 'NewDivId',
        Divclass: 'Content_NewDiv',
        HostDiv: '.panelLeft',
        DivWidth: '100%',
        DivHeight: '100%',
        lottieId: 'NewLottie-Player',
        lottieClass: 'lottie-player',
        lottieSrc: 'GeneralesJS/librototal.json',
        lottieSpeed: '1',
        lottieLoop: false,
        lottieControls: false,
        lottieAutoPlay: true
    });
```

<hr>

> Atributos:  ` Atributos para su asginación, por defecto quedaran nulos, en dado caso de no enviarse el parametro solicitado.  `
 
Divid: Este parametro indica el ID de la etiqueta html del contenedor
 
```md
 Divid: ''
```

<hr>

Divid: Este parametro indica el ID de la etiqueta html del contenedor
 
```md
 Divid: ''
```
