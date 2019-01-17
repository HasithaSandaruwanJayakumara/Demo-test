
$("#btnSave").click(function () {
    var id = $("#txtID").val();
    var name = $("#txtName").val();
    var address = $("#txtAddress").val();
    $("#tblCustomer").append("<tr><td>" + id + "</td><td>" + name + "</td><td>" + address + "</td></tr>");
    
    $("#txtID").val("");
    $("#txtName").val("");
    $("#txtAddress").val("");
});