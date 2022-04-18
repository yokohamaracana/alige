function send(){
    var arr = document.getElementsByTagName('input');
    var name = arr[0].value;
    var phonenumber = arr[1].value;
    var address = arr[2].value;
    var check1 = arr[5].checked;
    var check2 = arr[6].checked;
    var check3 = arr[7].checked;
    var gender = "";
    var favoritecoffee = "";
    if(arr[3].checked){
        gender = "Male";
    }else{
        gender = "Female";
    }
    for(var i=5; i<=7; i++){
        if(arr[i].checked){
            favoritecoffee = favoritecoffee + arr[i].value + " ";
        }
    }
    if(name == "" || phonenumber == "" || address == ""){
        alert("please fill all fields");
        return;
    }
    if(isNaN(phonenumber)){//is not a number
        alert("phonenumber must be a number");
        return;
    }
    if(check1||check2||check3){

    }else{
        alert("least one favoritecoffee must be checked");
        return;
    }
   var choice =  confirm('confirm your information\n'+name+"\n"+phonenumber+"\n"+address+"\n"+gender+"\n"+favoritecoffee);
    if(choice == 1){
        alert('information sent');
    }
}
function resetForm(){
    document.getElementsByTagName('form')[0].reset();
}