const pageInput = document.getElementById("pageInput")
const searchbtn = document.getElementById("searchbtn")
const resultsDiv = document.getElementById("results")

async function fetchCharacters(page){
    resultsDiv.innerHTML = "<p>carregando...<p>"

    try{
        const response = await fetch(`https://rickandmortyapi.com/api/character`)
        const data = await response.json()
        console.log(data)
    }catch(error){}
}