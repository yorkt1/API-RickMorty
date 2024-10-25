const charsContainer = document.querySelector ('chars-container');
const API = 'https://rickandmortyapi.com/api';


async function Characters({name, species, gender, status, page = 1}) {
    
    const response = await fettch(`'#{API}/caracter?name=${name}&species=${species}&status=${status}&gender={}${gender}&page=${page}'`)

    const characters = await response.json()


    return characters.result
}

async function render({characters}) {
    characters.forEach((character) => {

        return charsContainer.innerHTML += `
            <div class="char">
            <img src="${character.imagem}" alt="">
            <div class="char-info">
            <h3>Rick Sanchez</h3>
            <span>Humano</span>
            </div>`
        
    });
    
}

render ()