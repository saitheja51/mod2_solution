function check(){
	var email1 = document.getElementById('emailad');
	var email2 = document.getElementById('email_repeat');
	if (email1.value != email2.value) {
	 	alert("The two emails must match!");
	 }
}

function nicknamefunction(){
	if (document.getElementById('yesNick').checked) {
		document.getElementById('nick').style.display="inline";
		document.getElementById('nickname').setAttribute('required',true);
	}
	else {
		document.getElementById('nickname').removeAttribute('required');
		document.getElementById('nick').style.display="none";
	}
}

function billingFunction(){

	if(document.getElementById('same').checked)
	{
		var name=document.getElementById('shippingName').value;  
		var zip=document.getElementById('shippingZip').value;	

		document.getElementById('billingName').value=name;   
		document.getElementById('billingZip').value=zip;
	}

	else
	{
		document.getElementById('billingName').value="";
		document.getElementById('billingZip').value="";
	}
}

function countfunction(){
	var count=0;
	if(document.getElementById('req').checked){
		count+=1;
		if(count>3){
		alert("select only 3");
		}
	}
	else{
		alert("compulsory to select the electives");
	}
}