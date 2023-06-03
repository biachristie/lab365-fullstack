function mudarCor() {
    const botao = document.getElementById('btn-active');

    const botaoChecked = botao.hasAttribute('checked');

    switch (botaoChecked) {
        case true:
            botao.className = '';
            botao.removeAttribute('checked');
            break;
    
        default:
            botao.className = 'checked';
            botao.setAttribute('checked', 'checked');
            break;
    }
}