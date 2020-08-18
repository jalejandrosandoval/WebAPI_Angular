using Bussiness_Logic.Models.Employee;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Data
{
    /// <summary>
    /// This class is the middle of the connection with the Database through of EntityFrameworkCore and the migrations whit the same package
    /// </summary>
  
    public class AppDbContext: DbContext
    {

        public AppDbContext()
        {

        }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {


        }

        public DbSet<Employee> Employees { get; set; }

        /// <summary>
        /// This Method, calls and import the classe or models from Bussiness_Logic
        /// </summary>
        /// <param name="modelBuilder"></param>

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }

    }

}
