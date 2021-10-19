$(function() {

    // fonction données // 
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data) {  
        displayCharacter(data)
        }
    })

    // fonction affichage // 
    function displayCharacter(data) {
        data.forEach(function(character) {
            $(".grid").append(`
            <div class="card col-3 m-2">
                    <div class="image" style="background-image: url('${character.imageUrl}');">
                    </div>
                    <h2 class="fullName text-center">${character.fullName}</h2>
                    <p class="title text-center">${character.title}</p>
            </div>

            `)
        })
    }

    // fonction recherche // 
    function submit() {}

})  
