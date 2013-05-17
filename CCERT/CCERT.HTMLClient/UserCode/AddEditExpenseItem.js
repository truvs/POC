/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditExpenseItem.Delete_execute = function (screen) {
    // Write code here.
    screen.ExpenseItem.deleteEntity();


    return myapp.commitChanges().then(null, function fail(e) {


        myapp.cancelChanges();


        throw e;


    });


};