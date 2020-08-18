using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employee_Types",
                columns: table => new
                {
                    Id_EmployeeType = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmpDescription = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employee_Types", x => x.Id_EmployeeType);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Id_Employee = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(maxLength: 50, nullable: true),
                    LastName = table.Column<string>(maxLength: 50, nullable: false),
                    NumberDocument = table.Column<string>(maxLength: 10, nullable: false),
                    Id_EmpType = table.Column<int>(nullable: false),
                    Employee_TypeId_EmployeeType = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.Id_Employee);
                    table.ForeignKey(
                        name: "FK_Employees_Employee_Types_Employee_TypeId_EmployeeType",
                        column: x => x.Employee_TypeId_EmployeeType,
                        principalTable: "Employee_Types",
                        principalColumn: "Id_EmployeeType",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_Employee_TypeId_EmployeeType",
                table: "Employees",
                column: "Employee_TypeId_EmployeeType");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Employee_Types");
        }
    }
}
