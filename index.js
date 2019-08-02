// Needed Vars
const wordShow = document.querySelector("#word-show");
const earthLink = document.querySelector("#earthlink");
const youtube = document.querySelector("#youtube");
const earthsis = document.querySelector("#earthsis");
const employee = document.querySelector("#employee");
const projectBlock = document.querySelector("#projects");

const earthLinkCard = document.querySelector("#earthlink-card");
const youtubeCard = document.querySelector("#youtube-card");
const earthsisCard = document.querySelector("#earthsis-card");
const employeeCard = document.querySelector("#java-card");

var y;
// Array of buzz words
const buzzing = [
  "Web Designer",
  "Full Stack Web and Mobil Developer",
  "Blogger",
  "Enviormentalist",
  "Naturalist",
  "Runner",
  "Hiker",
  "Actavist",
  "Actor",
  "Actress",
  "Scientist On the Side",
  "Techie",
  "Reader",
  "Teacher",
  "Dog Lover",
  "Competative",
  "Driven",
  "Inspired",
  "Commedian",
  "Living Organism"
];
let i = 0;
const displayWord = () => {
  console.log(i);
  if (i === buzzing.length - 1) {
    wordShow.classList.remove("hide");
    wordShow.classList.add("success");
    wordShow.innerHTML = buzzing[i];
  } else {
    wordShow.innerHTML = buzzing[i];
    i += 1;
  }
};
// Displays the buzzWords
setInterval(displayWord, 500);
// wordShow.innerHTML = "";

earthLink.addEventListener("click", () => {
  earthLinkCard.classList.add("z-up");
  earthLinkCard.classList.remove("hidden");
});
youtube.addEventListener("click", () => {
  youtubeCard.classList.add("z-up");
  youtubeCard.classList.remove("hidden");
});
earthsis.addEventListener("click", () => {
  earthsisCard.classList.add("z-up");
  earthsisCard.classList.remove("hidden");
});
employee.addEventListener("click", () => {
  employeeCard.classList.add("z-up");
  employeeCard.classList.remove("hidden");
});
projectBlock.addEventListener("click", () => {
  earthLinkCard.classList.remove("z-up");
  earthLinkCard.classList.add("hidden");

  youtubeCard.classList.remove("z-up");
  youtubeCard.classList.add("hidden");

  earthsisCard.classList.remove("z-up");
  earthsisCard.classList.add("hidden");

  employeeCard.classList.remove("z-up");
  employeeCard.classList.add("hidden");
});
