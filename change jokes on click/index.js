
// GET https://icanhazdadjoke.com/

let jokes = document.querySelector('#joke')
let jokeBtn = document.querySelector('#jokebtn')

// let generateJokes = () =>{

//     const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }


//     fetch("https://icanhazdadjoke.com/",setHeader)
//     .then((res)=> res.json())
//     .then((data)=>{
//         jokes.innerHTML = data.joke
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
// }



 
// jokeBtn.addEventListener('click',generateJokes)
// generateJokes();




// (2nd method using async await)

// async function generateJokes(){

// }

 let generateJokes = async () =>{

        const setHeader = {
            headers : {
                Accept : "application/json"
            }
        }

        try{
            const res =  await fetch('https://icanhazdadjoke.com/',setHeader)

            const data = await res.json();
            jokes.innerHTML = data.joke
        }catch(error){
            console.log(error)
        }
      
    }
       
    jokeBtn.addEventListener('click',generateJokes)
    generateJokes();
