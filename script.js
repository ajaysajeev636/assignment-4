$( "#formvalidate" ).validate({
    rules: {
      name: {
        required: true,
      },
      email:{
        required: true,
        minlength: 5,
      },
      phone:{
        required: true,
        minlength: 10,
        maxlength: 12,
      },
      age:{
         
        ageRange:true
      },
      gender:{
        required:true,
        minlength: 4,
        maxlength: 15,
      },
      adress:{
        required: false,
        maxlength: 50,
      }
    },
      
    

  });

  $("#name").rules("add",{
    required: true,
    minlength: 5,
    messages:{
        minlength: "please enter at least 5 caracter"
    }
  });

  $("#age").rules("add",{
    required: true,
    ageRange: true,
    messages:{
        
        ageRange: "age must be between 18 and 120"
    }
  });
