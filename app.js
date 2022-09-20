
// To create
// 
// make strikethrough when check box is clicked
// 
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


    let edit1 = $(this).parents()[1]
    let edit2 = $(edit1).children()[0]
    let edit3 = $(edit2).text(''); 

    $(edit3).append(
    `
                   
        <label><input type="checkbox" class="checkBox"></label>
         
        <input type="text" placeholder="Edit Your Note" class="editInput">
        `

         +edit3+   
        

        `
        <i style="font-size:17px" class="fa" id="check"> &#xf00c;</i>
        
    `)
    
    console.log(edit3); 

});


$('body').on('click','#check', function () {


    let check1 = $(this).parents()[1]
    let check2 = $(check1).children()[0]
    let check3 = $(check2).text(''); 

    console.log(check3);

    // let checkText = $(check3).val()

    // $(check3).append(
    // `
                   
    //     <label><input type="checkbox" class="checkBox"></label>
         
    //     `
         
    //         +checkText+
         
    //     `
    //     <i style="font-size:17px" class="fa" id="check"> &#xf00c;</i>
        
    // `)
    

});




// $('body').on('click', '#edit', function() {
//     var edit = $(this).text();
//     $(this).text('');
//     $(this).append(`<input type="text" value="${task}" />`);
// });




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

      







