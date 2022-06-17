//? TODO LIST
//? get data from inputs with val()
//? click listener on button to get inputs and add to table. clear inputs
$(document).ready(onReady);

let totalMonthly = 0;

function onReady() {
	console.log('JQ is ready');
	// Click listener for submit button
	$('.submitInfo').on('click', handleClick);
	$('.tableBody').on('click', '.deleteButton', handleDelete);
}

function handleClick() {
	//? Append info to dom and get values
	let firstName = $('.firstName').val();
	let lastName = $('.lastName').val();
	let idNumber = $('.idNumber').val();
	let title = $('.title').val();
	let annualSalary = $('.annualSalary').val();
	$('.tableBody').append(`
		<tr class="newEmployee">
			<th>${firstName}</th>
			<th>${lastName}</th>
			<th>${idNumber}</th>
			<th>${title}</th>
			<th>${annualSalary}</th>
			<th><button type="submit" class="deleteButton">Delete</button></th>
		</tr>
	`);
	totalMonthly += Number(annualSalary);
	console.log('Total Money:', totalMonthly);
	$('.totalMonthly').html(`Total Monthly: ${totalMonthly}`);
	$('.firstName').val('');
	$('.lastName').val('');
	$('.idNumber').val('');
	$('.title').val('');
	$('.annualSalary').val('');
}

function handleDelete() {
	// Target parent element of the delete button?
	// maybe .remove maybe .clear?
	console.log('Click');
	$(this).parent().parent().remove();
}
