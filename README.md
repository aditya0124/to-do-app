# to-do-app
JS EXPLAINATION
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

AT LINE 5 :-
 console.log(e)
  console.log(e.key)//jo key press hoga wah mil jayega

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      
      AT LINE 7
      1. console.log(items.value) work with both arrow and normal fn
    
    2. console.log(this.value) not work with arrow fn, it search this near it, not lexically scoped
    
    3. console.log(e.target.value)//printthe content inside box

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

AT LINE 23 
(this.classList.toggle("done")) ===>>  this refers to li which we created up AND we toogle done or not done if our task done click on items it mark done so we add done in his classlist and vice-vera
 })
