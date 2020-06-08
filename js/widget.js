'use strict';

const url = '../employee/data/employees.json';
const liTmpl = document.querySelector('[data-liTmpl]').innerHTML;
const empList = document.querySelector('[data-empList]');


window.addEventListener('load', getData);

function getData() {
	fetch(url)
		.then(result => result.json())
		.then(showEmployeeList);
}

function showEmployeeList(data) {
	data.forEach(emp => {
		empList.innerHTML += liTmpl.replace(/{{name}}/gi, emp.name)
			.replace(/{{status}}/gi, emp.inoffice ? 'in' : 'out');
	});
}