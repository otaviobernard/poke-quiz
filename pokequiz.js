let allpoke = [];

//renderizar pokemons
function fetchPokemon(first, last) {
    allpoke = []
    let cont = first;
    let accumulator = "";
    while (cont <= last) {
        let getPokemonUrl = 'https://pokeapi.co/api/v2/pokemon/' + cont.toString()

        fetch(getPokemonUrl)
            .then(response => response.json())
            .then(function(pokeData) {
                let types = pokeData.types.map(typeInfo => typeInfo.type.name)
                accumulator += `
                <li >
        <img class="card-image" id="${pokeData.name}" src="${pokeData.sprites.front_default}"</img>
        </li>
      `
                const ul = document.querySelector('[data-js="pokedex"]')
                ul.innerHTML = accumulator
                allpoke.push(pokeData.name)
            })
        cont = cont + 1
    }
}

console.log(allpoke)

function pokeFilter() {
    var filter = document.getElementById("combo").value;
    if (filter === "Kanto") {
        fetchPokemon(1, 151)
    } else if (filter === "Johto") {
        fetchPokemon(152, 251)
    } else if (filter === "Hoenn") {
        fetchPokemon(252, 386)
    } else if (filter === "Sinnoh") {
        fetchPokemon(387, 493)
    } else if (filter === "Unova") {
        fetchPokemon(494, 649)
    } else if (filter === "Kalos") {
        fetchPokemon(650, 721)
    } else if (filter === "Alola") {
        fetchPokemon(722, 809)
    } else {
        fetchPokemon(810, 905)
    }
}

function unrenderPoke() {
    let name = document.getElementById("searchinput").value;
    let check = false;
    for (let i = 0; i < allpoke.length; i++) {
        if (name == allpoke[i]) {
            check = true;
        }
    }
    if (check) {
        const poke = document.getElementById(name);
        poke.remove();
    } else {
        window.alert("sometext");
    }
}