
///using promise////

// console.log('pesrson1: shows ticket')
// console.log('person2:  shows tickes')

// const promisewifeBringingTickets=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket')
//     },3000)
// })

// const getPopcorn=promisewifeBringingTickets.then((t)=>{
//     console.log(`wife: i have the tickes`)
//     console.log(`husband: we should go in`)
//     console.log(`wife: no i am hungry`);
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} popcorn`)
//     })
// })

// const getButter=getPopcorn.then((t)=>{
//     console.log(`husband:i got some popcorn`)
//     console.log(`husband:we should go in`)
//     console.log(`wife:i need butter on my popcorn`);
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} butter`)
//     })
// })
// const getcoldrinks=getButter.then((t)=>{
//     console.log(`wife:i need also coldrinks`)
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} coldrinks`)
//     })
// })
// getcoldrinks.then((t)=>console.log(t))

// console.log('person4:  shows ticket')
// console.log(`person5:  shows ticket`)



//////////using Async and await////////


// console.log('person1: shows ticket')
// console.log('person2: shows ticket')

// const preMovie=async()=>{

//     const promisewifeBringingTickets=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket')
//     },3000)
// })

// const getPopcorn=new Promise((resolve,reject)=>
// resolve(`popcorn`)
// )

// const addbutter=new Promise((resolve,reject)=>resolve(`butter`))
// const addcolddrinks=new Promise((resolve,reject)=>resolve(`coldrinks`))

// let ticket=await promisewifeBringingTickets

// console.log(`wife: i have the ${ticket}`)
//     console.log(`husband: we should go in`)
//     console.log(`wife: no i am hungry`);

// let popcorn=await getPopcorn;

// console.log(`husband:i got some ${popcorn}`)
//     console.log(`husband:we should go in`)
//     console.log(`wife:i need butter on my popcorn`);

// let butter=await addbutter

// console.log(`wife:i got some ${butter} on popcorn`)

// let coldrinks=await addcolddrinks

// console.log(`wife:i need also ${coldrinks}`)
// console.log(`husband: anything else darling?`)
// console.log(`wife:lets got we are getting late`)
// console.log(`husband:thank you for the reminder *grins*`)


// return ticket
// }

// preMovie().then((m)=>console.log(`person3:shows ${m}`))
// console.log('person4: shows ticket')
// console.log('person5: shows ticket')

////promise.all///

// console.log('person1: shows ticket')
// console.log('person2: shows ticket')

// const preMovie=async()=>{

//     const promisewifeBringingTickets=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket')
//     },3000)
// })

// const getPopcorn=new Promise((resolve,reject)=>
// resolve(`popcorn`)
// )

// const getcandy=new Promise((resolve,reject)=>resolve(`candy`))
// const getcoke=new Promise((resolve,reject)=>resolve(`coke`))

// let ticket=await promisewifeBringingTickets

// let [popcorn,candy,coke] =await Promise.all([getPopcorn,getcandy,getcoke])

// console.log(`${popcorn},${candy},${coke}`);

// return ticket

// }

// preMovie().then((m)=>console.log(`person3:shows ${m}`))
// console.log('person4: shows ticket')
// console.log('person5: shows ticket')

////try and cath/////////
// console.log('person1: shows ticket')
// console.log('person2: shows ticket')

// const preMovie=async()=>{

//     const promisewifeBringingTickets=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('ticket')
//     },3000)
// })
// let ticket
// try{
//      ticket=await promisewifeBringingTickets
// }catch(e){
//     ticket='sad face'
// }

// return ticket

// }

// preMovie().then((m)=>console.log(`person3:shows ${m}`))
// console.log('person4: shows ticket')
// console.log('person5: shows ticket')


// //////////previous task convert into async and await/////

const posts = [
  {
    title: "post one",
    body: "this is post one",
    createAt: new Date().getTime(),
  },
  {
    title: "post two",
    body: "this is post two",
    createAt: new Date().getTime(),
  },
];
let intervalid;
function getpost() {
  clearInterval(intervalid);
  intervalid = setInterval(() => {
    let output = "";
    for (let i = 0; i < posts.length; i++) {
      output += `<li>${posts[i].title}_last updated ${
        (new Date().getTime() - posts[i].createAt) / 1000
      }second ago</li>`;
    }
    document.body.innerHTML = output;
  }, 1000);
}

/////delete promise function//

function deletepost()
{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(posts.length>0){
        const lastelement=posts.pop()
        resolve(lastelement)
      }
      else{
        reject('Array is empty')
      }
    },1000)
  })
}

function createpost(post) {
return new Promise((resolve,reject)=>{
  setTimeout(() => {
    posts.push({ ...post, createAt: new Date().getTime() });
    const error=false;
    if(!error){
      resolve();
    }
    else{
      reject('Error:somthing went gone wrong')
    }
  }, 2000);
})

}

createpost({title:'post three',body:'this is post three'})
async function getpost1(){
    try{
        const prom1=await getpost();
        console.log(prom1)
        const prom2=await getpost()
        console.log(prom2)
        const prom3=await getpost()
        console.log(prom3)
        const del1=await deletepost()
        console.log(del1)
        const del2=await deletepost()
        console.log(del2)
        const del3=await deletepost()
        console.log(del3)
    }catch(e){
        console.log(error)
    }
}
getpost1()

