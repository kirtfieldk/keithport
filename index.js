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

const proj1 = document.querySelector("#proj-one");
const proj2 = document.querySelector("#proj-2");
const proj3 = document.querySelector("#proj-3");

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
  earthLinkCard.classList.remove("hidden");

  proj1.classList.add("growth");
  proj2.classList.add("left-growth");
  console.log("called");
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
  employeeCard.classList.remove("hidden");
  proj3.classList.add("growth");
});
