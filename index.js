// Needed Vars
const wordShow = document.querySelector("#word-show");
const earthLink = document.querySelector("#earthlink");
const youtube = document.querySelector("#youtube");
const earthsis = document.querySelector("#earthsis");
const employee = document.querySelector("#employee");
const projectBlock = document.querySelector("#projects");
// Exits
const earthLinkExit = document.querySelector("#earthlink-exit");
const youtubeExit = document.querySelector("#youtube-exit");
const earthsisExit = document.querySelector("#earthsis-exit");
const employeeExit = document.querySelector("#employee-exit");

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
  earthLinkCard.classList.add("z-up");
  proj1.classList.add("growth");
  
  proj2.classList.contains("left-growth")
    ? proj2.classList.add("")
    : proj2.classList.add("left-growth");
  if (proj1.classList.contains("shrink-left"))
    proj1.classList.remove("shrink-left");
  if (proj2.classList.contains("shrink-right"))
    proj2.classList.remove("shrink-right");

});
youtube.addEventListener("click", () => {
  youtubeCard.classList.add("z-up");
  proj2.classList.add("left-growth");
  youtubeCard.classList.remove("hidden");
  if (proj2.classList.contains("shrink-right")) {
    proj2.classList.remove("shrink-right");
  }
  proj1.classList.contains("shrink-left")
    ? proj1.classList.remove("shrink-left")
    : proj1.classList.add("");
  proj1.classList.contains("growth")
    ? proj1.classList.add("")
    : proj1.classList.add("growth");
});

earthsis.addEventListener("click", () => {
  earthsisCard.classList.add("z-up");
  earthsisCard.classList.remove("hidden");
  earthsisCard.classList.add("fade-grow");
});
employee.addEventListener("click", () => {
  employeeCard.classList.remove("hidden");
  employeeCard.classList.add("z-up");
  proj3.classList.add("growth");
});
earthLinkExit.addEventListener("click", () => {
  earthLinkCard.classList.add("hidden");
  if (!youtubeCard.classList.contains("hidden")) {
  } else {
    proj1.classList.add("shrink-left");
    proj2.classList.add("shrink-right");
    proj1.classList.remove("growth");
    proj2.classList.remove("left-growth");
  }
});
youtubeExit.addEventListener("click", () => {
  youtubeCard.classList.add("hidden");
  if (earthLinkCard.classList.contains("hidden")) {
    if (proj1.classList.contains("growth")) {
      proj1.classList.remove("growth");
      proj1.classList.add("shrink-left");
    }
    proj2.classList.remove("left-growth");
    proj2.classList.add("shrink-right");
  }
});
earthsisExit.addEventListener("click", () => {
  earthsisCard.classList.add("hidden");
});
