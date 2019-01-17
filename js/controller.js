
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
        
        $("#btnDelete").off("click")
        $("#btnDelete").click(function(){
            for(i=0; i<$("#tblCustomer").length;i++){
                var selectedid = $("#txtID").val();
                alert("Deleting Records")
                if(selectedid==cstid){
                    $("#tblCustomer tbody tr td").remove();
                }
            }
            $("#txtID").val("");
            $("#txtName").val("");
            $("#txtAddress").val("");
        });
    });
});



