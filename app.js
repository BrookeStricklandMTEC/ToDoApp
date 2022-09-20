
// To create
// 
// make strikethrough when check box is clicked
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

        var noteInput = $(this).val(); 
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

        console.log("deleted"); 

        $(this).closest('li').remove();

    });

});

// Edit Button

$('body').on('click','#edit', function () {


    console.log("edited");

    // let editButton1 = $(this).parents()[1]
    // let editButton2 = $(editButton1).children()[3]
    
    
    // console.log(editButton2); 

    // $(editButton2).toggleClass('editStyle'); 

});





// let checkBox = $('.checkBox'); 

//  // Get help checkbox

// $("body").on("click", '.checkBox', function() { 
        
//         if ($(checkBox).is(":checked")) {
//             console.log('checked'); 
//             // $(".noteInput").toggleClass('strike');
//         } 
//         else {
//             // $(".noteInput").css("text-decoration", "none");
//         }

// })

      







