const object = {

    textInput: $(".textInput"),
    checkBox: $(".checkBox"),
    headingNote: $("#headingNote"),

}

// To create
// 
// make strikethrough when check box is clicked
// make new list when new heading note is created
// make new note when typed in "newNoteSub" 
// 
// 


// New Note 



// How to make new entered notes create new "page" on left column 

$(".textInput").keyup(function(e) {
    if (e.key == "Enter") {

        $(".firstNoteInput").show(100);
        $(".checkBox").show(100);
        $("#leftHeadingNote").append( `
        
        <div class="col-sm" id="leftColumn">

            <div class="leftPlaceHolder" >
             ${$('.textInput').val()}
            </div>

        </div> `
    
        );

      } 

    else {
        
        `<div class="col-sm" id="leftColumn">
    
                <div class="leftPlaceHolder" >
                 <div> </div>
                 ${$('.textInput').val()}
                </div>
    
            </div> `

        }

    });

    // Get help

    // const checkBox = (e) => {
    //     if ($(".checkBox").is(":checked")) {
    //         $("firstNoteInput").css("text-decoration", "strike-through");
    //     } else {
    //         $("firstNoteInput").css("text-decoration", "none");
    //     }
    //   };Z

    //   $(document).on("click", checkBox);




$(".textInput").keyup(function(newList) {
    if (newList.key == "Enter") {

        $("#rightHeadingNote").show(100);

        $("#rightHeadingNote").append( `
        
        <div class="col-sm" id="rightColumn">

            <div class="rightPlaceHolder">     
                ${$('.textInput').val()} 
            </div>

        </div>`
    
        );

      }
    }
);

// newList();

// if (newList == true ) { 
// $(".newNoteInput").keyup(function(e) {
//     if (e.key == "Enter") {
//         $(".newTextEntry").append( `
        
//         <div class="col-sm">

//         <div class="leftSide">

//             <div class="newTextEntry"> </div>

//         </div>

//      </div> `
    
//         );

//       }
//     }
// );

// }





// ${$('.textInput').val()}




