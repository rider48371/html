const btn = document.getElementById("btn");

const picContainer = document.querySelector(".pic-container");

const pic = document.getElementById("pic");

const name = document.querySelector(".anime-name");

 

btn.addEventListener("click", async () => {

  try {

    btn.disabled = true;

    btn.innerText = "Loading...";

    name.innerText = "Updating...";

    pic.src = "spinner.svg";

    const response = await fetch("https://api.catboys.com/img");

    const data = await response.json();

    btn.disabled = false;

    btn.innerText = "Get Anime";

    picContainer.style.display = "block";

    pic.src = data.url;

    name.innerText = data.artist;

  } catch (error) {

    console.log(error);

    btn.disabled = false;

    btn.innerText = "Get Anime";

    picContainer.style.display = "block";

    name.innerText = "An error occurred, please try again";

  }

});