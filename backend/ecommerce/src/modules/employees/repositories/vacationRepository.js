let vacations = [];

function create(vacation) {
  vacations.push(vacation);
  return vacation;
}

function findAll() {
  return vacations;
}

function findByEmployeeId(employeeId) {
  return vacations.filter(
    vacation => vacation.employeeId === employeeId
  );
}

export {
  create,
  findAll,
  findByEmployeeId
};