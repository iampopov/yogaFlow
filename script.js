var exampleFlow = [7, 8, 15, 14, 26, 30, 31]

function showPoses () {
    $('#main').html(" ");
    var newFlow = $('<div>').attr({
        class: "ui fluid action input"
    });

    var inputBox = $('<input>').attr({
        type: "text",
        placeholder: "Enter your flow name..."
    });
    inputBox.appendTo(newFlow);

    var saveFlowBtn = $('<div>').attr({
        class: "ui button"
    }).text('Save your flow');
    saveFlowBtn.appendTo(newFlow);

    newFlow.appendTo("#main");
    for (var i = 0; i < yogaPosesArr.length; i++) {
        var cardDiv = $('<div>').attr({
            class: "card",
            value: yogaPosesArr[i].id,
            id: "crdHover"
        });

        var cardImgDiv = $('<div>').attr({
            class: "image",
        });
        cardImgDiv.appendTo(cardDiv);
        
        var cardImage = $('<img>').attr({
            src: yogaPosesArr[i].img_url,
        });
        cardImage.appendTo(cardImgDiv);

        var cardCont = $('<div>').attr({
            class: "content",
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

function showFlows () {
    $('#main').html(" ");
    var flowUiCardDiv = $('<div>').attr({
        class: "ui link cards"});

    var flowCardDiv = $('<div>').attr({
        class: "card"
    });
    flowCardDiv.appendTo(flowUiCardDiv);

    var flowCardContent = $('<div>').attr({
        class: "content"
    })
    flowCardContent.appendTo(flowCardDiv);

    var flowCardHeader = $('<div>').attr({
        class: "header"
    }).text("Example Flow")
    flowCardHeader.appendTo(flowCardContent);

    var flowCardDesc = $('<div>').attr({
        class: "description"
    })
    flowCardDesc.appendTo(flowCardContent);
    for (i=0; i<exampleFlow.length; i++){
        var flowCardP = $('<p>').text(yogaPosesArr[i].english_name)
        flowCardP.appendTo(flowCardContent);
    }
    flowUiCardDiv.appendTo('#main');
};

// $('#main').ready(function(){
//         exampleFlow, //i might use this for on click here
//           counter = 0,
//           timer = setInterval(function(){
//                 $('#main').html(" ");
//                 showPose(exampleFlow[counter]);
//                 counter++
//                 if (counter === exampleFlow.length) {
//                     clearInterval(timer);
//                 }
//           },2000);
//     function showPose (poses) {
//     console.log(poses);
//     $('<img>').attr('src', yogaPosesArr[poses-1].img_url).prependTo('#main')
//     }
// }); // will use this on click when flow is selected



$('#topMenu').on("click", "#createFlow", showPoses);
$('#topMenu').on("click", "#flows", showFlows);

