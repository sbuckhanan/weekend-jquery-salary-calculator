//? TODO LIST
//? get data from inputs with val()
//? click listener on button to get inputs and add to table. clear inputs
//? Delete button to get rid of employees
//? Change color of totalAmount if more than 20,000
$(document).ready(onReady);

let totalMonthly = 0;
let thisHolder;

function onReady() {
	console.log('JQ is ready');
	//? Click listener for submit button
	$('.submitInfo').on('click', handleClick);
	//? Click listener for delete button
	$('.tableBody').on('click', '.deleteButton', deleteMessage);
	$('.tableBody').on('click', '.editButton', handleEdit);
	$('.tableBody').on('click', '.submitEdit', submitEdit);
	$('.deleteMessage').on('click', '.confirmButton', handleDelete);
	$('.deleteMessage').on('click', '.cancelButton', cancelDelete);
	$('.deleteAll').on('click', deleteAllMessage);
	$('.deleteMessage').on('click', '.confirmAllButton', deleteAll);
	$('.deleteMessage').on('click', '.cancelAllButton', cancelDelete);
}

function handleClick() {
	console.log('Submit Click');
	//? Append info to dom and get values
	let firstName = $('.firstName').val();
	let lastName = $('.lastName').val();
	let idNumber = $('.idNumber').val();
	let title = $('.title').val();
	let annualSalary = $('.annualSalary').val();
	console.log('Annual Salary is:', annualSalary);
	let monthlyAmount = Math.round(annualSalary / 12);
	console.log('Monthly salary is:', monthlyAmount);
	//? Add val to the DOM
	if (
		firstName !== '' &&
		lastName !== '' &&
		idNumber !== '' &&
		title !== '' &&
		annualSalary !== ''
	) {
		$('.tableBody').append(`
		<tr class="newEmployee">
			<th class="thFirstName">${firstName}</th>
			<th class="thLastName">${lastName}</th>
			<th class="thIdNumber">${idNumber}</th>
			<th class="thTitle">${title}</th>
			<th class="salary">${annualSalary}</th>
			<th><button type="submit" class="deleteButton">Delete</button></th>
			<th class="buttonHolder"><button type="submit" class="editButton">Edit</button></th>
		</tr>
	`);
		//? Add annual salary to the total
		Math.round((totalMonthly += Number(monthlyAmount)));
		//? Log the total
		console.log('Total Money:', totalMonthly);
		//? update total money on the DOM
		$('.totalMonthly').html(`Total Monthly: ${totalMonthly}`);
		//? Empty all values
		$('.firstName').val('');
		$('.lastName').val('');
		$('.idNumber').val('');
		$('.title').val('');
		$('.annualSalary').val('');
		colorChange();
	}
}

function handleDelete() {
	//? Target parent element of the delete button?
	//? maybe .remove maybe .clear?
	console.log('Delete Click');
	//? get amount of salary box
	let amount = thisHolder.parent().parent().children('.salary').text();
	console.log('This is the amount:', amount);
	//? target the parents parent and delete it. should be tr tag
	totalMonthly -= Math.round(Number(amount) / 12);
	console.log('Total after subtraction:', totalMonthly);
	$('.totalMonthly').html(`Total Monthly: ${totalMonthly}`);
	thisHolder.parent().parent().remove();
	colorChange();
	cancelDelete();
}

