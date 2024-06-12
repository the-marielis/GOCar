document.addEventListener('DOMContentLoaded', function() {
    // Adiciona ou remove a classe 'input-typed' quando o conteúdo do campo de entrada é alterado
    document.querySelectorAll('.input-field').forEach(function(input) {
        input.addEventListener('input', function() {
            if (input.value.length > 0) {
                input.classList.add('input-typed');
            } else {
                input.classList.remove('input-typed');
            }
        });
    });
});
