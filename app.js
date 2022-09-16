
// To create
// 
// make strikethrough when check box is clicked
// make new list when new heading note is created
// make new note when typed in "newNoteSub" 
// 
// 


// New Note 



// How to make new entered notes create new "page" on left column 


$(".headingInput").keyup(function(e) {

    if (e.key == "Enter") {

        $(".noteInput").show(100);
        $("#delete").show(100);
        $("#save").show(100);

        $("#rightHeadingNote").append( `
        
        <div class="col-sm" id="rightColumn">

            <div class="rightPlaceHolder" >
            <strong> ${$('.headingInput').val()} </strong>
            </div>

        </div> `
        
    )}


});

$(".headingInput").keyup(function(e) {

    if (e.key == "Enter") {

        $("#leftHeadingNote").show(100);

        $("#leftHeadingNote").append( `

        <div class="leftPlaceHolder"> 
    
            <div id="leftHeadingNote"> <strong> ${$('.textInput').val()} </strong> </div>
            
        </div>
        
        `
        
    )}


});





// when new text entry is changed, it will add the value underneath it 

$(".noteInput").keyup(function(g) {

    if (g.key == "Enter") {

        var noteInput = $(this).val(); 

        $("ul").append(
            
            
        `<li> ` 

        + noteInput + 

        `
        <i style="font-size:17px" class="fa" id="edit"> &#xf044;</i>
        <i style="font-size:17px" class="fa" id="trash">&#xf014;</i>
        
        </li> 
        `  
        
    )}


});




// Delete Button

$(document).ready(function () { 

    $('#trash').on('click', function () { 

        console.log("deleted"); 

        // $(this).closest('li').remove();

    });

});


 // Get help checkbox

    // const checkBox = (e) => {
    //     if ($(".checkBox").is(":checked")) {
    //         $(".noteInput").css("text-decoration", "strike-through");
    //     } else {
    //         $(".noteInput").css("text-decoration", "none");
    //     }
    //   };Z

    //   $(document).on("click", checkBox);




// ${$('.textInput').val()}


