/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.ExpenseReport.created = function (entity) {
    // Write code here.
    // Set the default date for the Order


    entity.CreationDate = new Date();




    // Using a Promise object we can call the CallGetUserName function


    msls.promiseOperation(CallGetUserName).then(function PromiseSuccess(PromiseResult) {
        // Set the result of the CallGetUserName function to the 
        // UserName of the entity
        entity.UserName = PromiseResult;
    });


    function CallGetUserName(operation) {
        $.ajax(
            {
                type: 'post',
                data: {},
                url: '../web/GetUserName.ashx',
                success: operation.code(function AjaxSuccess(AjaxResult) {
                    operation.complete(AjaxResult);
                })
            });

    };
}