
$('#formulario').on('submit', function(e) {
    e.preventDefault();
    const entradaNome = $('#nome').val();
    const novaTarefa = $(`<li>${entradaNome}</li>`)

    novaTarefa.appendTo('ul')
    $('hr').css('display', 'block');
    


    $('#nome').val('');
})

$('ul').on('click', 'li', function(e) {
    $('li').css('text-decoration', 'line-through')
})