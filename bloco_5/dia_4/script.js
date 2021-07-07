/* Questão 1 */

const corFundo = document.querySelector('#select-back');
corFundo.addEventListener('change', function() {
    const cor = corFundo.selectedOptions[0] 
    document.body.style.backgroundColor = cor.value
})

/* Questão 2 */

const corLetra = document.querySelector('#select-color');
corLetra.addEventListener('change', function() {
    const mudaCor = corLetra.selectedOptions[0] 
    document.body.style.color = mudaCor.value
})