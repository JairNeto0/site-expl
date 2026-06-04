let overtimeRecords = [];

function create(record) {
  overtimeRecords.push(record);
  return record;
}

function findAll() {
  return overtimeRecords;
}

function findByEmployeeId(employeeId) {
  return overtimeRecords.filter(
    record => record.employeeId === employeeId
  );
}

export {
  create,
  findAll,
  findByEmployeeId
};