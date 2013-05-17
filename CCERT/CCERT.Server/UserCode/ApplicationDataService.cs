using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using System.Linq.Expressions;

namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void ExpenseReports_Filter(ref Expression<Func<ExpenseReport, bool>> filter)
        {
            filter = (x => x.UserName == this.Application.User.Identity.Name);
        }

        partial void ExpenseReports_Inserting(ExpenseReport entity)
        {
            entity.UserName = this.Application.User.Name;
        }

        partial void ExpenseReports_Updating(ExpenseReport entity)
        {
            entity.UserName = this.Application.User.Name;
        }

        partial void ExpenseReportsForUser_PreprocessQuery(ref IQueryable<ExpenseReport> query)
        {
            // Only show ExpenseReports for the current user
            query = query.Where(x => x.UserName == this.Application.User.Identity.Name);
        }
    }
}
