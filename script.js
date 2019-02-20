"use strict"

const adminLogin = 'admin';
const adminPassword = 'qwerty'


let UserLogin = prompt('Логин')
 if( UserLogin === null ){
    alert('Отменено')
 }else if (UserLogin !== adminLogin ){
     alert('Доступ запрещен, неверный логин')

 } else {
    let UserPassword = prompt('Пароль')
    if (UserPassword === null ){
       alert("Отменено польз")
        }else if (UserPassword !== adminPassword) {
            alert('Доступ запрещен, неверный пароль')
        
        }else if (UserPassword === adminPassword) {
            alert("Добро пожаловать ")
         }

 }
 
 
 
 
 
 
 
 
 
 
 
//  if (UserPassword === null ){
//     alert("Отменено польз")
//  }else if (UserPassword !== adminPassword) {
//      alert('Доступ запрещен, неверный пароль')

//  }if (UserPassword === adminPassword) {
//      alert("Добро пожаловать ")
//  }
 
    
    

    
 
 console.log( UserLogin)
