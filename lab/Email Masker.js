/* Build an Email Masker
In this lab, you will mask the username part of an email address 
with asterisks. Masking is a term used to hide or replace sensitive information 
with asterisks or other characters.

For example, if the email address was myEmail@email.com,
 then the masked email address will be m*****l@email.com.

Objective: Fulfill the user stories below and get all the tests
 to pass to complete the lab.

 */

 function maskEmail(email) {
    let atIndex = email.indexOf("@"); // find  @ first
  
    let username = email.slice(0, atIndex); //h4rish
    let domain = email.slice(atIndex); //@gmail.com
      
                      
    let masked =  //h a r i s h . d e v
      username[0] //0 1 2 3 4 5 6 7 8 9 -->h
      + "*".repeat(username.length - 2) //h + *********
      + username[username.length - 1]; //h + ******** + v
  
    return masked + domain; //h********v + @gmail.com
  }
  
  // Test cases
console.log(maskEmail("h4rish.dev@gmail.com"));

let name = "h4rish.dev";
console.log(name.length -1 );
console.log(name.length - 2 );
