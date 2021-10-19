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
            <div class="card col-4">
                    <div class="image" style="background-image: url('${character.imageUrl}');">
                    </div>
                <div class="description">
                    <div class="fullName">${character.fullName}</div>
                    <div class="title">${character.title}</div>
                </div>
            </div>

            `)
        })
    }

    // fonction recherche // 

})  
