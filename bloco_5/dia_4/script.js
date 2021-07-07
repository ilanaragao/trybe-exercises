/* Questão 1 */

const select = document.querySelector('select');
select.addEventListener('change', function() {
    const cor = select.selectedOptions[0] 
    document.body.style.backgroundColor = cor.value
})