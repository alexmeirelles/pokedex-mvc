# pokedex-mvc

O que é uma Pokédex?
A Pokédex é conhecida como Poké-Agenda no Brasil (e ainda como Dexter ou Dextette, dependendo da voz masculina ou feminina do aparelho).
Trata-se de uma enciclopédia virtual portátil de alta tecnologia que os treinadores Pokémon transportam para registra todas as espécies diferentes de Pokémon que são encontradas durante a sua viagem como treinadores. 
Em geral, quando são cumpridos determinados requisitos, a capacidade pode ser aumentada permitindo que a Pokédex possa armazenar dados de outros Pokémon, que não são comuns, assim como os Pokémon de outras regiões.

Requisitos do projeto
Para construir esse projeto, você precisará de dados dos Pokémons, para isso utilize esse site, aqui também é um exemplo de como sua aplicação pode ser com relação ao layout. Esse é um exemplo do projeto finalizado: https://pokedex-node-memoria.herokuapp.com/ (cadastre algum Pokémon para conseguir observar o layout).

Requisitos:
Criar um projeto no GitHub com Readme.md, .gitignore e licença;
Iniciar um projeto node;

Instalar as dependências:
Express
Nodemon
EJS
Alterar os scripts do package.json;

Criar as pastas:
public
css (arquivo style.css)
js (arquivo script.js)
img
views

Crie um arquivo principal chamado index.js;
Crie a rota principal, renderizando a view index.ejs;
Crie a rota de cadastro, renderizando a view cadastro.ejs;
Crie a rota detalhes, renderizando a view detalhes.ejs;
Crie uma const chamada pokedex que será um array;

Insira 3 objetos nesse array, cada objeto deve conter essas informações dos pokemons:
Número;
Nome;
Tipo;
Imagem;
Descrição;
Altura;
Peso;
Categoria;
Habilidade;

Ao renderizar a view index.ejs, envie esse array como variável;
Estilize toda a view index.ejs para receber os dados do array, porém só adicione o nome, imagem e tipo do pokemon. Reserve os outros dados para a rota detalhes.
Crie um menu para navegar entre as rotas;
Criar todo layout do formulário de cadastro;
Criar a rota de post /new que irá realizar um push de um novo objeto no array pokedex;
Configurar a mensagem de sucesso de cadastro;
Implementar o script.js para fazer o botão de fechar mensagem funcionar e para sumir com a mensagem em 5 segundos.

O desafio desse projeto será os detalhes dos pokemons, para conseguir realizar essa tarefa, você precisará receber um parâmetro em sua rota de detalhes, esse parâmetro será o "id" do pokemon. O id dele é a posição que ele possui no array, então ao clicar em um card, ele deverá me levar para essa rota, enviando também a posição atual do item que um cliquei.