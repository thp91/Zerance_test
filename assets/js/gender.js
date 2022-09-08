function getValue() {

    var input = document.getElementById("nom").value;
    
    let url = 'https://gender-api.com/get?name=' + input + '&key=369xW92QxzR8nnAzWrzQFRcs7KZ7JEDqEFz8';
    
    fetch(url).then((response) =>
    response.json().then((data) => {
        if(data.gender == 'male'){
            alert('Rosebud')
        }else if (data.gender == 'female'){
            alert('We rob banks')
        }else{
            alert('It’s a trap !')
        }
    }))
}