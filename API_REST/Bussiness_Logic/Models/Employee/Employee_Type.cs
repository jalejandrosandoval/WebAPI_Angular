using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Bussiness_Logic.Models.Employee
{
    /// <summary>
    /// Class Employee_Type with 2 properites like:
    /// Id_EmployeeType: Int;
    /// EmpDescription: String;
    /// And Icolection Employee for establish the relationship whit this table...
    /// </summary>

    [Serializable]
    public class Employee_Type
    {
        [Key]
        public int Id_EmployeeType { get; set; }

        [Required(ErrorMessage = "* Tipo Empleado Requeridos...")]
        [StringLength(50, ErrorMessage = "No puede exceder 50 caracteres")]
        [Display(Name = "Tipo Empleado", Description = "Tipo Empleado", Prompt = "Tipo Empleado...")]
        public string EmpDescription { get; set; }

        public ICollection<Employee> Employees { get; set; }

    }
}
