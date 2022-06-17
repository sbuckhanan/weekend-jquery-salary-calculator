//? TODO LIST
//? get data from inputs with val()
//? click listener on button to get inputs and add to table. clear inputs
$(document).ready(onReady);

let totalMonthly = 0;
let firstName = $('.firstName');
let lastName = $('.lastName');
let idNumber = $('.idNumber');
let title = $('.title');
let annualSalary = $('.annualSalary');

function onReady() {
	console.log('JQ is ready');
}

function handleClick() {
	//? Append info to dom and get values
	$('.tableBody').append(`
		<tr>
			<th>${firstName.val()}</th>
			<th>${lastName.val()}</th>
			<th>${idNumber.val()}</th>
			<th>${title.val()}</th>
			<th>${annualSalary.val()}</th>
		</tr>
	`);
}
