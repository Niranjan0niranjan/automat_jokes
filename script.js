{/* <div id="joke" class="joke">Loading ...</div>
<button id="jokeBtn" class="btn">Next Joke</button> */}

// Get https://icanhazdadjoke.com/


const jokeBtn = document.querySelector('#jokeBtn');
const types = document.querySelector('.type');
const punchline = document.querySelector('#punchline');
const setup = document.querySelector('#setup');

const generateJokes = () => {

    fetch('https://official-joke-api.appspot.com/random_joke')
        .then((res) => res.json() )
        .then( (data) =>{
            // types.innerHTML = data.type;
            setup.innerHTML =data.setup;
            setup.innerHTML =data.setup;
            punchline.innerHTML = data.punchline;

        })
        .catch((error) => {
            console.log(error);
        })
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();