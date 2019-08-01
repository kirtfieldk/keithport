const projects = document.querySelector("#projects");
const wordShow = document.querySelector("#word-show");
var y;
// Array of buzz words
const buzzing = [
  "Web Designer",
  "Full Stack Web and Mobil Developer",
  "Blogger",
  "Enviormentalist"
];
let i = 0;
const displayWord = () => {
  console.log(i);
  if (i === 3) {
    i = 0;
  }
  wordShow.innerHTML = buzzing[i];
  i += 1;
};

setInterval(displayWord, 2000);
// wordShow.innerHTML = "";
