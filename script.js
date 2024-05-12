const items= document.querySelector("#item");
const todo = document.querySelector("#to-do-Box")

items.addEventListener("keyup", (e) => {
  // console.log(e)
  if(e.key ==="Enter") {
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
   (this.classList.toggle("done"))
 })
listitem.querySelector("i").addEventListener("click", function(){
  listitem.remove()
})
}
