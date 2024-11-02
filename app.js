const charsContainer = document.querySelector('.chars-container'); // Corrigido para usar ponto para classe
const API = 'https://rickandmortyapi.com/api';
const defaultFilters = {
    name: '',
    species: '',
    gender: '',
    status: '',
    page: 1,
};

async function getCharacters({ name, species, gender, status, page = 1 }) {
    const response = await fetch(`${API}/character?name=${name}&species=${species}&status=${status}&gender=${gender}&page=${page}`);

    if (!response.ok) {
        throw new Error('Falha ao buscar personagens');
    }

    const characters = await response.json();
    console.log(characters.results);
    return characters.results;
}

async function render(characters) {
    charsContainer.innerHTML = ''; 

    characters.forEach((character) => {
        charsContainer.innerHTML += `
        <div class="char">
            <img src="${character.image}" alt="${character.name}"> <!-- Corrigido para usar name -->
            <div class="char-info">
                <h3>${character.name}</h3> <!-- Corrigido para usar name -->
                <span>${character.species}</span>
            </div>
        </div>
        `;
    });
}

async function main() {
    try {
        const characters = await getCharacters(defaultFilters);
        render(characters);
    } catch (error) {
        console.error(error); // Para lidar com erros
    }
}

main();
