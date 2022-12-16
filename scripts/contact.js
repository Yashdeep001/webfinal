// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

/*const submitButton=document.getElementById('submit-button');
submitButton.onclick=function(e){
    e.preventDefault();
    console.log('clicked');
}*/
//const formElement=document.getElementsByTagName('form').item(0);

const formElement=document.querySelector('form');

formElement.onsubmit=function(e){
    e.preventDefault();
    //console.log('submitted');
    formElement.innerHTML='<h2>Thank for your message!</h2>';
}

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

