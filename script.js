// // // // // // // // // // // alert('Hello World!');
// // // // // // // // // // // confirm("Are you sure you want to delete this?");
// // // // // // // // // // // document.write('Hello World');
// // // // // // // // // // // console.log('Hello World');



// // // // // // // // // // // variable
// // // // // // // // // // x = 10;
// // // // // // // // // // // firstName = 'Doe';
// // // // // // // // // // // console.log(x);
// // // // // // // // // // // console.log(firstName);
// // // // // // // // // // // alert(firstName);
// // // // // // // // // // // document.write(x);
// // // // // // // // // // console.log(x);


// // // // // // // // // firstName = prompt('Enter Your First Name');
// // // // // // // // // lastName = prompt('Enter Your Last Name');
// // // // // // // // let num1 = prompt("Enter your first number");
// // // // // // // // let num2 = prompt("Enter your second number");
// // // // // // // // let totalnum = parseFloat(num1) +parseFloat(num2);
// // // // // // // // console.log(typeof(totalnum))
// // // // // // // // // console.log(firstName , lastName)
// // // // // // // // // console.log(firstName+ " " + lastName)
// // // // // // // // console.log(`${num1} + ${num2} = ${totalnum}`)



// // // // // // // let Location1 = ' Akowonjo road';
// // // // // // // let address = "47 Herbert Macaulay Road, off \"University\", Akoka Yaba Lagos State";
// // // // // // // // console.log(typeof(address));
// // // // // // // // console.log(address.slice(0, 20));
// // // // // // // // console.log(address.indexOf('4'));
// // // // // // // // console.log(address.lastIndexOf('e'));
// // // // // // // // console.log(address.length);
// // // // // // // // console.log(address.replace('Lagos', 'Ogun'));
// // // // // // // // console.log(address.endsWith('e'));
// // // // // // // // console.log(address.startsWith('4'));
// // // // // // // // console.log(address.trimStart());
// // // // // // // // console.log(address.trim());
// // // // // // // // console.log(address.concat(Location1));
// // // // // // // // console.log(address.toUpperCase());
// // // // // // // // console.log(address.toLowerCase());
// // // // // // // // let x = address.split(' ').reverse().join(' ');
// // // // // // // // let x = address.split(' ');
// // // // // // // // x.push('Digital');
// // // // // // // // x.unshift('Purple');
// // // // // // // // x.splice(4,0, 'Purple');
// // // // // // // // x.pop();
// // // // // // // // x.shift();
// // // // // // // // x[3]='message';
// // // // // // // // // console.log(x);



// // // // // // // let num1 = parseFloat('10');
// // // // // // // console.log(typeof(num1));
// // // // // // let num1 = 10;
// // // // // // console.log(num1.toFixed(10));
// // // // // // console.log(num1.toPrecision(3));


// // // // // let x = false;
// // // // // console.log(typeof(x));
// // // // // console.log(x ? 'yes' : 'no');


// // // // // function welcome(){
// // // // //     console.log("Hello Good Morning")
// // // // // }
// // // // // welcome()
// // // // // welcome()
// // // // // welcome()
// // // // // welcome()
// // // // // welcome()


// // // // // function johnson(x, y){
// // // // //     return x + y
// // // // // }
// // // // // console.log(johnson(50, 90))

// // // // // function fullName(){
// // // // //     let firstName = prompt("Enter Your First Name")
// // // // //     let lastName = prompt("Enter Your Last Name")
// // // // //     totalName = `${firstName} ${lastName}`
// // // // //     console.log(totalName.slice(0, 5))
// // // // // }
// // // // // fullName()


// // // // // ES6
// // // // // let y = () => {
// // // // //     console.log('Welcome into class')
// // // // // }
// // // // // y()


// // // // // let x = (u, y) => {
// // // // //     return u + y 
// // // // // }
// // // // // console.log(x(30, 20))


// // // // //DOM
// // // // // let tunde = document.getElementsByClassName('click');

// // // // // for(let i of tunde){
// // // // //     console.log(i)
// // // // //     i.innerHTML='Click me'
// // // // // }
// // // // // let tunde2 = document.querySelector('#click');
// // // // // tunde2.innerHTML='Welcome'
// // // // // console.log(tunde)
// // // // // tunde.textContext='Click';
// // // // // tunde.style.backgroundColor='red'
// // // // // tunde.style.width='200px'


// // // // // let bolu = document.getElementsByClassName('myclass')[0];
// // // // // bolu.innerHTML='one';

// // // // // let bolu1 = document.getElementsByClassName('myclass')[1];
// // // // // bolu1.innerHTML='two';

// // // // // let bolu2 = document.getElementsByClassName('myclass')[2];
// // // // // bolu2.innerHTML='three';

// // // // // let bolu3 = document.getElementsByClassName('myclass')[3];
// // // // // bolu3.innerHTML='four';


