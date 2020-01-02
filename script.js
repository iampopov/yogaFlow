

function showPoses () {
    for (var i = 0; i < yogaPosesArr.length; i++) {
        var cardDiv = $('<div>').attr({
            class: "card"
        });

        var cardImgDiv = $('<div>').attr({
            class: "image"
        });
        cardImgDiv.appendTo(cardDiv);
        
        var cardImage = $('<img>').attr({
            src: yogaPosesArr[i].img_url
        });
        cardImage.appendTo(cardImgDiv);

        var cardCont = $('<div>').attr({
            class: "content"
        });

        cardCont.appendTo(cardDiv);

        var cardHeader = $('<div>').attr({
            class: "header"
        }).text(yogaPosesArr[i].id)
       
        cardHeader.appendTo(cardCont);

        var cardDesc = $('<div>').attr({
            class: "description"
        }).text(yogaPosesArr[i].english_name+" or "+yogaPosesArr[i].sanskrit_name)

        cardDesc.appendTo(cardCont);

        cardDiv.appendTo("#poses");
    };
};

$('#main').ready(function(){
    var exampleFlow = [7, 8, 15, 14, 26, 30, 31],
          counter = 0,
          timer = setInterval(function(){
                $('#main').html(" ");
                showPose(exampleFlow[counter]);
                counter++
                if (counter === exampleFlow.length) {
                    clearInterval(timer);
                }
          },2000);

    function showPose (poses) {
    console.log(poses);
    $('<img>').attr('src', yogaPosesArr[poses-1].img_url).prependTo('#main')

    }
});

$('#topMenu').on("click", "#createFlow", showPoses);

