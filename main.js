function validator(options){
    var formElement=document.querySelector(options.form);
   function validate(inputElement,rule){
    var errorMessage = rule.test(inputElement.value)
    var errorLocation=inputElement.parentElement.querySelector(".form-message")
             if (errorMessage){
                errorLocation.innerText = errorMessage
                
             }
    else{
    errorLocation.innerText = ""
    }
   }
    if (formElement){
        options.rules.forEach(rule => {
            var inputElement = document.querySelector(rule.selector);
            console.log(inputElement)
            if (inputElement){
                inputElement.onblur=function(){
                    validate(inputElement,rule);
                  
                }

                
            }
            
        });
    }
   
}
validator.isText=(selector)=>{
    return{
        selector:selector,
        test:(value)=>{
            return value ?undefined : "bạn chưa điền vào form "
        }
    }
}
validator.isEmail=(selector)=>{
    return{
        selector:selector,
        test:(value)=>{
            var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value)?undefined : "Email của bạn không chính xác "
        }
    }
}