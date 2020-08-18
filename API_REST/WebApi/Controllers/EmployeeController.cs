using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bussiness_Logic.Models.Employee;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        private readonly AppDbContext _ContextEmployees;

        /// <summary>
        /// Constructor that instance the variable _ContextEmployees
        /// </summary>
        /// <param name="context"></param>

        public EmployeeController(AppDbContext context)
        {
            _ContextEmployees = context;
        }

        /// <summary>
        /// Endpoint that return list of employees, through calls the dbcontext.employee 
        /// </summary>
        /// <returns>List Employee in formart JSON </returns>

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            return await _ContextEmployees.Employees.ToListAsync();
        }

        /// <summary>
        /// This Endopoint show the Data, by utilization the format .JSON. Reception the ID for the show this data.
        /// </summary>
        /// <param name="Id"></param>
        /// <returns>Object<Employee> in formar .JSON</returns>
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployees(int Id)
        {
            var _employee = await _ContextEmployees.Employees.FindAsync(Id);

            if(_employee == null)
            {
                return NotFound();
            }

            return _employee;

        }

        /// <summary>
        /// Endopoit Put; Recepction the 2 params Int ID; and the model Employee
        /// </summary>
        /// <param name="id"></param>
        /// <param name="departments"></param>
        /// <returns>Bad Request or NotContent; if the it´s Ok the modification or updating in the database.</returns>
        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDepartments(int id, Employee employee)
        {
            if (id != employee.Id_Employee)
            {
                return BadRequest();
            }

            _ContextEmployees.Entry(employee).State = EntityState.Modified;

            try
            {
                await _ContextEmployees.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployees(Employee departments)
        {
            if (ModelState.IsValid) {
                _ContextEmployees.Employees.Add(departments);
                await _ContextEmployees.SaveChangesAsync();

                return CreatedAtAction("GetEmployees", new { id = departments.Id_Employee }, departments);
            }
            else
            {
                ModelState.AddModelError(string.Empty, "Error en la creación de Empleados... Verifique los Datos!");
                return BadRequest(ModelState);
            }

        }

        // DELETE: api/Departments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> DeleteEmployees(int id)
        {
            var departments = await _ContextEmployees.Employees.FindAsync(id);
            if (departments == null)
            {
                return NotFound();
            }

            _ContextEmployees.Employees.Remove(departments);
            await _ContextEmployees.SaveChangesAsync();

            return departments;
        }

        /// <summary>
        /// Employee verification, if exists or not at the dbcontext and the database
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Returns at the Boolean</returns>

        private bool EmployeeExists(int id)
        {
            return _ContextEmployees.Employees.Any(e => e.Id_Employee == id);
        }


    }
}