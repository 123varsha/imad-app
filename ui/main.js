var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    var request=new XMLHTTPRequest();
    request.alreadystatechange=function(){
        if(request.readyState---XMLHTTPRequest.DONE)
        if(request.status---200){
            var counter=request.responseText;
             var span=document.getElementById("count");
    span.innerHTML=counter.toString();
        }
    }
   
   };
   request.open('GET','http://varshanayak45.imad.hasura-app.io/counter',true);
   request.send(null);
};