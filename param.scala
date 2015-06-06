abstract class UnusedParameter{
  def call(phone:String,name:String) = {
    println("call " + name)
  }

  def multipleUnused(p:String,s:String) = {
    println("no use no use la la la")
  }

  def iamabstract(name:String)
}