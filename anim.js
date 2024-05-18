// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "When the light is <br> running low", time: 2.1 },
  { text: "and the shadow <br> start to grow", time: 5.8 },
  { text: "and the places <br> that you know", time: 9 },
  { text: "seem like fantasy", time: 12 },
  { text: "", time: 15.5 },
  { text: "There's a light <br> inside your soul", time: 17.5 },
  { text: "that's still shining <br> in the cold", time: 21.5 },
  { text: "with the truth", time: 24.5 },
  { text: "the promise in our <br> hearts", time: 26.5 },
  { text: `"Don't forget"`, time: 34.5 },
  { text: "I'm with you <br> in the dark", time: 36.3 },
  { text: "Para ti <3", time: 40 },

];

// Animar las letras
function updateLyrics() {
  var time = (audio.currentTime);
  var currentLine = null;

  // Buscar la línea cuyo tiempo está más cerca del tiempo actual de reproducción
  for (var i = 0; i < lyricsData.length; i++) {
    if (lyricsData[i].time <= time && (!lyricsData[i + 1] || lyricsData[i + 1].time > time)) {
      currentLine = lyricsData[i];
      break;
    }
  }

  if (currentLine) {
    var fadeInDuration = 0;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.transition = `opacity ${fadeInDuration}s ease-in`;
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
    // Aplicar efecto especial a la palabra "hearts"
    if (currentLine.text.includes("hearts")) {
      // Si la línea actual contiene la palabra "hearts"
      var heartIndex = currentLine.text.indexOf("hearts");
      var newText = currentLine.text.substring(0, heartIndex) +
                    `<span class="highlight">${currentLine.text.substring(heartIndex, heartIndex + 6)}</span>` +
                    currentLine.text.substring(heartIndex + 6);
      lyrics.innerHTML = newText;
    } else {
      // Si no contiene la palabra "hearts", asegúrate de eliminar cualquier efecto anterior
      lyrics.innerHTML = currentLine.text.replace('<span class="highlight">', '').replace('</span>', '');
    }
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}


setInterval(updateLyrics, 200);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);