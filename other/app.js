$(document).ready(function(){
    function header(){
        var navBer = document.getElementById("nave"); navication
            navBer.addEventListener('change',()=>{
                if(navBer.checked == true){
                    document.getElementById("navication").style.display="block"; 
                }
                if(navBer.checked == false){
                    document.getElementById("navication").style.display="none"; 
                    document.getElementById("navication").style.display="none"; 
                }
            })
        
    
    }
        
    header()
})