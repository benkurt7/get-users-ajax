///<reference path = "jquery-3.5.1.js"/>


let favsCounter = 0;
let toggButt;


$(() => {


    $("#header").append(`<h1>Random Users Client</h1> <br> `);
    $(".marquee").append(`<marquee>You Have Selected ${favsCounter} Favorites So Far</marquee>`)

    for (i = 0; i < 40; i++) {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: randomUser => {

                let fullName = randomUser.results[0].name.first + " " + randomUser.results[0].name.last;
                let id = randomUser.results[0].name.first + "_" + randomUser.results[0].name.last;
                let gender = randomUser.results[0].gender;
                let age = randomUser.results[0].dob.age;
                let email = randomUser.results[0].email;
                let image = randomUser.results[0].picture.large;

                let cardDiv = document.createElement("div");
                cardDiv.setAttribute("class", "card")

                toggButt = `<label class="switch">
                  <input type="checkbox" name="${id}" value=1 >
                  <span class="slider" onclick="add()"></span>
                  </label>`;

                
                
                $(cardDiv).append(`
                  <div><img src="${image}" ></div> <br>
                  <div class="badge badge-primary text-wrap"><strong>Gender: </strong>${gender}</div> <br>
                  <div class="badge badge-primary text-wrap"><strong>Name: </strong>${fullName}</div> <br>
                  <div class="badge badge-primary text-wrap"><strong>Age: </strong>${age}</div> <br>
                  <div class="badge badge-primary text-wrap"><strong>eMail: </strong>${email}</div> <br>
                  <div >${toggButt}</div>`)

                $("#container").append(cardDiv)
            
            // end success
            }

        // end first ajax
        });
        
    // end for-loop 40
    };

    // end document ready
});

function add() {
    favsCounter++
    $(".marquee").text("");
    $(".marquee").append(`<marquee>You Have Selected ${favsCounter} Favorites So Far</marquee>`);

}


