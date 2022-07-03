new Vue({
    el : ".container" ,
    data : {
        InputValue : '',
        ToDosArray : [] ,
        ThemeColor :" #eee" ,
        themeFlag : true
        ,
        currentIcon : "fa-moon",
        moonIcon : "moonIcon" ,
        IconElem : document.querySelector('i') ,
        bodyElem : document.body ,
        ToDoColor :{
            backgroundColor : "#fdbb2d"
        }
    } ,
    methods : {
        AddBtnHandler : function(){
            if(this.InputValue){
                this.ToDosArray.push(this.InputValue);   
                this.InputValue = '';
            }
        },
        changeThemeHandler : function(){
            if(this.themeFlag){
                this.ThemeColor = "black" ;
                this.themeFlag = false ;
                this.currentIcon = "fa-sun" ;
                this.moonIcon = "sunIcon";
                this.bodyElem.style.backgroundColor = "#79CBCA";

            }else{     
                this.ThemeColor = "#eee" ;
                this.themeFlag = true ;
                this.currentIcon = "fa-moon" ;
                this.moonIcon = "moonIcon"
                this.bodyElem.style.backgroundColor = "#232526";
            }
        } ,
        ToDoInputHandler : function(event){
            if(event.key == 'Enter'){
                if(this.InputValue){
                    this.ToDosArray.push(this.InputValue);   
                    this.InputValue = '';
                }
            }
        },
        DeleteToDo : function(event){
            event.target.remove();
        }
    }
})

