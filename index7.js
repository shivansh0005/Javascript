function a(){
    c();
   function c(){
    console.log(d);
   }
}

var d=10;
a();

//----> Simple word understanding Any variable can be accessed if either it is in the local memory or memory of its parent(In technical term it is known as lexical enviourment)---->trying to find it in scope of other functions is known as scope chain