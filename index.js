$(function() {
    var arrayCharacters = []

    // fonction données // 
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data) { 
        // fonction .forEach directement dans ajax // 
        // data.forEach(function(character) // 
            arrayCharacters = data
            displayCharacters(data)
        }
    })

        // fonction recherche // 
        // action "submit" // 
    $("form").submit(function(input) {
    // .preventDefault permet d'empêcher la réactualisation de toute la page // 
        input.preventDefault()

    // créer une valeur pour l'entrée de l'input // 
        var value = $("input").val()
     // créer une variable pour le nouveau tableau créé par filter // 
        var search = arrayCharacters.filter(function(character) {
     // comparer la valeur recherchée et la retourner // 
        return character.fullName.toLowerCase().includes(value)
        })

     // afficher le nouveau tableau créée par filter  // 
        displayCharacters(search)
    })


    // fonction affichage // 
    function displayCharacters(arrayCharacters) {
        $(".grid").html("")

        arrayCharacters.forEach(function(character) {
            $(".grid").append(`
            <div class="col-md-4 col-sm-6 col-12">
                <div class="card"> 
                    <div class="image" style="background-image: url('${character.imageUrl}');">
                    </div>
                    <h2 class="fullName text-center">${character.fullName}</h2>
                    <p class="title text-center">${character.title}</p>
                </div>
            </div>
            `)
        })

    }

    // fonction shuffle // 
    $(".shuffle").click(function() {
        var shuffleCharacters =
        displayCharacters(shuffleCharacters)
    })
})  
