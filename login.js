<!DOCTYPE html>
<html>
<head>
	
	
	
</head>



<body>
	
	



<script language="javascript">

function loginPage(form) {
if (form.userName.value=="@user1") { 
if (form.passWord.value=="t8#!%%>") {              
location="index.html" 

} else {
alert("Password မှားယွင်းနေပါသည်")
}
} else {  alert("Username မှားယွင်းနေပါသည်")
}
}

</script>






<div>	
<form> 
	
<table style="margin-left: 40%;">
	
	
<tr>
	<td colspan="3">
		<h1 style="text-align:center; color: green;background-color: orange;color: black;border-radius: 70px;">
			WELCOME!
		</h1>
	</td>
</tr>
<tr>
	<td>
		<h2 style="color: white;background-color: darkred;border-radius: 4px;">Username</h2>
	</td>
	<td width="10">
	</td>
	<td>	
		<input type="text" name="userName" autofocus="autofocus" style="font-size:18px; text-indent:5px;" placeholder="Enter your Username">
	</td>
</tr>
<tr>
	<td>
		<h2 style="color: white;background-color: slateblue;border-radius: 4px;">Password</h2>
	</td>
	<td width="10">
	</td>
	<td>
		<input type="password" name="passWord" autofocus="autofocus" style="font-size:18px; text-indent:5px;" placeholder="Enter your Password">
	</td>
</tr>
<tr>
	<td colspan="3" style="text-align:center;">
	<br />
		<input type="button" value="Login" onClick="loginPage(this.form)" style="margin-right:20px; border-radius:4px; background-color:deepskyblue;color: white; font-size:18px; cursor:pointer;">
		<input type="reset" value="Reset" style="font-size:18px; cursor:pointer; border-radius:4px; background-color:orange;">
	<br />
	<br />
	</td>
</tr>
</table>

</form>
</div>


</body>


</html>