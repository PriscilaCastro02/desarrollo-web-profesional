function Registro(){

    var username = document.forms['registro']['usuario'].value;
    var name = document.forms['registro']['nombre'].value;
    var password = document.forms['registro']['password'].value;
    var password2 = document.forms['registro']['password2'].value;
    var email = document.forms['registro']['correo'].value;
    var phone = document.forms['registro']['telefono'].value;
    var checkbox = document.forms['registro']['terminos'].value;


    if(username==null || username=="" || name==null || name=="" || password==null || password=="" || password2==null || password2=="" || email==null || email=="" || phone==null || phone=="" || checkbox==null){
        console.log('XD');
    }else{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: '¡Registro exitoso!'
          })
          //await sleep(3200);
          //indow.location.replace("../file.html");
    }
    }


        