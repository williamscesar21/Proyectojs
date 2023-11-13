const Roca = document.getElementById('Roca')
        const Papel = document.getElementById('Papel')
        const Tijera = document.getElementById('Tijera')
        const resultado = document.getElementById('resultado')
        const historialList = document.getElementById('historial')
        const historial = []

        let opcionJugador
        let ataqueCom

        Roca.addEventListener('click', function(){
        opcionJugador = "Roca"
        opcionComp()
        })

        Papel.addEventListener('click', function(){
        opcionJugador = "Papel"
        opcionComp()
        })

        Tijera.addEventListener('click', function(){
        opcionJugador = "Tijera"
        opcionComp()
        })

        function opcionComp(){
            var Aleatorio = Aleatorio2()
            if (Aleatorio == 0){
                ataqueCom = 'Roca'
        }else if (Aleatorio == 1) {
            ataqueCom ='Papel'
        }else if(Aleatorio == 2){
            ataqueCom='Tijera'
        }
        saberquiengana()
        guardarHistorial(opcionJugador, ataqueCom)
        }

        function saberquiengana(){
            if(opcionJugador === ataqueCom){
                resultado.innerHTML= `Elegiste ${opcionJugador} La Computadora eligio ${ataqueCom} Empate`
            }else if(opcionJugador == "Roca" && ataqueCom == "Tijera"){
                    resultado.innerHTML = `Elegiste ${opcionJugador} La Computadora eligio ${ataqueCom} Ganaste!`
            }else if(opcionJugador == "Papel" && ataqueCom == "Roca"){
                    resultado.innerHTML = `Elegiste ${opcionJugador} La Computadora eligio ${ataqueCom} Ganaste!`
            }else if(opcionJugador == "Tijera" && ataqueCom == "Papel"){
                    resultado.innerHTML = `Elegiste ${opcionJugador} La Computadora eligio ${ataqueCom} Ganaste!`
            }else{
                    resultado.innerHTML = `Elegiste ${opcionJugador} La Computadora eligio ${ataqueCom} Perdiste`
            }
        }

        function Aleatorio2(){
            let n = Math.floor(Math.random() * 3)
            return n
        }

        function guardarHistorial(jugador, computadora) {
            let resultadoTexto = ""
            if(jugador === computadora){
                resultadoTexto = `Empate`
            }else if(jugador == "Roca" && computadora == "Tijera"){
                resultadoTexto = `Ganaste!`
            }else if(jugador == "Papel" && computadora == "Roca"){
                resultadoTexto = `Ganaste!`
            }else if(jugador == "Tijera" && computadora == "Papel"){
                resultadoTexto = `Ganaste!`
            }else{
                resultadoTexto = `Perdiste`
            }
            historial.unshift({
                jugador: jugador,
                computadora: computadora,
                resultado: resultadoTexto
            })

            if (historial.length > 5) {
                historial.pop()
            }

            actualizarHistorial()
        }

        function actualizarHistorial() {
            historialList.innerHTML = ""
            historial.forEach(entry => {
                const listItem = document.createElement("li")
                listItem.textContent = `Tu: ${entry.jugador} vs Computadora: ${entry.computadora} (${entry.resultado})`
                historialList.appendChild(listItem)
            })
        }

        