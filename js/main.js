/************ Seleção de elementos */
const listaProjeto = document.querySelector('#bloco-projeto');

/************ Prototipos */
const itemProjeto = (titulo,descrição,propProjeto,propProjeto2,
    imgProjeto,linkSite,linkGit)=>{
    const liProjeto = document.createElement('li');
    liProjeto.classList.add('item-projeto');
    liProjeto.innerHTML = `<h3 class="titulo-projeto">${titulo}</h3>
                        <p class="descricao-projeto">${descrição}</p>
                        <div class="prop-projeto">
                            <p class="saudação">${propProjeto}</p>
                            <p class="saudação">${propProjeto2}</p>
                        </div>
                        <img src="${imgProjeto}" alt="Densidade de palavras" class="img-projeto">
                        <div class="cta-projeto">
                            <a href="${linkSite}" class="link-projeto" target="_blank">Site</a>
                            <a href="${linkGit}" class="link-projeto" target="_blank"> Github</a>
                        </div>`;
    listaProjeto.appendChild(liProjeto);                    
}


/************ Eventos */

window.onload = ((evento)=>{
     fetch("projetos.json")
    .then(response=>response.json())
    .then(data=>{
        data.forEach((elemento) => {
            itemProjeto(elemento.titulo,elemento.descrição,elemento.propProjeto,elemento.propProjeto2,elemento.imgProjeto,elemento.linkSite,elemento.linkGit);
            // console.log(elemento);            
        });
    })
    .catch(error=>{
        console.error("Erro ao buscar os dados...", error);
    })
})