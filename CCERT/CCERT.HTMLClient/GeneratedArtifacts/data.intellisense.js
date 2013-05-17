/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.ExpenseItem, {
        /// <field>
        /// Called when a new expenseItem is created.
        /// <br/>created(msls.application.ExpenseItem entity)
        /// </field>
        created: [lightSwitchApplication.ExpenseItem]
    });

    msls._addEntryPoints(lightSwitchApplication.ExpenseReport, {
        /// <field>
        /// Called when a new expenseReport is created.
        /// <br/>created(msls.application.ExpenseReport entity)
        /// </field>
        created: [lightSwitchApplication.ExpenseReport]
    });

}(msls.application));
