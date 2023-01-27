const pokemon = async (namePokemon) => {
    try {
        let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
        let data = await result.json();
        let pName = document.getElementById(`name`);
        let baseExp = document.getElementById(`base-exp`);
        let ability = document.getElementById(`ability`);
        let img = data.sprites.back_default;
        pName.innerText = `Nome: ${data.name}`;
        baseExp.innerText = `Esperienza di base: ${data.base_experience}`
        ability.innerText = `Abilità : ${data.abilities.map(el => el.ability.name).join(` - `)}`
        error.innerText = ``
        imgH.setAttribute(`src`, img);
        imgH.classList.remove(`none`)
        return data;
    } catch {
        error.innerText = `Spiacenti ma il Pokemon ${namePokemon} non esiste`
        pName.innerText = ``;
        baseExp.innerText = ``;
        ability.innerText = ``;
        imgH.setAttribute(`src`, ``);
    }
}

let input = document.querySelector(`input`);
let button = document.querySelector(`button`);
let imgH = document.getElementById(`id`);
let error = document.getElementById(`error`)
let buttonInfo = document.getElementById(`info`)

if (imgH.src === ``) {
    imgH.style.display.none;
}

button.onclick = async () => {
        pokemon(input.value);
}

const moreInfo = async (name) => {
    let result = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
    let {color, egg_groups, shape} = await result.json();
    let colorP = document.getElementById(`colore`)
    let eggP = document.getElementById(`egg`)
    let forma = document.getElementById(`shape`)
    colorP.innerText = `Colore : ${color.name}`;
    eggP.innerText = `Egg Groups : ${egg_groups.map(el => el.name)}`
    forma.innerText = `Forma : ${shape.name}`
}

buttonInfo.onclick = async () => {
    moreInfo(input.value)
}

