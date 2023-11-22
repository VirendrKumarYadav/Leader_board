addForm();
function addForm(){
    const inp = document.querySelectorAll('input');
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        let name = inp[0].value, address = inp[1].value, mobile = inp[2].value, amt = inp[3].value, error_1 = document.querySelector('.error_msg');
        console.log(name + " " + address + " " + mobile + " " + amt);
    
        // massage 
        if (name == '' && mobile == '' && amt == '' && address == '') {
            error_1.style.display = 'block';
        } else {
            // Add Row in table 
            //  let acNo=acNo.inner
            let acNo = document.querySelectorAll('.ac');
            let ac = acNo[acNo.length - 1].textContent;
            let num = ac.split('-');
            console.log(num[2]);
            let lastAcNum = parseInt(num[1]);
            lastAcNum++;
            let newRgNo;
            if (lastAcNum < 10) {
                newRgNo = "RG-00" + lastAcNum;
            } else if (lastAcNum < 100) {
                newRgNo = "RG-0" + lastAcNum;
            }
    
            // let accNo = par
            let parent = document.querySelector('tbody');
            let child = document.createElement('tr');
            child.setAttribute('class', "regRo");
            child.innerHTML = `
                <td class="ac" > ${newRgNo}</td>
                <td>${name}</td>
                <td>${address}</td>
                <td>${mobile}</td>
                <td>${amt}</td>
               <td class="edit"><span class="material-symbols-outlined edit_btn">
               edit</span></td>
               <td class="delete"><span class="material-symbols-outlined delete_btn">
               delete </span></td>`;
            parent.appendChild(child);
        }
        deleteBtn();
        editFuntion();
    });
  
}
deleteBtn();
editFuntion();
function deleteBtn(){
    let dlt = document.querySelectorAll('.delete_btn');
    dlt.forEach((event) => {
        event.addEventListener('click', (btn) => {
            // console.log(btn.target);
            let txt = btn.target;
            btn.target.parentElement.parentElement.remove();
        })

    })
}
    // this delete for new defined function
    
function editFuntion(){
    let edit = document.querySelectorAll('.edit_btn');
    console.log("edit fun call");
    edit.forEach((event) => {
     event.addEventListener('click', (btn) => {
       // console.log(btn.target);
       let edit_data=btn.target.parentElement;

       for (let index = 0; index < edit_data.parentElement.children.length; index++) {
        // if(!edit_data.parentElement.children[index].classList.contains("edit_btn")){
            edit_data.parentElement.children[index].contentEditable=true;
        // }
        
       }
    //    edit_data.parentElement.child
       
        
   })

})
}
 

// // this delete for predefined html
// let dlt = document.querySelectorAll('.delete_btn');
// dlt.forEach((event) => {
//     event.addEventListener('click', (btn) => {
//         console.log(btn.target);
//         let txt = btn.target;
//         btn.target.parentElement.parentElement.remove();
//     })
// })
//     // edit button
//     let edit = document.querySelectorAll('.edit_btn');
//     edit.forEach((event) => {
//         event.addEventListener('click', (btn) => {
//             // console.log(btn.target);
//             let txt = btn.target;
//             let edit_data=btn.target.parentElement.parentElement;
//            edit_data.childNodes.forEach((a)=>{
//             // need to ask with mam
//             // if(!a.classList.include("edit_btn")){
//                 a.contentEditable=true;
//             // }
             
//            })
//         })

//     })
