var exampleFlow = [7, 8, 15, 14, 26, 30, 31]
var createFlowArr = [];

function showPoses () {
    $('#main').html(" ");
    var newFlow = $('<div>').attr({
        class: "ui fluid action input",
        id: "flowInputName"
    });

    var inputBox = $('<input>').attr({
        type: "text",
        placeholder: "Enter your flow name...",
        id: "showPosesIdField"
    });
    inputBox.appendTo(newFlow);

    var saveFlowBtn = $('<div>').attr({
        class: "ui button",
        id: "saveFlowBtn"
    }).text('Save your flow');
    saveFlowBtn.appendTo(newFlow);

    newFlow.appendTo("#main");
    for (var i = 0; i < yogaPosesArr.length; i++) {
        var cardDiv = $('<div>').attr({
            class: "ui link card",
            name: yogaPosesArr[i].id,
            id: "crdHover"
        });

        var cardImgDiv = $('<div>').attr({
            class: "image"
        });
        cardImgDiv.appendTo(cardDiv);
        
        var cardImage = $('<img>').attr({
            src: yogaPosesArr[i].img_url,
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

function addPose () {
// console.log($(this).attr('name'));
var selectedPose = $(this).attr('name')
createFlowArr.push(selectedPose);
   
    var cardImage = $('<img>').attr({
        src: yogaPosesArr[selectedPose].img_url,
        width: "24.84%",
        style: "display: inline; border: solid lightgray 1px; border-radius: 5px; padding: 10px; margin: 1px 1px 0 0;",
        name: yogaPosesArr[selectedPose].id,
        id: "imgHover"
    });
    cardImage.appendTo("#main");
}
// console.log(createFlowArr);
function showFlows () {
    $('#main').html(" ");
    $('#poses').html(" ");
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

    for(var i =0; i < localStorage.length; i++){
        var currentArray = JSON.parse(localStorage.getItem(localStorage.key(i)));
        //console.log(localStorage.getItem(localStorage.key(i)));
        console.log(currentArray);

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
        }).text(localStorage.key(i))
        flowCardHeader.appendTo(flowCardContent);
    
        var flowCardDesc = $('<div>').attr({
            class: "description"
        })
        flowCardDesc.appendTo(flowCardContent);
        // doesnt work and i dont know why:
        // for (i=0; i<currentArray.length; i++){
        //     var flowCardP = $('<p>').text(yogaPosesArr[i].english_name)
        //     flowCardP.appendTo(flowCardContent);
        // }
        flowUiCardDiv.appendTo('#main');
    }
};

function saveFlow () {
    // console.log("this");
    var flowName = $("#showPosesIdField").val();
    //console.log(flowName);
    localStorage.setItem(flowName, JSON.stringify(createFlowArr));
    $("#showPosesIdField").val(" ");
}

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



$("#createFlow").on("click", showPoses);
$("#flows").on("click", showFlows);
$('#poses').on("click", "#crdHover", addPose);
$('#main').on("click", "#saveFlowBtn", saveFlow)