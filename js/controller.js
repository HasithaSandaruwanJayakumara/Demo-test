
$("#btnSave").click(function () {
    var id = $("#txtID").val();
    var name = $("#txtName").val();
    var address = $("#txtAddress").val();
    $("#tblCustomer").append("<tr><td>" + id + "</td><td>" + name + "</td><td>" + address + "</td></tr>");

    $("#txtID").val("");
    $("#txtName").val("");
    $("#txtAddress").val("");

    $("#tblCustomer tr").click(function () {
        var cstid = $(this).children().first().text();
        var cstname = $(this).find("td:nth-child(2)").text();
        var cstaddress = $(this).children().last().text();

        $("#txtID").val(cstid);
        $("#txtName").val(cstname);
        $("#txtAddress").val(cstaddress);
        
        
        $("#btnDelete").click(function(){
            for(i=0; i<$("#tblCustomer").length;i++){
                var id = $("#txtID").val();
                alert("Deleting Records")
                if(id==cstid){
                    $("#tblCustomer tbody").remove();
                }
            }
            $("#txtID").val("");
            $("#txtName").val("");
            $("#txtAddress").val("");
            return;
        });
        return;

    })
});



