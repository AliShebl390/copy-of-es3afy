// const btn = document.querySelector('.btn');
// const test= document.querySelector('.test');
// const bars = document.querySelectorAll('.bar')
// const test2 = document.querySelector('.test2')
// const signIn=document.querySelector('.sign-in')



//     for (let i = 0; i < bars.length; i++) {
       
//         btn.addEventListener('click',function(){
//             test.classList.toggle('move-in');
//             bars[0].classList.toggle('bar1-MoveInRotate')
//             bars[2].classList.toggle('bar3-MoveInRotateOpposite')
//             bars[1].classList.toggle('bar2-opacity')
//             test2.classList.toggle('animate__backOutDown')
//          });
//     }
    
     



const signInH1=document.querySelector('.sign-in-h1');
const contentContainer2=document.querySelector('.content-container-2')
const SignUpH1= document.querySelector('.sign-up-h1');
const contentContainer =document.querySelector('.content-container');

SignUpH1.classList.add('h1-scale')




signInH1.addEventListener('click',function(){
    contentContainer2.classList.add('sign-active');
    signInH1.classList.add('h1-scale');
    SignUpH1.classList.remove('h1-scale')
   
})

SignUpH1.addEventListener('click',function(){
    contentContainer2.classList.remove('sign-active');
    signInH1.classList.remove('h1-scale');
    SignUpH1.classList.add('h1-scale')
   

})


contentContainer.addEventListener('click',function(){
    contentContainer2.classList.remove('sign-active');
    signInH1.classList.remove('h1-scale');
    SignUpH1.classList.add('h1-scale')
})