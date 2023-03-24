const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon => {
    
    
    pokemon.addEventListener('click', () => {
        

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')


        const idPokemonSelecionado = pokemon.attributes.id.value;
        
       const idPokemonParaAbrir =  'cartao-'+ idPokemonSelecionado;
       const cartaoPokemonParaAbrir= document.getElementById(idPokemonParaAbrir)
       cartaoPokemonParaAbrir.classList.add('aberto')

       const pokemonAtivonaListagem = document.querySelector('.ativo')
       pokemonAtivonaListagem.classList.remove('ativo')

       const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
       pokemonSelecionadoNaListagem.classList.add('ativo')

      
    })
})