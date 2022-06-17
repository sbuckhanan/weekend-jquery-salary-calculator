//? TODO LIST
//? get data from inputs with val()
//? click listener on button to get inputs and add to table. clear inputs
//? Delete button to get rid of employees
//? Change color of totalAmount if more than 20,000
$(document).ready(onReady);

let totalMonthly = 0;

function onReady() {
	console.log('JQ is ready');
	//? Click listener for submit button
	$('.submitInfo').on('click', handleClick);
	//? Click listener for delete button
	$('.tableBody').on('click', '.deleteButton', handleDelete);
}

function handleClick() {
	console.log('Submit Click');
	//? Append info to dom and get values
	let firstName = $('.firstName').val();
	let lastName = $('.lastName').val();
	let idNumber = $('.idNumber').val();
	let title = $('.title').val();
	let annualSalary = $('.annualSalary').val();
	//? Add val to the DOM
	$('.tableBody').append(`
		<tr class="newEmployee">
			<th>${firstName}</th>
			<th>${lastName}</th>
			<th>${idNumber}</th>
			<th>${title}</th>
			<th class="salary">${annualSalary}</th>
			<th><button type="submit" class="deleteButton">Delete</button></th>
		</tr>
	`);
	//? Add annual salary to the total
	totalMonthly += Number(annualSalary);
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

function handleDelete() {
	//? Target parent element of the delete button?
	//? maybe .remove maybe .clear?
	console.log('Delete Click');
	//? get amount of salary box
	let amount = $(this).parent().parent().children('.salary').text();
	console.log('This is the amount:', amount);
	//? target the parents parent and delete it. should be tr tag
	$(this).parent().parent().remove();
	totalMonthly -= amount;
	console.log('Total after subtraction:', totalMonthly);
	$('.totalMonthly').html(`Total Monthly: ${totalMonthly}`);
}

function colorChange() {
	console.log('Change Color');
	if (totalMonthly > 20000) {
		$('.totalMonthly').css('background-color', 'red');
	} else {
		$('.totalMonthly').css('background-color', 'black');
	}
}
