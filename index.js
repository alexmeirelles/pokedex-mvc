const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

let message = "";

const pokedex = [
    {
        id: 1,
        numero: 319,
        nome: "Sharpedo",
        tipo: "Water",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/319.png",
        descricao:"As soon as it catches the scent of prey, Sharpedo will jet seawater from its backside, hurtling toward the target to attack at 75 mph.",
        altura: 1.8,
        peso: 88.8,
        categoria: "Brutal",
        habilidade: "Rough Skin",
    },
    {
        id: 2,
        numero: 247,
        nome: "Pupitar",
        tipo: "Rock",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/247.png",
        descricao:"Even sealed in its shell, it can move freely. Hard and fast, it has outstanding destructive power.",
        altura: 1.2,
        peso: 152,
        categoria: "Hard Shell",
        habilidade: "Shed Skin",
    },
    {
        id: 3,
        numero: 302,
        nome: "Sableye",
        tipo: "Dark",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/302.png",
        descricao:"This Pokémon is feared. When its gemstone eyes begin to glow with a sinister shine, it’s believed that Sableye will steal people’s spirits away.",
        altura: 0.5,
        peso: 11,
        categoria: "Darkness",
        habilidade: "Stall",
    }
]

//Rotas
app.get("/", (req, res) => {
   res.render("index", {pokedex, message});
});

app.post("/add",(req, res) => {
    const pokemon = req.body;
    pokemon.id=pokedex.length + 1;
    pokedex.push(pokemon);
    message = `Parabéns! Pokemon cadastrado com sucesso!`;
    setTimeout(() => {
        message = ""
    }, 5000);
    res.redirect("/");
})

app.get("/detalhes/:id", (req, res) => {
    const id = req.params.id
    const pokemon = pokedex[id-1]
    res.render("detalhes.ejs", { pokemon:pokemon })
  });

  app.get("/cadastro", (req, res) => {
    res.render("cadastro.ejs")
  }); 

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
