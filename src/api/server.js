const getTasks = async () => {
	const response = await fetch('http://localhost:3000/tasks');
	const res = await response.json();
	return res;
};

const addTask = (formData) => {
	console.log(formData);
	fetch('http://localhost:3000/tasks', {
		method: 'POST',
		body: new FormData(formData),
	});
	
}
// const editTask
// const deleteTask



export {getTasks, addTask};