function handleEdit() {
	//? Target parent element of the delete button?
	//? maybe .remove maybe .clear?
	console.log('Edit Click');
	//? get value of current text in these fields
	let firstName = $(this).parent().parent().children('.thFirstName').text();
	let lastName = $(this).parent().parent().children('.thLastName').text();
	let idNumber = $(this).parent().parent().children('.thIdNumber').text();
	let title = $(this).parent().parent().children('.thTitle').text();
	let amount = $(this).parent().parent().children('.salary').text();
	//? append in Input fields with gathered data into table
	//? append first name row
	$(this)
		.parent()
		.parent()
		.children('.thFirstName')
		.html(`<input type="text" class="inputSmall editFirstName" placeholder="First Name" required>`);
	$('.editFirstName').val(`${firstName}`);
	//? append last name row
	$(this)
		.parent()
		.parent()
		.children('.thLastName')
		.html(`<input type="text" class="inputSmall editLastName" placeholder="Last Name" required>`);
	$('.editLastName').val(`${lastName}`);
	//? append ID
	$(this)
		.parent()
		.parent()
		.children('.thIdNumber')
		.html(`<input type="text" class="inputSmall editIdNumber" placeholder="ID" required>`);
	$('.editIdNumber').val(`${idNumber}`);
	//? append title
	$(this)
		.parent()
		.parent()
		.children('.thTitle')
		.html(`<input type="text" class="inputSmall editTitle" placeholder="Title" required>`);
	$('.editTitle').val(`${title}`);
	//? append salary
	$(this)
		.parent()
		.parent()
		.children('.salary')
		.html(`<input type="text" class="inputSmall editSalary" placeholder="Salary" required>`);
	$('.editSalary').val(`${amount}`);
	//? change edit button into submit button on edit
	$(this)
		.parent()
		.parent()
		.children('.buttonHolder')
		.html(`<button type="submit" class="submitEdit">Submit</button>`);
	totalMonthly -= Math.round(Number(amount) / 12);
	console.log(totalMonthly);
	//? update total monthly on dom
	$('.totalMonthly').html(`Total Monthly: ${totalMonthly}`);
	colorChange();
}

function submitEdit() {
	//? get the information of those input fields
	let firstName = $('.editFirstName').val();
	let lastName = $('.editLastName').val();
	let idNumber = $('.editIdNumber').val();
	let title = $('.editTitle').val();
	let annualSalary = $('.editSalary').val();
	//? .html that info back in the table
	//? append first name row
	if (
		firstName !== '' &&
		lastName !== '' &&
		idNumber !== '' &&
		title !== '' &&
		annualSalary !== ''
	) {
		$(this).parent().parent().children('.thFirstName').html(`${firstName}`);
		//? append last name row
		$(this).parent().parent().children('.thLastName').html(`${lastName}`);
		//? append ID
		$(this).parent().parent().children('.thIdNumber').html(`${idNumber}`);
		//? append title
		$(this).parent().parent().children('.thTitle').html(`${title}`);
		//? append salary
		$(this).parent().parent().children('.salary').html(`${annualSalary}`);
		//? change button back to edit button
		$(this)
			.parent()
			.parent()
			.children('.buttonHolder')
			.html(`<button type="submit" class="editButton">Edit</button>`);
		//? handle change of salary both more and less salary (maybe if logic)
		//? update new monthly amount
		totalMonthly += Math.round(Number(annualSalary) / 12);
		//? update total monthly on dom
		console.log(totalMonthly);
		$('.totalMonthly').html(`Total Monthly: ${totalMonthly}`);
		colorChange();
	}
}

function colorChange() {
	console.log('Change Color');
	if (totalMonthly > 20000) {
		$('.totalMonthly').css('color', 'red');
	} else {
		$('.totalMonthly').css('color', 'white');
	}
}

function deleteMessage() {
	thisHolder = $(this);
	let person = $(this).parent().parent().children('.thFirstName').text();
	$('.deleteMessage').append(`
	<div class="messageWrapper">
	<h1 class="areYouSure">Are you sure you would like to delete ${person}?</h1>
	<br />
	<button type="submit" class="confirmButton">Confirm</button><button type="submit" class="cancelButton">Cancel</button>
	</div>
	`);
}

function deleteAllMessage() {
	$('.deleteMessage').append(`
	<div class="messageWrapper">
	<h1 class="areYouSure">Are you sure you would like to delete ALL employees?</h1>
	<br />
	<button type="submit" class="confirmAllButton">Confirm</button><button type="submit" class="cancelAllButton">Cancel</button>
	</div>
	`);
}

function cancelDelete() {
	console.log('Cancel click');
	$('.messageWrapper').remove();
}

function deleteAll() {
	$('.newEmployee').remove();
	cancelDelete();
}

//? Delete all employees button
//? confirm delete all pop up
//? Confirm delete pop up with employees name
//? Click delete and then it runs a function to append a confirm message to the dom
//? include both a yes and a no button
//? if yes delete. if no do nothing but remove the message
