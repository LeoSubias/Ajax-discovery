
// $.ajax('http://192.168.1.12:8000/public/secret.json')
// .done(function(data){
//     $('#alert').html(data.secret);
// })
// .fail(function(){
//     $('#alert').html('PAS COOL')
// })
// .always(function(){
//     alert('lalalala')
// })

// $.ajax({
//     url: 'http://192.168.1.12:8000/lala',
//     success: function(data){
//         $('#alert').html(data);
//     },
//     error: function(){
//         $('#alert').html('PAS COOL')
//     },
// });


// console.log('quelquechose');

$('#send').click(function(){
    $('#preloader').html('W8....');
    $.ajax({
        url:'http://192.168.1.12:8000/users',
        method: "POST",
        data: {name:"lefort", prenom:"jordan", content:"lorem"}
    }).done(function(data){
        console.log(data);
        $.ajax({
             url:'http://192.168.1.12:8000/users',
             data: {name: "lefort"},
        }).done(function(data){
            $('#content').html(data.content);
            $('#preloader').html('');
        }).fail(function(){
            $('#alert').html('aaaaaaaaaaaaaaaaaaaah 2');       
        });
    }).fail(function(){
        $('#alert').html('aaaaaaaaaaaaaaaaaaaah');       
    })

});