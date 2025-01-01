function Welcome(){
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("family").value;
   console.log(name)
    let text = `Welcome ${name}, ${lastName}!`;
    document.getElementById("fullname").innerHTML = text;
}

