
$(document).ready(function() {

	$("#firstname").blur(function(){
		if($("#firstname").val()==""){
			$("#fid").removeClass("glyphicon-user").addClass("glyphicon-remove").css("color","red");
		}else{
			 $("#fid").removeClass("glyphicon-remove").addClass("glyphicon-user").css("color","#5C5D5F");
		}
        
    });
	
	$("#lastname").blur(function(){
		if($("#lastname").val()==""){
			$("#lid").removeClass("glyphicon-user").addClass("glyphicon-remove").css("color","red");
		}else{
			 $("#lid").removeClass("glyphicon-remove").addClass("glyphicon-user").css("color","#5C5D5F");
		}
    });
	
	$("#email").blur(function(){
		if($("#email").val()==""){
			$("#emailid").removeClass("glyphicon-envelope").addClass("glyphicon-remove").css("color","red");
		}else{
			 $("#emailid").removeClass("glyphicon-remove").addClass("glyphicon-envelope").css("color","#5C5D5F");
		}  
	});
//	$('#first_name').on('input', function() {
//		var input=$(this);
//		var is_name=input.val();
//		if(is_name){form:input.removeClass("invalid").addClass("valid");}
//		else{form:input.removeClass("valid").addClass("invalid");}
//	});
//	
//	$('#first_name').on('input', function() {
//		var input=$(this);
//		var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/;
//		var is_email=re.test(input.val());
//		if(is_email){input.removeClass("invalid").addClass("valid");}
//		else{input.removeClass("valid").addClass("invalid");}
//	});
//	
//	$('#first_name').keyup(function(event) {
//		var input=$(this);
//		var message=$(this).val();
//		console.log(message);
//		if(message){input.removeClass("invalid").addClass("valid");}
//		else{input.removeClass("valid").addClass("invalid");}	
//	});
//	
//	$("#save button").click(function(event){
//		var form_data=$("#save-student").serializeArray();
//		var error_free=true;
//		for (var input in form_data){
//			var element=$("#save-studen_"+form_data[input]['name']);
//			var valid=element.hasClass("valid");
//			var error_element=$("span", element.parent());
//			if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
//			else{error_element.removeClass("error_show").addClass("error");}
//		}
//		if (!error_free){
//			event.preventDefault(); 
//		}
//		else{
//			alert('No errors: Form will be submitted');
//		}
//	});
	
	
});
	

//
//function validate(){
//    var f=document.getElementById("save-student");
//    validateFName(f);
//    
//    validateLname(f);
//    
//
//
//}




function validateFname(form){
     var error=document.getElementById("fNameError");

     var name=form["firstname"].value;
     error.innerHTML="";

   if( name==null || name==""){
	   $("#firstname").css("border-bottom", "2px solid #ff0000");
      error.innerHTML="Cannot be empty";
    }

   if(error.innerHTML.length > 0){
	   return false;
   }  
	   else{
		   $("#firstname").css("border-bottom", "2px solid #00ff00");
	   return true;
	   }

 }

function validateLname(form){
    var error=document.getElementById("lNameError");

    var name=form["lastname"].value;
    error.innerHTML="";

  if( name==null || name==""){
	  $("#lastname").css("border-bottom", "2px solid #ff0000");
     error.innerHTML="Cannot be empty";
   }
  
  if(error.innerHTML.length > 0){
	   return false;
  } 
	   else{
		   $("#lastname").css("border-bottom", "2px solid #00ff00");
	   return true;
	   }

}

function validateEmail(form){
	 var error=document.getElementById("emailError");

     var email=form["email"].value;
     error.innerHTML="";
      var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if( email==null || email==""){
	   $("#email").css("border-bottom", "2px solid #ff0000");
      error.innerHTML="Input Your Email";
      return false;
    }

 else if(!email.match(regx)){
	 $("#email").css("border-bottom", "2px solid #ff0000");
    error.innerHTML="Invalid Email";
    return false;
 }
   if(error.innerHTML.length > 0){
	   
	   $("#email").css("border-bottom", "2px solid #ff0000");
	   return false;
   }
	   else{
		   $("#email").css("border-bottom", "2px solid #00ff00");
	   return true;
	   }
}



function validate(){
    var f=document.getElementById("save-student");
    return (validateFname(f) && 
    		validateLname(f) &&
    		validateEmail(f)
    	);
}


function blank(button) {
	var form = document.getElementById("save-student");
	if(button == "fname"){
		validateFname(form);
	}else if(button == "lname"){
		validateLname(form);
	}else if(button == "email"){
		validateEmail(form);
	}
	
	
	
}

