// Selecionar todos os botões de tamanho
const sizeButtons = document.querySelectorAll('.tamanho-camisa');

// Adicionar um event listener para cada botão
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Desmarcar todos os botões
        sizeButtons.forEach(btn => btn.classList.remove('selected'));
        // Marcar o botão clicado
        button.classList.add('selected');
    });
});