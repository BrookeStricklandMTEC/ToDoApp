const object = {

    textInput: $(".textInput"),
    checkBox: $(".checkBox"),
    headingNote: $("#headingNote"),

}

$(".textInput").keyup(function(e) {
    if (e.key == "Enter") {
        $("#headingNote").append( `
        
        <div class="container">

        <div class="row">

            <div class="col-sm">

                <div class="rightSide"> 
                    <div class="newRightRow" class="col-sm"> </div>
                </div>

            </div>

            <div class="col-sm">

                <div class="leftSide">
                    <div> ${$('.textInput').val()}  </div>
                </div>

                </div> 
            </div> 
        </div>`
    
        );

      }
    }
);



// function insert_Row(){
//     var x=document.getElementsByClassName('newRightRow').insertRow(0);
//     var y = x.insertCell(0);
//     var z = x.insertCell(1);
//     y.innerHTML="New Cell1";
//     z.innerHTML="New Cell2";
// }

