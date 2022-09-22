
// To create
// 
// make strikethrough when check box is clicked
// make functional edit button 
// 




// New Note 


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

        $('#leftHeadingNote').addClass('leftHeadingNoteClass'); 
        $('.checkBox').show(100); 

        $("#leftHeadingNote").append( `

        <div class="leftPlaceHolder"> 
    
            <div id="leftHeadingNote"> <strong> ${$('.headingInput').val()} </strong> </div>
            
        </div>
        
        `
        
    )}


});





// when new text entry is changed, it will add the value underneath it 

$(".noteInput").keyup(function(g) {

    if (g.key == "Enter") {

        let noteInput = $(this).val(); 
        $('.checkBox').show(100)

        $("ul").append(
            
            
        `
        <li><label><input type="checkbox" class="checkBox"></label>

        ` 

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

    $("body").on('click','#trash',function () { 

        $(this).closest('li').remove();

    });

});

// Edit Button


$('body').on('click','#edit', function () {

    $('.editInput').show(100);

    let edit1 = $(this).parents()[1]
    let edit2 = $(edit1).children()[0]
    let edit3 = $(edit2).append(`<input type="text" placeholder="Edit Your Note" id="editInput">`);

    $(edit3).append(
    `
        
        <i style="font-size:17px" class="fa" id="check"> &#xf00c;</i>
        
    `
    )
    

});


$('body').on('click','#check', function () {


    let check1 = $(this).parents()[1]
    let check2 = $(check1).children()[0]
    let checkValue = $("#editInput").val()


    let check3 = $("li").replaceWith(
        
        `
        <li> 
        <label><input type="checkbox" class="checkBox"></label>
        `
        +checkValue+

        `
        <i style="font-size:17px" class="fa" id="edit"> &#xf044;</i>
        <i style="font-size:17px" class="fa" id="trash">&#xf014;</i>
    
        </li>
        `
    ); 

});


$("body").on("click", '.checkBox', function() { 

    $(this).closest("li").toggleClass("strike");

})

      







