const items= document.querySelector("#item");
const todo = document.querySelector("#to-do-Box")

items.addEventListener("keyup", (e) => {
  // console.log(e)
  //console.log(e.key)//jo key press hoga wah mil jayega
  if(e.key ==="Enter") {
    //1. console.log(items.value) work with both arrow and normal fn
    
    //2. console.log(this.value) not work with arrow fn, it search this near it, not lexically scoped
    
    //3. console.log(e.target.value)//printthe content inside box
    addtodo(e.target.value)
    e.target.value=""
  }
});


const addtodo = (item) => {
  const listitem = document.createElement("li");
  listitem.innerHTML= ` 
  ${item}
  <i class="fas fa-times"></i>
  `;
  todo.appendChild(listitem);
 //append child of to do

 listitem.addEventListener("click", function(){
   (this.classList.toggle("done"))//this refers to li which we created up AND we toogle done or not done if our task done click on items it mark done so we add done in his classlist and vice-vera
 })
listitem.querySelector("i").addEventListener("click", function(){
  listitem.remove()
})
}
