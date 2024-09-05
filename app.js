
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('Li');
    newLi.append(jokeText);
    jokes.append(newLi);
}
const getDadJoke = async () => {
    const config = { headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com', config);
    return res.data.joke;
}

button.addEventListener('click', addNewJoke);