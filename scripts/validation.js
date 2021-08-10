// when user submits form:
//
// 	if name component is valid:
// 		hide name feedback
// 	else
// 		show name feedback
//
// 	if email component is valid:
// 		hide email feedback
// 	else
// 		show email feedback
//
//  if at least one box is checked:
// 		hide item feedback
// 	else
// 		show item feedback
//
//  if yes is selected
//      show textarea
//  else
//      hide textarea
//
// 	send form to server if form is valid

//if yes is selected
$("#yes").on("change", function() {
    //show textarea
    $("#specifylabel").removeClass("hidden");
    $("#specify").removeClass("hidden");
 })
// if no is selected
$("#no").on("change", function() {
    //hide text area
    $("#specifylabel").addClass("hidden");
    $("#specify").addClass("hidden");
})

$("#forms").on("submit", function() {
    var formValid = true;
    // if name component is valid:
        if( $("#name").prop("validity").valid ) {
            // hide name feedback
            $("#namefeedback").addClass("hidden");
        } else {
            // show name feedback
            $("#namefeedback").removeClass("hidden");

          formValid = false;
        }
    //if email component is valid
        if( $("#email").prop("validity").valid ) {
            // hide name feedback
            $("#emailfeedback").addClass("hidden");
        } else {
            // show name feedback
            $("#emailfeedback").removeClass("hidden");

          formValid = false;
        }

    //if at least one box is checked
    if( $("#food").is(":checked") ||
        $("#item").is(":checked") ) {
        //hide name feedback
        $("#itemfeedback").addClass("hidden");

    } else {
        //show name feedback
        $("#itemfeedback").removeClass("hidden");

        formValid = false;
        }

  return formValid;
});
