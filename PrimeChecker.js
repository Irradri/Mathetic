
        $(function (){
            $("#callhimagain").mouseenter(function (){
                $("#villain").show(1000);
            });
        });
        $(function (){
            $("#CHECK").click(function (){
                var num=$("#NUM").val();
                var isPrime=true;
                if (num<2) {
                    $("#output").text("It is neither a composite nor a prime number")
                }
                else{
                    for(i=2;i<num;i++){
                        if (num%i==0) {
                            isPrime=false
                            break;
                        }
                    }
                }
                if (isPrime==true && num>=2){
                    $("#output").text("It is a prime number")
                }
                if (isPrime==false && num>=2){
                    $("#output").text("It is a composite number")
                }
            });
        });