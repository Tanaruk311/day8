const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("clik", addContent);


function addContent() {
    console.log("IT's work")
    const text = document.getElementById("textInput").value
    const result = document.getElementById("result")

    result.innerHTML +=<h1><${text}</h1>
    

}
async function fetchData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await data.json()
    const titleList = document.getElementById("titleList")
    console.log(json.length)
    for (let i = 0; i < json.length; i++) {
        titleList.innerHTML += `<h3>${json[i].title}</h3>`
    }
}
fetchData()