function ac(){
     document.getElementById("result").value="";
}
function show(input){
     document.getElementById("result").value+=input;
}
function calc(){
  var output;
  output =eval(document.getElementById("result").value);
  document.getElementById("result").value=output;
}