using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Bussiness_Logic.Models.Employee
{
    /// <summary>
    /// Class Employee with 4 properites or fieds, like:
    /// Id_Employee: Int;
    /// NumberIdentification: String;
    /// FirstName: String;
    /// LastName: String;
    /// and finally two fields: 1) Id_EmpType: Int. 2) Employee_Type: Employee_Type. This fields, are functional for the create a relationship whit the Table EmployeeType
    /// </summary>

    [Serializable]
    public class Employee
    {
        [Key]
        public int Id_Employee { get; set; }

        [StringLength(50, ErrorMessage = "No puede exceder 50 caracteres")]
        [Display(Name = "Nombres", Description = "Nombres", Prompt = "Nombres...")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "* Apellidos Requeridos...")]
        [StringLength(50, ErrorMessage = "No puede exceder 50 caracteres")]
        [Display(Name = "Apellidos", Description = "Apellidos", Prompt = "Apellidos...")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "* Número de Identifiación Requerido...")]
        [StringLength(10, ErrorMessage = "No puede exceder 10 digitos")]
        [RegularExpression("([0-9]+)", ErrorMessage = "* No. Identificación Incorrecto...")]
        [Display(Name = "Número Documento", Description = "Número de Documento", Prompt = "Número de Identificación...")]
        public string NumberDocument { get; set; }

        [Required]
        public int Id_EmpType { get; set; }

        public Employee_Type Employee_Type { get; set; }

    }
}
