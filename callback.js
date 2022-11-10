// const posts=[
//     {title:'post one',body:'this is post one',createAt:new Date().getTime()},
//     {title:'post two', body:'this is post two',createAt:new Date().getTime()}
// ]
// let intervalid;
// function getpost()
// {
//     clearInterval(intervalid)
//   intervalid=setInterval(()=>{
//         let output='';
//         for(let i=0;i<posts.length;i++)
//         {
//             output +=`<li>${posts[i].title}_last updated ${(new Date().getTime()- posts[i].createAt)/1000}second ago</li>`

//         }
//         document.body.innerHTML=output
//     },1000)
// }
// function createpost(post,callback){
//     setTimeout(()=>{
//         posts.push({...post,createAt:new Date().getTime()})
//         callback()
//     },2000)
// }
// getpost()
// createpost({title:'post three',body:'this is post three'},getpost);

// //create 4th post//
// function createfourthpost(post,callback){
//     setTimeout(()=>{
//         posts.push({...post,createAt:new Date().getTime()})
//         callback()
//     },6000)
// }

// createfourthpost({title:'post four',body:'this is post four'},getpost)

//////////////////////////////////////using promises////////////////////////////////////////////////////////////

// const posts = [
//   {
//     title: "post one",
//     body: "this is post one",
//     createAt: new Date().getTime(),
//   },
//   {
//     title: "post two",
//     body: "this is post two",
//     createAt: new Date().getTime(),
//   },
// ];
// let intervalid;
// function getpost() {
//   clearInterval(intervalid);
//   intervalid = setInterval(() => {
//     let output = "";
//     for (let i = 0; i < posts.length; i++) {
//       output += `<li>${posts[i].title}_last updated ${
//         (new Date().getTime() - posts[i].createAt) / 1000
//       }second ago</li>`;
//     }
//     document.body.innerHTML = output;
//   }, 1000);
// }

// /////delete promise function//

// function deletepost()
// {
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       if(posts.length>0){
//         const lastelement=posts.pop()
//         resolve(lastelement)
//       }
//       else{
//         reject('Array is empty')
//       }
//     },1000)
//   })
// }

// function createpost(post) {
// return new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     posts.push({ ...post, createAt: new Date().getTime() });
//     const error=false;
//     if(!error){
//       resolve();
//     }
//     else{
//       reject('Error:somthing went gone wrong')
//     }
//   }, 4000);
// })

// }

// createpost({title:'post three',body:'this is post three'})
// .then(()=>{
//   getpost()
//   deletepost().then(()=>{
//     getpost()
//     deletepost().then(()=>{
//       getpost()
//       deletepost().then(()=>{
//         getpost()
//         deletepost().then(()=>{})
//         .catch((err)=>{
//         console.log('inside cath block',err)
//       })
//     })
//   })
// })
// })
// .catch(err=>console.log(err))

/////////////////////////////////promise all//////////////////////

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
      output += `<li>Title: ${posts[i].title}==> LastUpdated  ___${posts[i].lastActivityTime}==>LastActivity ${Math.trunc((new Date().getTime()-posts[i].createAt)/1000)} </li>`;
    }
    document.body.innerHTML = output;
  }, 1000);
}

////update last activity//

function updateLstActivityTime(){
  return new Promise((resolve,reject) => {
      setTimeout(() => {
          posts.forEach((post) => {post.lastActivityTime = new Date().toLocaleDateString();});
          resolve();
      },1000);
  });
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
    },5000)
  })
}

function createpost(post) {
return new Promise((resolve,reject)=>{
  setTimeout(() => {
    posts.push({ ...post, createAt: new Date().getTime() });
    updateLstActivityTime()
    console.log(posts)
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

function prom4(){
  return new Promise((resolve,reject)=>{
    createpost({title : 'Post four',body : 'This is post four.'})
    resolve()
  })
}

///promise all  and delete the last post ///

Promise.all([createpost({title : 'Post three',body : 'This is post Three.'}),prom4(),updateLstActivityTime()])
    .then(()=>getpost())
    .then(() => {
      deletepost().then(() => {
            console.log(posts)
        })
    });









