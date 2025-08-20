const pageInput = document.getElementById("pageInput")
const searchbtn = document.getElementById("searchbtn")
const resultsDiv = document.getElementById("results")
//const passbtn = document.getElementById("passbtn")

async function fetchCharacters(page){
    resultsDiv.innerHTML = "<p>carregando...</p>"

    try{
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()
       // console.log(data)

       if (data.error){
        resultsDiv.innerHTML = "<p>Pagina invalida! Tente outra. (1/42)</p>"
        return
       }
       resultsDiv.innerHTML = ""
       data.results.forEach(character=>{
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
            <img src="${character.image}"alt="${character.name}">
            <h3>${character.name}</h3>
            <p><strong>status:</strong>${character.status}<p/>
            <p><strong>espécie:</strong>${character.species}<p/>
            `

            resultsDiv.appendChild(card)
       })
    }catch(error){
      //  console.log("deu ruim")
      resultsDiv.innerHTML = "<p>Erro ao buscar personagem!!!</p>"
    }
}
searchbtn.addEventListener("click",()=>{
    const page = pageInput.value.trim()
    if(page){
        fetchCharacters(page)
     }else{
        resultsDiv.innerHTML = "<p>digite um número de página </p>"
     }
})
//passbtn.addEventListener("click",
 //  if (page){
      //   fetchCharacters(page)
 //   }
//})

fetchCharacters(1)