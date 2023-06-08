const inputEl = document.getElementById("search");

const instructions = document.getElementById("instructions");

const meaningContainer = document.querySelector(".meaning-container");

const meanings = document.getElementById("meanings");

const title = document.getElementById("title");

const audio = document.getElementById("audio");

 

async function fetchAPI(word) {

  try {

    meaningContainer.style.display = "none";

    instructions.style.display = "block";

    instructions.innerText = `Searching for the meaning of ${word}`;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const result = await fetch(url).then(res => res.json());

 

    if (result.title) {

      meaningContainer.style.display = "block";

      instructions.style.display = "none";

      title.innerText = word;

      meanings.innerText = `Sorry, we could not find a definition for ${word}`;

      audio.style.display = "none";

    } else {

      meaningContainer.style.display = "block";

      audio.style.display = "inline-flex";

      title.innerText = result[0].word;

      meanings.innerText = result[0].meanings[0].definitions[0].definition;

      instructions.style.display = "none";

      audio.src = result[0].phonetics[0].audio;

    }

  } catch (error) {

    instructions.innerText = "An error has occurred. Please try again later.";

    meaningContainer.style.display = "none";

    console.log("error");

  }

}

 

inputEl.addEventListener("keyup", e => {

  if (e.target.value && e.key === "Enter") {

    fetchAPI(e.target.value);

  }

});