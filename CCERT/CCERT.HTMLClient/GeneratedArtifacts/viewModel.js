/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function BrowseExpenseItems(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseExpenseItems screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ExpenseItems" type="msls.VisualCollection" elementType="msls.application.ExpenseItem">
        /// Gets the expenseItems for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseExpenseItems.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseExpenseItems", parameters);
    }

    function AddEditExpenseItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditExpenseItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ExpenseItem" type="msls.application.ExpenseItem">
        /// Gets or sets the expenseItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditExpenseItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditExpenseItem", parameters);
    }

    function BrowseExpenseReports(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseExpenseReports screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ExpenseReports" type="msls.VisualCollection" elementType="msls.application.ExpenseReport">
        /// Gets the expenseReports for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseExpenseReports.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseExpenseReports", parameters);
    }

    function AddEditExpenseReport(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditExpenseReport screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ExpenseReport" type="msls.application.ExpenseReport">
        /// Gets or sets the expenseReport for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditExpenseReport.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditExpenseReport", parameters);
    }

    function ViewExpenseReport(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewExpenseReport screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ExpenseReport" type="msls.application.ExpenseReport">
        /// Gets or sets the expenseReport for this screen.
        /// </field>
        /// <field name="ExpenseItems" type="msls.VisualCollection" elementType="msls.application.ExpenseItem">
        /// Gets the expenseItems for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewExpenseReport.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewExpenseReport", parameters);
    }

    msls._addToNamespace("msls.application", {

        BrowseExpenseItems: $defineScreen(BrowseExpenseItems, [
            {
                name: "ExpenseItems", kind: "collection", elementType: lightSwitchApplication.ExpenseItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ExpenseItems.expand("ExpenseReport");
                }
            }
        ], [
        ]),

        AddEditExpenseItem: $defineScreen(AddEditExpenseItem, [
            { name: "ExpenseItem", kind: "local", type: lightSwitchApplication.ExpenseItem }
        ], [
            { name: "Delete" }
        ]),

        BrowseExpenseReports: $defineScreen(BrowseExpenseReports, [
            {
                name: "ExpenseReports", kind: "collection", elementType: lightSwitchApplication.ExpenseReport,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ExpenseReports;
                }
            }
        ], [
        ]),

        AddEditExpenseReport: $defineScreen(AddEditExpenseReport, [
            { name: "ExpenseReport", kind: "local", type: lightSwitchApplication.ExpenseReport }
        ], [
        ]),

        ViewExpenseReport: $defineScreen(ViewExpenseReport, [
            { name: "ExpenseReport", kind: "local", type: lightSwitchApplication.ExpenseReport },
            {
                name: "ExpenseItems", kind: "collection", elementType: lightSwitchApplication.ExpenseItem,
                getNavigationProperty: function () {
                    if (this.owner.ExpenseReport) {
                        return this.owner.ExpenseReport.details.properties.ExpenseItems;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
            { name: "Delete" }
        ]),

        showBrowseExpenseItems: $defineShowScreen(function showBrowseExpenseItems(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseExpenseItems screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseExpenseItems", parameters, options);
        }),

        showAddEditExpenseItem: $defineShowScreen(function showAddEditExpenseItem(ExpenseItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditExpenseItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditExpenseItem", parameters, options);
        }),

        showBrowseExpenseReports: $defineShowScreen(function showBrowseExpenseReports(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseExpenseReports screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseExpenseReports", parameters, options);
        }),

        showAddEditExpenseReport: $defineShowScreen(function showAddEditExpenseReport(ExpenseReport, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditExpenseReport screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditExpenseReport", parameters, options);
        }),

        showViewExpenseReport: $defineShowScreen(function showViewExpenseReport(ExpenseReport, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewExpenseReport screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewExpenseReport", parameters, options);
        })

    });

}(msls.application));
