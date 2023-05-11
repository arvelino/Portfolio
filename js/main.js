/************ Seleção de elementos */
const listaProjeto = document.querySelector('#bloco-projeto');

/************ Prototipos */
const itemProjeto = (titulo,descrição,
    imgProjeto,linkSite,linkGit)=>{
    const liProjeto = document.createElement('li');
    liProjeto.classList.add('item-projeto');
    liProjeto.innerHTML = `<h3 class="titulo-projeto">${titulo}</h3>
                        <p class="descricao-projeto">${descrição}</p>
                        <img src="${imgProjeto}" alt="Densidade de palavras" class="img-projeto">
                        <div class="cta-projeto">
                            <a href="${linkSite}" class="link-projeto" target="_blank">Site</a>
                            <a href="${linkGit}" class="link-projeto" target="_blank"> Github</a>
                        </div>`;
    listaProjeto.appendChild(liProjeto);                    
}

 const buscarProjetos = async (caminhoDoArquivo)=>{
    try {
        const response = await fetch(caminhoDoArquivo);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log('Arquivo não encontrado. '+error);
    }
}

/************ Eventos */

window.onload = ((evento)=>{
    buscarProjetos("projetos.json")
    .then(dados =>{
        dados.forEach((elemento) => {
            itemProjeto(elemento.titulo,elemento.descrição,elemento.imgProjeto,elemento.linkSite,elemento.linkGit);
        })
        
        //  fetch("projetos.json")
        // .then(response=>response.json())
        // .then(data=>{
        //     data.forEach((elemento) => {
        //         itemProjeto(elemento.titulo,elemento.descrição,elemento.propProjeto,elemento.propProjeto2,elemento.imgProjeto,elemento.linkSite,elemento.linkGit);
        //         // console.log(elemento);            
        //     });
        // })
        // .catch(error=>{
        //     console.error("Erro ao buscar os dados...", error);
        // })
    })
})    