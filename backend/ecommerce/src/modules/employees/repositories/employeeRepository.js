let employees = [];

function create(employee) {
  employees.push(employee);
  return employee;
}

function findAll() {
  return employees;
}

function findById(id) {
  return employees.find(emp => emp.id === id);
}

export {
  create,
  findAll,
  findById
};