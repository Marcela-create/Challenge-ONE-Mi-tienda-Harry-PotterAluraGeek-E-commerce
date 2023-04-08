(()=>{
    const btn = document.querySelector ("[data-form-btn]");
    
    const createTask=(evento) =>{
      evento.preventDefault();
      const input =document.querySelector("[data-form-input]");
      const value= input.value;
      const list=document.querySelector('[data-list]');
      const task =document.createElement('li');
      task.classList.add('card');
      // Lo que vamos a hacer es decir: input.value va a ser igual ahora a un string vacío. ya logramos que se limpiara nuestro input.
      input.value='';
      //backticks//cambiamos hacer curso de DOM por value
      console.log(checkComplete());
      const taskContent= document.createElement('div');
      
      const titleTask = document.createElement("span");
      titleTask.classList.add("task");
      titleTask.innerText=value;
      taskContent.appendChild(checkComplete());
      taskContent.appendChild(titleTask);
      
      const content=`
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML= content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    
    console.log(content); //en vez de task ponemos content
    };
    console.log(btn);
    
    //Arrow functions o funciones anónimas
    btn.addEventListener('click',createTask);
    
    const checkComplete =()=>{
      const i=document.createElement("i");
      i.classList.add('far','fa-check-square','icon');
     i.addEventListener("click",completeTask);
      return i
    };
    //Inmediately invoked function expression IIFE
    const completeTask =(event)=>{
        const element = event.target;
        element.classList.toggle('fas');
        element.classList.toggle('completeIcon');
        element.classList.toggle('far');
    };
    
    
    
    })();
    
    
    
    
    
    
    
    