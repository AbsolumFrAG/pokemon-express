const express = require("express");
const Pokemon = require("./models/pokemon.model");
const sequelize = require("./database");

const app = express();
app.use(express.json());

// Synchro de la BDD
sequelize.sync().then(() => console.log("Tables synchronisées"));

// CREATE - Ajout d'un nouveau Pokémon
app.post("/pokemons", async (req, res) => {
    try {
        const pokemon = await Pokemon.create(req.body);
        res.status(201).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// READ - Récupérer tous les Pokémon
app.get("/pokemons", async (req, res) => {
    try {
        const pokemons = await Pokemon.findAll();
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ - Récupérer un Pokémon par son id
app.get("/pokemons/:id", async (req, res) => {
    try {
        const pokemon = await Pokemon.findByPk(req.params.id);
        if (pokemon) {
            res.json(pokemon);
        } else {
            res.status(404).json({ error: "Pokemon not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE - Modifier un Pokémon
app.put("/pokemons/:id", async (req, res) => {
    try {
        const pokemon = await Pokemon.findByPk(req.params.id);
        if (pokemon) {
            await pokemon.update(req.body);
            res.json(pokemon);
        } else {
            res.status(404).json({ error: "Pokemon not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE - Supprimer un Pokémon
app.delete("/pokemons/:id", async (req, res) => {
    try {
        const result = await Pokemon.destroy({ where: { id: req.params.id } });
        if (result) {
            res.json({ message: "Pokemon deleted" });
        } else {
            res.status(404).json({ error: "Pokemon not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port ${PORT}`);
});