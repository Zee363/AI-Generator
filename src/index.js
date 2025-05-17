function generateVerse(event) {
  event.preventDefault();
  console.log("Form submitted");

new Typewriter('#verse', {
  strings: 'John 3:16 - For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
  autoStart: true,
  delay: 0.5,
  cursor: ""
});
};


let bibleVerseFormElement = document.querySelector("#bible-verse-form");
bibleVerseFormElement.addEventListener("submit", generateVerse);