
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
             ${$('.headingInput').val()}
            </div>

        </div> `
        
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
        <span> </span> 
        <i style="font-size:17px" class="fa" id="trash">&#xf014;</i>
        </li> 
        `  
        
    )}


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



// Delete Button

$('#newNote').on('click',' #delete', function () {

    let delete1 = $(this).parents()[3]
    console.log(delete1); 

    // $(delete1).remove(); 


});




