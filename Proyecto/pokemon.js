function loadAllPokemon() {
    const pokemonList = document.getElementById("pokemon-list")
    for (let i = 0; i < 30; i++) { 
        const randomPokemonId = Math.floor(Math.random() * 898) + 1
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
            .then(response => response.json())
            .then(data => {
                const pokemonCard = document.createElement("div")
                pokemonCard.classList.add("pokemon-card")
                pokemonCard.innerHTML = `
                    <h3>${data.name.toUpperCase()}</h3>
                    <img src="${data.sprites.front_default}" alt="${data.name}">
                `
                pokemonCard.addEventListener("click", () => showPokemonInfo(data))
                pokemonList.appendChild(pokemonCard)
            })
            .catch(error => console.error("Error al cargar Pokémon:", error))
    }
}

loadAllPokemon()

function showPokemonInfo(pokemonData) {
    const pokemonInfo = document.getElementById("pokemon-info")
    pokemonInfo.innerHTML = `
        <h2>${pokemonData.name.toUpperCase()}</h2>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <p>Altura: ${pokemonData.height / 10} m</p>
        <p>Peso: ${pokemonData.weight / 10} kg</p>
        <p>Tipo(s): ${pokemonData.types.map(type => type.type.name).join(", ")}</p>
    `
}

function searchOnEnter(event) {
    if (event.key === "Enter") {
        searchPokemon()
    }
}

function searchPokemon() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
    const pokemonInfo = document.getElementById("pokemon-info")
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            pokemonInfo.innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Altura: ${data.height / 10} m</p>
                <p>Peso: ${data.weight / 10} kg</p>
                <p>Tipo(s): ${data.types.map(type => type.type.name).join(", ")}</p>
            `
        })
        .catch(error => {
            console.error("Error al buscar el Pokémon:", error)
            pokemonInfo.innerHTML = "<p>Pokémon no encontrado</p>"
        })
}