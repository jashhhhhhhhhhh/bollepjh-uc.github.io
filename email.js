var visible = false;
function showOrHideEmail(){
  if (visible){
    document.getElementById('email').innerHTML=" Show my Email";
    visible=false;
  }
  else{
    var myEmail="<a href='mailto:bollepjh" +"@"+
                "mail.uc.edu'>bollepjh"+"@"+"mail.uc.edu</a>";
    document.getElementById('email').innerHTML=myEmail;
    visible= true;
  }
}
