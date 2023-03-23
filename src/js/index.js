const botoescarrossel = document.querySelectorAll('.botao');
const imagens=document.querySelectorAll('.imagem');
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventlistener('clicou no botao');
    console.log(indice);

    const botao selecionado = document.querySelector('selecionado')
    botao.selecionado.classlist.remove('selecionado');
    botao.classlist.add('selecionado')
    const imagemAtiva=document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
    console.log imagens{indice}.classList.add('ativa')

})
