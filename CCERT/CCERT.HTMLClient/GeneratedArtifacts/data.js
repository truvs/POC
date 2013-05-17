/// <reference path="../Scripts/msls-1.0.0.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function ExpenseItem(entitySet) {
        /// <summary>
        /// Represents the ExpenseItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this expenseItem.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this expenseItem.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this expenseItem.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this expenseItem.
        /// </field>
        /// <field name="Amount" type="Number">
        /// Gets or sets the amount for this expenseItem.
        /// </field>
        /// <field name="DateIncurred" type="Date">
        /// Gets or sets the dateIncurred for this expenseItem.
        /// </field>
        /// <field name="ExpenseReport" type="msls.application.ExpenseReport">
        /// Gets or sets the expenseReport for this expenseItem.
        /// </field>
        /// <field name="details" type="msls.application.ExpenseItem.Details">
        /// Gets the details for this expenseItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ExpenseReport(entitySet) {
        /// <summary>
        /// Represents the ExpenseReport entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this expenseReport.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this expenseReport.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this expenseReport.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this expenseReport.
        /// </field>
        /// <field name="CreationDate" type="Date">
        /// Gets or sets the creationDate for this expenseReport.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this expenseReport.
        /// </field>
        /// <field name="ExpenseItems" type="msls.EntityCollection" elementType="msls.application.ExpenseItem">
        /// Gets the expenseItems for this expenseReport.
        /// </field>
        /// <field name="UserName" type="String">
        /// Gets or sets the userName for this expenseReport.
        /// </field>
        /// <field name="details" type="msls.application.ExpenseReport.Details">
        /// Gets the details for this expenseReport.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="ExpenseItems" type="msls.EntitySet">
        /// Gets the ExpenseItems entity set.
        /// </field>
        /// <field name="ExpenseReports" type="msls.EntitySet">
        /// Gets the ExpenseReports entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        ExpenseItem: $defineEntity(ExpenseItem, [
            { name: "Id", type: Number },
            { name: "RowVersion", type: Array },
            { name: "Description", type: String },
            { name: "Amount", type: Number },
            { name: "DateIncurred", type: Date },
            { name: "ExpenseReport", kind: "reference", type: ExpenseReport }
        ]),

        ExpenseReport: $defineEntity(ExpenseReport, [
            { name: "Id", type: Number },
            { name: "RowVersion", type: Array },
            { name: "Description", type: String },
            { name: "CreationDate", type: Date },
            { name: "Status", type: String },
            { name: "ExpenseItems", kind: "collection", elementType: ExpenseItem },
            { name: "UserName", type: String }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "ExpenseItems", elementType: ExpenseItem },
            { name: "ExpenseReports", elementType: ExpenseReport }
        ], [
            {
                name: "ExpenseItems_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ExpenseItems },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ExpenseItems(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ExpenseReports_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ExpenseReports },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ExpenseReports(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ExpenseReportsForUser", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ExpenseReports },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ExpenseReportsForUser()",
                        {
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
