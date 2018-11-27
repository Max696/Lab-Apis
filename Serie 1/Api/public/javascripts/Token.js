function GenerateToken(){
    let mkey = document.getElementById('password').value;
    let content = document.getElementById('jsonContent').value;

    
    document.location.href = "/content/"+ mkey +"&" + content;  
 }