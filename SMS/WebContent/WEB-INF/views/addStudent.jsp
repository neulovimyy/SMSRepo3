<%@include file="taglibs.jsp" %>

		<h2>Add Student Data</h2>
		<form:form id="save-student" method="POST" commandName="command" action="/SMS/save.html">
	   		
			    	<c:if test="${!empty students}"> 
				       
				     		<form:label for="student_number"  path="id">ID #:</form:label>
				        	<form:input class="form-control" path="id" name="Id"/>    
				        
			    	</c:if>
			   
			        	<form:label for="first-name" path="firstName">First name:</form:label>
			       			<form:input path="firstName" name="firstName" id="firstname" placeholder="Enter first name..." onblur="return blank(\"firstName\")"/>
			      
			        	<form:label for="middle-name" path="middleName">Middle name:</form:label>
			       		 	<form:input path="middleName" name="middleName" id="middleName" placeholder="Enter middle name..." onblur="return blank(\"middleName\")"/>
			       
				     	<form:label for="last-name" path="lastName" >Last name:</form:label>
			        		<form:input path="lastName" name="lastName" id="lastName" placeholder="Enter last name..." onblur="return blank(\"lastName\")"/>
                   
			        	<form:label for="birth-date" path="birthDate" >Date of Birth:</form:label>
			        		<form:input path="birthDate" name="birthDate" id="birthDate" placeholder="Enter date of birth..." onblur="return blank(\"lastName\")"/>
                   
			        	<form:label for="civil-status" path="civilStatus" >Civil Status:</form:label>
			      			<form:input path="civilStatus" name="civilStatus" id="civilStatus" placeholder="Enter civil status..." onblur="return blank(\"lastName\")"/>
                  
			        	<form:label for="gender" path="gender" >Gender:</form:label>
                    		<form:input path="gender" name="gender" id="gender" placeholder="Enter gender..." onblur="return blank(\"lastName\")"/>
                 
			        	<form:label for="last-name" path="mobileNum" >Contact #:</form:label>
			      			<form:input path="mobileNum" name="mobileNum" id="lastName" placeholder="Enter contact number..." onblur="return blank(\"lastName\")"/>

			      	<input onclick="return validate()" id="save" type="submit" value="Submit" />
			      	
	</form:form>