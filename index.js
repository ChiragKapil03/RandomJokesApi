const express = require('express');
const axios = require('axios'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Random Jokes API! Use /api/jokes/random to get a random joke.');
});

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I told my computer I needed a break, and now it won't stop sending me KitKats.",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call fake spaghetti? An impasta.",
    "How do you organize a space party? You planet.",
    "Why can't you give Elsa a balloon? Because she'll let it go.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "Why don't eggs tell jokes? They might crack up.",
    "Why couldn't the leopard play hide and seek? Because he was always spotted.",
    "What do you call a boomerang that won’t come back? A stick.",
    "Why don't crabs give to charity? Because they’re shellfish.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "Why do cows wear bells? Because their horns don’t work.",
    "What do you call a belt made of watches? A waist of time.",
    "Why don’t skeletons ever use cell phones? They don’t have the guts to talk.",
    "What did one wall say to the other? I’ll meet you at the corner.",
    "Why was the math book always worried? It had too many problems.",
    "Why did the cookie go to the doctor? Because it felt crumby.",
    "Why couldn’t the pirate play cards? Because he was standing on the deck.",
    "Why do fish live in salt water? Because pepper makes them sneeze.",
    "What do you call a can opener that doesn’t work? A can’t opener.",
    "Why don’t seagulls fly over the bay? Because then they’d be bagels.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "Why did the coffee file a police report? It got mugged.",
    "Why don’t oysters donate to charity? Because they’re shellfish.",
    "Why did the man run around his bed? To catch up on his sleep."
];


app.get('/api/jokes/random', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({ joke: randomJoke });
});

app.get('/api/jokes/random/thirdparty', async (req, res) => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch a joke from the third-party API' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
