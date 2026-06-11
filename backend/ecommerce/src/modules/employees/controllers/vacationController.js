import * as service from "../services/vacationService.js";

function create(req, res) {
  try {
    const vacation = service.scheduleVacation(
      req.body
    );

    return res.status(201).json(vacation);
  } catch (error) {
    return res.status(400).json({
      error: error.message
    });
  }
}

function list(req, res) {
  const vacations =
    service.getAllVacations();

  return res.json(vacations);
}

function listByEmployee(req, res) {
  const vacations =
    service.getEmployeeVacations(
      req.params.employeeId
    );

  return res.json(vacations);
}

export {
  create,
  list,
  listByEmployee
};