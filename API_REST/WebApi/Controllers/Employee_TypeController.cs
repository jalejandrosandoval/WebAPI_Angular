using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Bussiness_Logic.Models.Employee;
using WebApi.Data;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Employee_TypeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public Employee_TypeController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Employee_Type
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee_Type>>> GetEmployee_Type()
        {
            return await _context.Employee_Type.ToListAsync();
        }

        // GET: api/Employee_Type/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee_Type>> GetEmployee_Type(int id)
        {
            var employee_Type = await _context.Employee_Type.FindAsync(id);

            if (employee_Type == null)
            {
                return NotFound();
            }

            return employee_Type;
        }

        // PUT: api/Employee_Type/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee_Type(int id, Employee_Type employee_Type)
        {
            if (id != employee_Type.Id_EmployeeType)
            {
                return BadRequest();
            }

            _context.Entry(employee_Type).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Employee_TypeExists(id))
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

        // POST: api/Employee_Type
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Employee_Type>> PostEmployee_Type(Employee_Type employee_Type)
        {
            _context.Employee_Type.Add(employee_Type);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee_Type", new { id = employee_Type.Id_EmployeeType }, employee_Type);
        }

        // DELETE: api/Employee_Type/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee_Type>> DeleteEmployee_Type(int id)
        {
            var employee_Type = await _context.Employee_Type.FindAsync(id);
            if (employee_Type == null)
            {
                return NotFound();
            }

            _context.Employee_Type.Remove(employee_Type);
            await _context.SaveChangesAsync();

            return employee_Type;
        }

        private bool Employee_TypeExists(int id)
        {
            return _context.Employee_Type.Any(e => e.Id_EmployeeType == id);
        }
    }
}
