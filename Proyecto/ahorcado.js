const palabras = ["javascript", "html", "css", "programacion", "computadora", "agua", "voleibol", "futbol", "robotica", "medicina", "ingenieria", "biomedicina", "casa", "conejo", "malo", "bueno", "perro"]
        let palabraSeleccionada
        let palabraMostrada
        let intentosRestantes
        const maxIntentos = 5
        let letrasIntentadas = []
        let errores = 0

        function iniciarJuego() {
            palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)]
            palabraMostrada = palabraSeleccionada.charAt(0) + "_".repeat(palabraSeleccionada.length - 2) + palabraSeleccionada.charAt(palabraSeleccionada.length - 1)
            intentosRestantes = maxIntentos
            letrasIntentadas = []
            errores = 0
            actualizarPantalla()
            mostrarMensaje("")
        }

        function adivinarLetra() {

            const letra = document.getElementById("inputLetra").value.toLowerCase()

            if (letrasIntentadas.includes(letra)) {
                mostrarMensaje("Ya has intentado con esta letra.")
                return
            }

            letrasIntentadas.push(letra)

            if (palabraSeleccionada.includes(letra)) {
                for (let i = 0; i < palabraSeleccionada.length; i++) {
                    if (palabraSeleccionada.charAt(i) === letra) {
                        palabraMostrada = palabraMostrada.substring(0, i) + letra + palabraMostrada.substring(i + 1)
                    }
                }
            } else {
                intentosRestantes--
                errores++
            }

            if (palabraMostrada === palabraSeleccionada) {
                mostrarMensaje("¡Has ganado! La palabra es: " + palabraSeleccionada)
                
            } else if (intentosRestantes === 0) {
                mostrarMensaje("¡Has perdido! La palabra era: " + palabraSeleccionada)
                
            } else {
                mostrarMensaje("")
            }
            
            actualizarPantalla()
        }

        function actualizarPantalla() {
            document.getElementById("palabraMostrada").textContent = palabraMostrada
            document.getElementById("longitudPalabra").textContent = palabraSeleccionada.length
            document.getElementById("intentosRestantes").textContent = intentosRestantes
            document.getElementById("inputLetra").value = ""

            document.getElementById("ahorcado").src = "el-ahorcado" + errores + ".png"
        }

        function mostrarMensaje(mensaje) {
            document.getElementById("mensaje").textContent = mensaje
        }

        iniciarJuego()