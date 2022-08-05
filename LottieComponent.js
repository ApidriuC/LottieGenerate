function LottieComponent(_json) {
    //Validación entrada Objeto o Json
    if (typeof _json == 'object') {
        _json = _json;
    } else if (typeof _json == 'string') {
        _json = JSON.parse(_json);
    }
    //Asignación de varibales Div
    var newDivId = _json.Divid;
    var newDivClassName = _json.Divclass;
    var hostDiv = _json.HostDiv;
    var newDivWidth = _json.DivWidth;
    var newDivHeight = _json.DivHeight;
    //Creación del Contenedor Lottie
    var newDiv = document.createElement('div');
    newDiv.id = newDivId;
    newDiv.className = newDivClassName;
    //Agregación del Div al HostDiv
    $(hostDiv).append(newDiv);
    //Atributos css
    $('#NewDivId').css({
        "width": newDivWidth,
        "height": newDivHeight,
    });

    //Asignación de varibales Lottie
    var lottiePlayerId = _json.lottieId;
    var lottiePlayerIdClassName = _json.lottieClass;
    var lottiePlayerSrc = _json.lottieSrc;
    var lottiePlayerSpeed = _json.lottieSpeed;
    var lottiePlayerLoop = _json.lottieLoop;
    var lottiePlayerAutoPlay = _json.lottieAutoPlay;
    //var lottiePlayerAutoplay = _json.lottieAutoplay;
    var lottiePlayerControls = _json.lottieControls;
    //Creación del Lottie
    var lottiePlayer = document.createElement('lottie-player');
    lottiePlayer.id = lottiePlayerId;
    lottiePlayer.className = lottiePlayerIdClassName;
    //Valor por defecto para animación de entrada
    //lottiePlayer.style.display = 'none';
    //Agregación del Lottie al HostDiv
    $('#NewDivId').append(lottiePlayer);
    //Animación de entrada
    //$('#NewLottie-Player').toggle("slow");
    //Asignación de atributos
    $('#NewLottie-Player').attr({
        "src": lottiePlayerSrc, //Fuente tipo JSON
        "speed": lottiePlayerSpeed, //Velocidad de la animación
        "loop": lottiePlayerLoop, //Si/No Bucle de la animación
        "autoplay": lottiePlayerAutoPlay, //Si/No Reproduce al iniciar la función
        "controls": lottiePlayerControls, //Si/No controles de la animación
        "background": "transparent" //Color de fondo de la animación
    });
    //Atributos css (Default)
    $('#NewLottie-Player').css({
        "width": "auto",
        "height": "auto",
    });

}