// // // // // let x = document.getElementById('click')
// // // // // x.innerHTML='myclick';

// // // // // let x = document.getElementsByTagName('li')
// // // // // for(let i of x){
// // // // //     i.innerHTML='Welcome'
// // // // // }

// // // // // let x = document.createElement("h1")
// // // // // x.innerHTML="Welcome Here";
// // // // // document.body.appendChild(x)
// // // // // x.remove()

// // // // let x = document.querySelector('.headerContainer');
// // // // console.log(x)

// // // // function tunde(){
// // // //     return(
// // // //         x.innerHTML = `
// // // //     <main >
// // // //         <div class= "mylogo" >
// // // //             Logo
// // // //         </div>
// // // //     </main>
// // // //     `)
// // // // }
// // // // tunde()


// // // // let people = [
// // // //     {
// // // //         name:'John',
// // // //         state:'Delta',
// // // //         city:'Warri'
// // // //     },
// // // //     {
// // // //         name:'Daniel',
// // // //         state:'Ogun',
// // // //         city:'Abeokuta'
// // // //     },
// // // //     {
// // // //         name:'Jane',
// // // //         state:'Oyo',
// // // //         city:'Ibadan'
// // // //     },
// // // //     {
// // // //         name:'Titi',
// // // //         state:'Lagos',
// // // //         city:'Ikeja'
// // // //     },

// // // // ]

// // // // let x = document.querySelector('.headerContainer');
// // // // console.log(x)

// // // // let dis = () => {
// // // //     x.innerHTML = people.map((y) => {
// // // //         console.log(y)
// // // //         let {name, state, city}
// // // //     })
// // // // }



// // // let mybtn = document.getElementById('btn')
// // // let y = document.querySelector('.display')

// // // console.log(mybtn)

// // // // mybtn.addEventListener('click', () => {
// // // //     console.log('you click')
// // // //     y.innerHTML = 'Welcome'
// // // // })

// // // mybtn.addEventListener('click', daniel)

// // // function daniel(){
// // //     console.log('you click')
// // //     y.innerHTML = 'Welcome'
// // // }


// // let on = document.querySelector('.turnon')
// // let bulb = document.querySelector('.tunde')
// // let off = document.querySelector('.turnoff')

// // on.addEventListener('click', () => {
// //     bulb.innerHTML = '<img src="./pic_bulbon.gif" alt="">'
// // })

// // off.addEventListener('click', () => {
// //     bulb.innerHTML = '<img src="./pic_bulboff.gif" alt="">'
// // })



// // https://jsonplaceholder.typicode.com/posts
// // let url = "https://jsonplaceholder.typicode.com/posts";

// // let tunde = async () => {
// //     let otg = await fetch(url)
// //     let kunle = await otg.json()
// //     let john = document.querySelector('.api')
// //     john.innerHTML = kunle.map((x) => {
// //         let {body, title} =x
// //         return(
// //             `
// //             <div>
// //     <h1>Title:${title}</h1>
// //     <p>Body:${body} </p>
    
// //     </div>
// //             `
// //         )
// //     })
    
// //     console.log(john);
// //     console.log(kunle);
// // }
// // tunde()



// let employee = {
//     name:'Sam',
//     state:'Ogun State',
//     city:'Ijebu'
// }
// // // console.log(employee['name'])

// // let {name, state, city} =  employee;
// // console.log(state);


// // let firstName = "Mary";
// // localStorage.setItem('x', firstName)
// // let y = localStorage.getItem('x')
// // console.log(y)

// localStorage.setItem('data', JSON.stringify(employee))
// let x = JSON.parse(localStorage.getItem('data'))
// console.log(x)


// class Person{

//     constructor(name, age){
//         this.name = name
//         this.age = age


//     }
//     myinfo(){
//         console.log(`Name${this.name}  Age:${this.age}`)
//     }
// }

// // let x = new Person('Emeka, 10')
// // console.log(x.myinfo())


// class Employee extends Person{
//     constructor(name, age, jobTitle, salary){
//         super(name, age)
//         this.jobTitle = jobTitle
//         this.salary = salary
//     }
//     myEmployee(){
//         this.myinfo()
//         console.log(`Job: ${this.jobTitle} salary: ${this.salary}`)
//     }
// }

// let x = new Employee('Emeka', 10, 'Software Developer', 10000)
// console.log(x.myEmployee())

class car {

    constructor(Make, Model, Color, Year){
        this.Make = Make
        this.Model = Model
        this.Color = Color
        this.Year = Year


    }
    myinfo(){
        console.log(`Make${this.Make}  Model:${this.Model} Color:${this.Color} Year:${this.Year}`)
    }
}

let x = new car('Toyota, Corolla, Red, 2020')
console.log(x.myinfo())