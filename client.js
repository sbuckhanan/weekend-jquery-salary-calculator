//? TODO LIST
//? get data from inputs with val()
//? click listener on button to get inputs and add to table. clear inputs
$(document).ready(onReady);

let totalMonthly = 0;

function onReady() {
	console.log('JQ is ready');
	$('.submitInfo').on('click', handleClick);
}

function handleClick() {
	//? Append info to dom and get values
	let firstName = $('.firstName').val();
	let lastName = $('.lastName').val();
	let idNumber = $('.idNumber').val();
	let title = $('.title').val();
	let annualSalary = $('.annualSalary').val();
	$('.tableBody').append(`
		<tr>
			<th>${firstName}</th>
			<th>${lastName}</th>
			<th>${idNumber}</th>
			<th>${title}</th>
			<th>${annualSalary}</th>
		</tr>
	`);
	totalMonthly += annualSalary;
}
