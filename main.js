mouseEvent="empty"
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="blue"
width_of_line=2
radius=10
canvas.addEventListener("mousedown", myMousedown)
function myMousedown(){
  mouseEvent="mousedown"
  color=document.getElementById("color").value;
  width_of_line=document.getElementById("width").value;
  radius=document.getElementById("radius").value;
}
canvas.addEventListener("mouseup", myMouseup)
function myMouseup(){
  mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave", myMouseleave)
function myMouseleave(){
  mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove", myMousemove)
function myMousemove(e){
    current_position_of_mouse_X=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y=e.clientX - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
      ctx.beginPath()
      ctx.strokeStyle=color
      ctx.linewidth= width_of_line
      ctx.arc(current_position_of_mouse_X, current_position_of_mouse_Y, radius,0, 2*Math.PI)
      ctx.stroke()
    }
}
