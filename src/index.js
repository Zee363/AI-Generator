function displayVerse(response) {
new Typewriter('#verse', {
  strings: response.data.answer,
  autoStart: true,
  delay: 0.2,
  cursor: ""

});
}

function generateVerse(event) {
  event.preventDefault();
  console.log("Form submitted");

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4b230af38fdc2b34b014a5b47d0e5tob";
  let context ="You are a bible verse generator. You will generate a verse from the book the user inserts. The user will insert the book name and you will generate a verse from that book. Make sure to usethe user instructions. Please also ensure that the sign is on a  blank new line always.";
  let prompt =`User instructions: Give me a  verse from the book the user inserts ${instructionsInput.value} and give the book and verse please. Be as brief as possible. PLease sign SheCodes AI at the end of the verse on a new line in a strong tag and purple in color`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`


  let verseElement = document.querySelector("#verse");
  verseElement.classList.remove("hidden");
  verseElement.innerHTML =  `<i style="font-size:18px" class="fa">&#xf110; <span class = "generating">Generating verse...</span></i>`;

  console.log("Generating verse" );
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

axios.get(apiUrl).then(displayVerse);
};


let bibleVerseFormElement = document.querySelector("#bible-verse-form");
bibleVerseFormElement.addEventListener("submit", generateVerse);