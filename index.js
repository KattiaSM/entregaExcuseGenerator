window.onload = () =>{
   document.querySelector("excuse").innerHTML = generatorExcuse();
   console.log("aqui_estoy")
 }; 
    let generatorExcuse = () => {
        let who = ['The dog','My grandma','His turtle','My bird'];
        let action = ['ate','peed','crushed','broke'];
        let what = ['my homework', 'the keys', 'the car'];
        let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

        let random_who = Math.floor(Math.random() * who.length);
        let random_action = Math.floor(Math.random() * action.length);
        let random_what = Math.floor(Math.random() * what.length);
        let random_when = Math.floor(Math.random() * when.length); 

         return who[random_who] + ' ' + action[random_action]+ ' ' + what[random_what] + ' ' + when[random_when];

    };