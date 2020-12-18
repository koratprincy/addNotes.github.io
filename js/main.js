console.log('attached');

    let remove = document.querySelector(".remove");
        remove.addEventListener('click',function(){
        let target = document.querySelector("#stick");
    
        if( target != null){
            target.style.display ="none";
            console.log('removed');
        }
        else{
            console.log('null');
        }
    });

    let addTxt = document.querySelector("#addTxt");
    let msg = addTxt.value;
    let add = document.querySelector('.btn1');
    add.addEventListener('click',function(event) {
        let adds = document.querySelector('#stick');
        adds.innerHTML = `<div class="card-body">
        <h5 class="card-title">Note</h5>
        <p class="card-text">${addTxt.value}</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>`;
      console.log('ok');
        
    });





