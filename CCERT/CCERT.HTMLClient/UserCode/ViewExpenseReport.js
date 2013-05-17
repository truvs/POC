/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.ViewExpenseReport.Delete_execute = function (screen) {
    // Write code here.
    screen.ExpenseReport.deleteEntity();


    myapp.commitChanges().then(null, function fail(e) {


        alert(e.message);


        myapp.cancelChanges();


        throw e;


    });


};