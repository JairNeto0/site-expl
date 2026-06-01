import * as service from "../services/overtimeService.js";

function create(req, res) {
  try {
    const overtime = service.registerOvertime(
      req.body
    );

    return res.status(201).json(overtime);
  } catch (error) {
    return res.status(400).json({
      error: error.message
    });
  }
}

function list(req, res) {
  const records = service.getAllOvertimes();

  return res.json(records);
}

function listByEmployee(req, res) {
  const records =
    service.getEmployeeOvertimes(
      req.params.employeeId
    );

  return res.json(records);
}

export {
  create,
  list,
  listByEmployee
};