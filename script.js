let get = document.getElementById("get");

async function myfun(){
    let getting = await fetch("https://icanhazdadjoke.com/",{
        headers :{
            accept : "application/json"
        }
    })
    let joke = await getting.json();
    let data = joke.joke;
    get.innerHTML = data;
    // console.log(data);

}
myfun();