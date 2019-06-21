// Grabbing elements from the html doc
const python = document.getElementById("python");
const java = document.getElementById("java");
const docker = document.getElementById("docker");
const react = document.getElementById("react");
const javascript = document.getElementById("javascript");
const sql = document.getElementById("sql");
const swift = document.getElementById("swift");
// FINISHED
// Event Handlers
python.onclick = () => displayBio("python");
java.onclick = () => displayBio("java");
docker.onclick = () => displayBio("docker");
react.onclick = () => displayBio("react");
javascript.onclick = () => displayBio("javascript");
sql.onclick = () => displayBio("sql");
// swift.onclick = () => console.log("cool");

const displayBio = value => {
  const id = document.querySelector(`#${value}dc`);
  console.log(id)
  id.classList.remove("invis")
  id.classList.add("visable");
}
