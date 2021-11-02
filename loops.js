
        // for loop

        for (i = 0; i < 10; i++) {
            console.log("Namaste world")
        }

        // while loop

        i = 0; //initialize variable

        while (i < 10)// conditions in while loop separeted with ; if more than 1
        {
            console.log("Hello MoTo")// body
            i++             // increment so that we can exit the loop

        }
        // here we initialize i two times but didn't get error
        // becase i in the for loop is only define in the loop

        // do...while loop

        let j = 0;        //here if we intialize i again then we get the error
        //so we have to initialize a new variable
        do {
            console.log("Nokia is better than iphone")
            j++
        }
        while (j > 10);

        // here even the condition in while is not satisfying
        // It executed one time then check for the condition for next iteration

        //for..in loop

        //we have to define a object first ....It is like a box having diffrent things
        // ans then we can access these thing using loop

        let animal = {
            name: "Zebra",// have look at the syntax 
            legs: "4"
        }
for (let key in animal) {
    // console.log(key) // when we want to access the elements in object or dabba
            
    console.log(key, animal[key])// key and its value print at the same time
}
        //  let define an array
            let names = ["Harshit", "Anubhav", "Chaman", "Chahat"];
            
            // for.....in loop

            for(let index in names){            // let k baad index variable declare 
                console.log(index)  //index like array has 0 1 2 3 as index location
            }
            // for....of loop

        for (let index of names) {
            
            console.log(index) // variable ka naam likhate hai
                               // index-vise naam print ho jayege
                
}
// let x = 5; y = 10;
// x = x % y;
// console.log(x)



            


        
