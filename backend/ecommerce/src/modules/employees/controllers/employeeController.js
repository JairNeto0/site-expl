import * as service from "../services/employeeService.js";

function create(req, res) {
  try {
    const employee = service.createEmployee(req.body);
    return res.status(201).json(employee);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

function list(req, res) {
  const employees = service.getEmployees();
  return res.json(employees);
}

function find(req, res) {
  const employee = service.getEmployeeById(Number(req.params.id));

  if (!employee) {
    return res.status(404).json({
      error: "Funcionário não encontrado"
    });
  }

  return res.json(employee);
}

export {
  create,
  list,
  find
};