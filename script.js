function getFormvalue() {
     let firstName = document.getElementById("firstName").value.trim()
     let lastName = document.getElementById("lastName").value.trim()
     let btn = document.getElementById("btn")

	  alert(`${firstName} ${lastName}`)
	 
  
}
btn.addEventListener('click' , getFormvalue)