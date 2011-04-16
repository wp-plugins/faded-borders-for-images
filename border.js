$(window).load(function() {

// Get all of the gradient images and loop
// over them using jQuery implicit iteration.
$("img.gradient").each(function(intIndex){

	//Wrap a div around the image

	$(this).wrap("<div></div>");
	
	//Set variables
	var UploadedImg = $(this);
	var ParentElement = null;
	var jDiv = null;
	var intStep = 0;
	var curr_border = $('#thedivthathasthecolor').attr('class');
	var classes = $(this).attr('class');

	// Get the parent
	ParentElement = UploadedImg.parent();
 

	// Make sure the parent is position
	// relatively so that the gradient steps
	// can be positioned absolutely within it.
	ParentElement
		.css("position", "relative")
		.width(UploadedImg.width())
		.height(UploadedImg.height());

	ParentElement.addClass(classes);
	ParentElement.removeClass('gradient');

	UploadedImg.removeClass();
	UploadedImg.addClass('gradient');

	// Create the gradient elements. Here, we
	// are hard-coding the number of steps,
	// but this could be abstracted out.


// BOTTOM
// This calls a for...next loop that overlays semi-transparent divs on the image (1px tall x image-width wide)
	for (
		intStep = 0;
		intStep <= 19;
		intStep++
	){
 
	// Create a fade level.
	jDiv = $("<div></div>");
 
	// Set the properties on the fade level.
	jDiv
		.css (
		{
		backgroundColor: curr_border,
		opacity: (intStep * 5 / 100),
		bottom: ((14 - (intStep * 1)) + "px"),
		left: "0px",
		position: "absolute"
		})
		.width(UploadedImg.width())
		.height(1);
	jDiv.css('z-index', '1001');
 
	// Add the fade level to the
	// containing parent.
	ParentElement.append(jDiv);
	}



// TOP
// This calls a for...next loop that overlays semi-transparent divs on the image (1px tall x image-width wide)

	for (
		intStep = 0;
		intStep <= 19;
		intStep++
	){
 
	// Create a fade level.
	jDiv = $("<div></div>");
 
	// Set the properties on the fade level.
	jDiv
		.css (
		{
		backgroundColor: curr_border,
		opacity: (intStep * 5 / 100),
		top: ((19 - (intStep * 1)) + "px"),
		left: "0px",
		position: "absolute"
		})
		.width(UploadedImg.width())
		.height(1);
	jDiv.css('z-index', '1002');
 
	// Add the fade level to the
	// containing parent.
	ParentElement.append(jDiv);
	}


//LEFT
// This calls a for...next loop that overlays semi-transparent divs on the image (image-height tall x 1px wide)
	for (
		intStep = 0;
		intStep <= 19;
		intStep++
	){
 
	// Create a fade level.
	jDiv = $("<div></div>");
 
	// Set the properties on the fade level.
	jDiv
		.css (
		{
		backgroundColor: curr_border,
		opacity: (intStep * 5 / 100),
		top: "0px",
		left: ((19 - (intStep * 1)) + "px"),
		position: "absolute"
		})
		.width(1)
		.height(UploadedImg.height());
	jDiv.css('z-index', '1003');
 
	// Add the fade level to the
	// containing parent.
	ParentElement.append(jDiv);
	}




//RIGHT
// This calls a for...next loop that overlays semi-transparent divs on the image (image-height tall x 1px wide)
	for (
		intStep = 0;
		intStep <= 19;
		intStep++
	){
 
	// Create a fade level.
	jDiv = $("<div></div>");
 
	// Set the properties on the fade level.
	jDiv
		.css (
		{
		backgroundColor: curr_border,
		opacity: (intStep * 5 / 100),
		top: "0px",
		right: ((19 - (intStep * 1)) + "px"),
		position: "absolute"
		})
		.width(1)
		.height(UploadedImg.height());
	jDiv.css('z-index', '1004');
 
	// Add the fade level to the
	// containing parent.
	ParentElement.append(jDiv);
	}

});

});