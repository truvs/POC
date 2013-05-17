/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $parameters = [document.createElement("div"), msls.ContentItem];

    msls._addEntryPoints(lightSwitchApplication.BrowseExpenseItems, {
        /// <field>
        /// Called when a new BrowseExpenseItems screen is created.
        /// <br/>created(msls.application.BrowseExpenseItems screen)
        /// </field>
        created: [lightSwitchApplication.BrowseExpenseItems],
        /// <field>
        /// Called before changes on an active BrowseExpenseItems screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseExpenseItems screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseExpenseItems],
        /// <field>
        /// Called after the ExpenseItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ExpenseItemList_postRender: $parameters,
        /// <field>
        /// Called after the ExpenseItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ExpenseItem_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: $parameters,
        /// <field>
        /// Called after the Amount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Amount_postRender: $parameters,
        /// <field>
        /// Called after the DateIncurred content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateIncurred_postRender: $parameters,
        /// <field>
        /// Called after the ExpenseReport content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ExpenseReport_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.AddEditExpenseItem, {
        /// <field>
        /// Called when a new AddEditExpenseItem screen is created.
        /// <br/>created(msls.application.AddEditExpenseItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditExpenseItem],
        /// <field>
        /// Called before changes on an active AddEditExpenseItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditExpenseItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditExpenseItem],
        /// <field>
        /// Called to determine if the Delete method can be executed.
        /// <br/>canExecute(msls.application.AddEditExpenseItem screen)
        /// </field>
        Delete_canExecute: [lightSwitchApplication.AddEditExpenseItem],
        /// <field>
        /// Called to execute the Delete method.
        /// <br/>execute(msls.application.AddEditExpenseItem screen)
        /// </field>
        Delete_execute: [lightSwitchApplication.AddEditExpenseItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: $parameters,
        /// <field>
        /// Called after the Amount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Amount_postRender: $parameters,
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: $parameters,
        /// <field>
        /// Called after the DateIncurred content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateIncurred_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.BrowseExpenseReports, {
        /// <field>
        /// Called when a new BrowseExpenseReports screen is created.
        /// <br/>created(msls.application.BrowseExpenseReports screen)
        /// </field>
        created: [lightSwitchApplication.BrowseExpenseReports],
        /// <field>
        /// Called before changes on an active BrowseExpenseReports screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseExpenseReports screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseExpenseReports],
        /// <field>
        /// Called after the ExpenseReportList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ExpenseReportList_postRender: $parameters,
        /// <field>
        /// Called after the ExpenseReport content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ExpenseReport_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the CreationDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreationDate_postRender: $parameters,
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: $parameters,
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.AddEditExpenseReport, {
        /// <field>
        /// Called when a new AddEditExpenseReport screen is created.
        /// <br/>created(msls.application.AddEditExpenseReport screen)
        /// </field>
        created: [lightSwitchApplication.AddEditExpenseReport],
        /// <field>
        /// Called before changes on an active AddEditExpenseReport screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditExpenseReport screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditExpenseReport],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: $parameters,
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the CreationDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreationDate_postRender: $parameters,
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.ViewExpenseReport, {
        /// <field>
        /// Called when a new ViewExpenseReport screen is created.
        /// <br/>created(msls.application.ViewExpenseReport screen)
        /// </field>
        created: [lightSwitchApplication.ViewExpenseReport],
        /// <field>
        /// Called before changes on an active ViewExpenseReport screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewExpenseReport screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewExpenseReport],
        /// <field>
        /// Called to determine if the Delete method can be executed.
        /// <br/>canExecute(msls.application.ViewExpenseReport screen)
        /// </field>
        Delete_canExecute: [lightSwitchApplication.ViewExpenseReport],
        /// <field>
        /// Called to execute the Delete method.
        /// <br/>execute(msls.application.ViewExpenseReport screen)
        /// </field>
        Delete_execute: [lightSwitchApplication.ViewExpenseReport],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: $parameters,
        /// <field>
        /// Called after the CreationDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreationDate_postRender: $parameters,
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: $parameters,
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: $parameters,
        /// <field>
        /// Called after the ExpenseItems content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ExpenseItems_postRender: $parameters,
        /// <field>
        /// Called after the ExpenseItems1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ExpenseItems1_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the DateIncurred content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateIncurred_postRender: $parameters,
        /// <field>
        /// Called after the Amount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Amount_postRender: $parameters,
        /// <field>
        /// Called after the Description1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description1_postRender: $parameters
    });

}(msls.application));
