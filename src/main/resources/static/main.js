$(document).ready(function () {
	
    $("#list-students").submit(function (event) {
        event.preventDefault();
        console.log("Func called");
        fire_ajax_list_students();

    });
    
    $("#search-students").submit(function (event) {
        event.preventDefault();
        console.log("Func called");
        fire_ajax_search_students();

    });
    
    $("#add-student").submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        console.log("Func Add called");
        fire_ajax_create_student();
      });
    
    $("#edit-student").submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        console.log("Func edit called");
        fire_ajax_edit_student(document.getElementById("id").value);
      });
   

});

function showSearchDiv() {
	$('#home').prop("hidden", true);
	$('#show-students').prop("hidden", false);
	$('#searchStudents').prop("hidden", false);
	$('#create-student').prop("hidden", true);	
	fire_ajax_list_students();
}

function showCreateDiv() {
	$('#home').prop("hidden", true);
	$('#show-students').prop("hidden", true);
	$('#create-student').prop("hidden", false);		
}

function showHome() {
	$('#home').prop("hidden", false);
	$('#show-students').prop("hidden", true);
	$('#create-student').prop("hidden", true);		
}

function fire_ajax_list_students() {
	$("#searchFirstName").val("");
	$("#searchLastName").val("");
	$('#editStudentDetails').prop("hidden", true);
    $("#btn-search").prop("disabled", true);
    $( "tbody" ).remove();
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/students",
        data: JSON.stringify(),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
        	var items = [];
        	$.each(data, function(key,val){
        		items.push("<tr>");
        		items.push("<td id=''"+key+"''>"+val.firstName+"</td>");
        		items.push("<td id=''"+key+"''>"+val.lastName+"</td>");
        		items.push("<td id=''"+key+"''><a href='#' onclick='fire_ajax_view_student("+val.id+")'><i class='fa fa-eye' style='font-size:36px'></i></a></td>");
        		items.push("<td id=''"+key+"''><a href='#' onclick='fire_ajax_view_student_for_edit("+val.id+")'><i class='fa fa-pencil' style='font-size:36px'></i></td>");
        		items.push("</tr>");
        	});
        	$("<tbody>",{html: items.join("")}).appendTo("table");
        	
        	 $('#studentList').DataTable({searching:false, info:false, "bDestroy": true});
            
            $('#feedback').prop("hidden", false);

            console.log("SUCCESS : ", data);
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

        	swal("Error", "Error occurred!", "error");

            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
    });

}

function fire_ajax_view_student_for_edit(id) {
	$('#studentDetails').prop("hidden", true);
	
	console.log("In Edit Function");
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url : "/students/" + id,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
        	$('#editFirstName').val(data.firstName);
        	$('#editMiddleName').val(data.middleName);
        	$('#editLastName').val(data.lastName);
        	$('#editAge').val(data.age);
        	$('#editRegNumber').val(data.registrationNumber);
        	$('#editEmailId').val(data.emailId);
        	$('#editPhoneNumber').val(data.phoneNumber);
        	$('#id').val(data.id);
            $('#editStudentDetails').prop("hidden", false);
            console.log("SUCCESS : ", data);
        },
        error: function (e) {

            var json = "<h4>Ajax Response</h4><pre>"
                + e.responseText + "</pre>";
            $('#editStudentDetails').html(json);

            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
    });
	}

function fire_ajax_view_student(id) {
	$('#editStudentDetails').prop("hidden", true);
	console.log("In View Function");
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url : "/students/" + id,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
        	$('#detailFirstName').text(data.firstName);
        	$('#detailMiddleName').text(data.middleName);
        	$('#detailLastName').text(data.lastName);
        	$('#detailAge').text(data.age);
        	$('#detailRegNumber').text(data.registrationNumber);
        	$('#detailEmailId').text(data.emailId);
        	$('#detailPhoneNumber').text(data.phoneNumber);
            $('#studentDetails').prop("hidden", false);
            console.log("SUCCESS : ", data);
        },
        error: function (e) {

            var json = "<h4>Ajax Response</h4><pre>"
                + e.responseText + "</pre>";
            $('#studentDetails').html(json);

            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
    });

}

function fire_ajax_create_student(){
    var formData = {
      firstName : $("#firstName").val(),
      lastName :  $("#lastName").val(),
      middleName :  $("#middleName").val(),
      age :  $("#age").val(),
      registrationNumber :  $("#registrationNumber").val(),
      emailId :  $("#emailId").val(),
      phoneNumber :  $("#phoneNumber").val()
    }
    $.ajax({
    type : "POST",
    contentType : "application/json",
    url : "/students",
    data : JSON.stringify(formData),
    dataType : 'json',
    success : function(result) {
    	  swal("Success", "Record created successfully!");
    	  console.log(result);      
    },
    error : function(e) {
    	swal("Error", "Error occurred!", "error");
      console.log("ERROR: ", e);
    }
  });
    resetData();

  }


function fire_ajax_edit_student(id){
    
    // PREPARE FORM DATA
    var formData = {
      firstName : $("#editFirstName").val(),
      lastName :  $("#editLastName").val(),
      middleName :  $("#editMiddleName").val(),
      age :  $("#editAge").val(),
      registrationNumber :  $("#editRegNumber").val(),
      emailId :  $("#editEmailId").val(),
      phoneNumber :  $("#editPhoneNumber").val()
    }
    
    // DO PUT
    $.ajax({
    type : "PATCH",
    contentType : "application/json",
    url : "/students/" + id,
    data : JSON.stringify(formData),
    dataType : 'json',
    success : function(result) {
      console.log(result);
      swal("Success", "Record updated successfully!");
    },
    error : function(e) {
    	swal("Error", "Error occurred!", "error");
      console.log("ERROR: ", e);
    }
   
  });
  fire_ajax_list_students();
}

  function resetData(){
    $("#firstName").val("");
    $("#lastName").val("");
    $("#middleName").val("");
    $("#age").val("");
    $("#registrationNumber").val("");
    $("#emailId").val("");
    $("#phoneNumber").val("");
  }
  
  
  function fire_ajax_search_students(){	    
	    $( "tbody" ).remove();
	    var formData = {
	  	      firstName : $("#searchFirstName").val(),
	  	      lastName :  $("#searchLastName").val()
	  	    }
	    $.ajax({
	    type : "POST",
	    contentType : "application/json",
	    url : "/students/search",
	    data : JSON.stringify(formData),
	    dataType : 'json',
	    success: function (data) {
        	var items = [];
        	$.each(data, function(key,val){
        		items.push("<tr>");
        		items.push("<td id=''"+key+"''>"+val.firstName+"</td>");
        		items.push("<td id=''"+key+"''>"+val.lastName+"</td>");
        		items.push("<td id=''"+key+"''><a href='#' onclick='fire_ajax_view_student("+val.id+")'><i class='fa fa-eye' style='font-size:36px'></i></a></td>");
        		items.push("<td id=''"+key+"''><a href='#' onclick='fire_ajax_view_student_for_edit("+val.id+")'><i class='fa fa-pencil' style='font-size:36px'></i></td>");
        		items.push("</tr>");
        	});
        	$("<tbody>",{html: items.join("")}).appendTo("table");
        	
        	 $('#studentList').DataTable({searching:false, info:false, "bDestroy": true});
            
            $('#feedback').prop("hidden", false);

            console.log("SUCCESS : ", data);
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax Response</h4><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
	  });
  }