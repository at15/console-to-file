object mie {
    def useCase = {
        val x = 1
        x match {
            case 1 => "mie"
            case _ => "mie2"
        }
    }

    def ifConstant = {
        val x = 2;
        if(x>1){
            println("x>1")
        }
        if(true){
            println("I am true")
        }
    }
}