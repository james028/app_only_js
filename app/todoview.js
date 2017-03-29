document.addEventListener("DOMContentLoaded", function(event){
    
    var addtodoinput = document.querySelector("#todo-input"),
        addtodobtn = document.querySelector("#add-todo-btn");
    
    addtodobtn.addEventListener("click", function(event){
        var inputvalue = addtodoinput.value;
        alert(inputvalue);
        
    });
    
});