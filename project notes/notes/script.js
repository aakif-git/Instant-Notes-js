 //selecting add-title pop-over button
 var popover = document.querySelector(".pop-over")
 var addtitle = document.querySelector(".add-title")
 var addbutton = document.getElementById("add-symb")

 addbutton.addEventListener("click",function(){
    popover.style.display="block"
    addtitle.style.display="block"
 })
  
 var cancelnote = document.getElementById("cancel-note")
 cancelnote.addEventListener("click",function(event){
    event.preventDefault()
    popover.style.display="none"
    addtitle.style.display="none"
 })

 //select container,add-note,note-title,note-date,note-desc

 var container= document.querySelector(".container")
 var addnote= document.getElementById("add-note")
 var notetitle= document.getElementById("note-title")
 var noteda= document.getElementById("note-da")
 var notedescrip= document.getElementById("note-descrip")

 addnote.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","con-name")
    div.innerHTML=`<h2>${notetitle.value}</h2>
            <h5>${noteda.value}</h5>
            <p>${notedescrip.value}</p>
                 <button onclick="deletenote (event)">Delete</button>`
    container.appendChild(div)
    popover.style.display="none"
    addtitle.style.display="none"

           
 })

 function deletenote(event)
 {
   event.target.parentElement.remove()
 }
 