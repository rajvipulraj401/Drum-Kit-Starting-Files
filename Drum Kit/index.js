//alert("aagyare");

//  this is the object where we are calling the method addEventListener
// document.querySelectorAll("button").addEventListener("click",function(){
//   alert("I Got Clicked");
// });

// we want to add addEventListener to all the buttons
/* we can do this by querySelectorAll and this can be done but we will have to
  to write like
     1) document.querySelectorAll("button")[0]
        If we want to add querySelectorAll to button first and
        then so on for the next elements . but doing this will be tidiouus

        step 1) we can use loops and in that way it will be beneficial for use .


     */
    //  for(var i = 0 ;i<=6;i++){  // bsdk ke ye c++ nahi hai var lagao

    // add condition as something else more preferably add the class name .drum
     // here because suppose we add one more drum then this will not work .


var noofdrumbuttons = document.querySelectorAll(".drum").length;

    for(var i = 0 ;i<noofdrumbuttons;i++){

    //'' we are putting .(dot) length because that will give me the exact number
    // till where we  will traverse from our for loop .

       // always add double inverted comma when using querySelectorAll or querySelector


        document.querySelectorAll("button")[i].addEventListener("click",function(){
          /* here we are making an anonynmous function and it do some work
           we could also have named this functiion ( called named function ) something and then call it abouve
            but without parenthesis  cause if we put the paranthesis then it would have run
             without even clicing but we don't want that .
             __>> WE WANT TO call the function when we click so yeah that's the another way . */


        //  alert("I Got Clicked");

        //var audio = new  Audio("sounds/tom-1.mp3"); //capital Audio hi rhega
        // ye inbuild function hai.


        // NOW we want to do that when a user click an image it plays different images
        // we need to know which button got clicked

        // we will use   (  this )  for it to store which object got Clicked

        this.style.color="white";

        var buttonInnerHTML = this.innerHTML;
        /* yaha pe button pe click krne ke baad uske this me jaake us object ka innerHTML
         // se naam pata chl jayega jaise example i click on w toh
         // addEventListener se pata chlega ki is location pe click hua this ke madad se uske location pe jaake waha ka innerHTML nikal lenge

          jiise pata chlega ki wo w hai aur phir w ko switch case wale me sound play hoga jo assign humlog krenge
           Audio constructor function se */


              makesound(buttonInnerHTML);
              // humlog yahi pe switch statemenet ke case
              /* me yaha se pass kr dete hai buttonInnerHTML jiska value
              case statement me humko dekhna hai mtlb switch me hum jayenge
                aur us hr button click ko dekhna hai aur uske innerhtml ko dekhna hai */
                buttonAnimation(buttonInnerHTML);
                 // here we will add animation in the current button which is being clicked
        //
        });
      }


// AB YAHA SE------ KEYBOARD PRESS------

  //  (USING "KEYDOWN"  to listen keyboard press)


      document.addEventListener("keydown",function(ev ) {
        //  alert("key was pressed");
          console.log(ev); // by using this we can see in console
          // which keyboard button we are pressing and then we
          // saw that there are no of properties  we can use in those
          //  and WE NEEDED key property out of them .


      // it will tell when a key is being pressed

       /*and by help of ev function we can get key value and that will help us in getting the key and
        then we will go in those key and play the following sound*/

              var key = ev.key;
              makesound(key);
              buttonAnimation(key);
                // yaha key daaloge na jisme var banaye ho .
               // here we will add animation in the current button which is being pressed .

              });


              function makesound(key ){
                switch (key)   {



                    case "w":
                        var audio = new  Audio("sounds/tom-1.mp3"); //capital Audio hi rhega
                        audio.play();
                          break;

                        case "a":
                            var audio = new  Audio("sounds/tom-2.mp3"); //capital Audio hi rhega
                            audio.play();
                              break;

                            case "s":
                                var audio = new  Audio("sounds/tom-3.mp3"); //capital Audio hi rhega
                                audio.play();
                                break;

                                case "d":
                                    var audio = new  Audio("sounds/tom-4.mp3"); //capital Audio hi rhega
                                    audio.play();
                                    break;

                                    case "j":
                                        var audio = new  Audio("sounds/kick-bass.mp3"); //capital Audio hi rhega
                                        audio.play();
                                        break;

                                        case "k":
                                            var audio = new  Audio("sounds/crash.mp3"); //capital Audio hi rhega
                                            audio.play();
                                            break;

                                            case "l":
                                                var audio = new  Audio("sounds/snare.mp3"); //capital Audio hi rhega
                                                audio.play();
                                                break;

                  default: console.log(buttonInnerHTML);
        // put some default
                }


              }

              // now make fuction buttonAnimation

               function buttonAnimation(currentKey){
                 // what we will do with this currentKey  we will go to its class .
                   //example we got w key and now we want  to go to its class and we want to target class of
                     /* this button and in order to target this class using querySelector  we need to add
                          DOT BEFOR THE currentKey NAME SO .*/
                          var activeButton =    document.querySelector("."+ currentKey);
                              // so in the current key we do not get the dot we only get the current key so we
                               /* will concatenate the other things .
                                  like above .*/

                                      /* NOW STEP 2)  save this current button  and then cahnge its style . */

                                      /*  so nowW we just need to  add the class using the javascript we have already
                                          defined the css class over there in css sheet. */
                                          /*  how to add class */

                                           activeButton.classList.add("pressed") ;
                                             //this is the way to add the class in js to any element we are just going to that element classes
                                              /* class list */

                    /* here i  want to add animation and then remove it so  that i can figure
                     out which button is clicked  so i want animation to being applied for  less than  second and then disappear*/

                        /* I LEARNED ABOUT A  setTimeout function
                                 this HELps to  remove the class and also specify the amount of time we will wait
                                   before applying the function / method. */

                                                  // NOW REMOVE USING setTimeout

                                       setTimeout(function(){
                                         activeButton.classList.remove("pressed");
                                       }, 100);
                                        /*1)    in the first parameter we are passing a function as an input which will remove the class
                                           which we specified above .

                                          2)    in second parameter we are specifying time in milisecond  1 sec = 1000 ms.  */


               }
               //  isme jo jo current element hoga uska animation change krenge .
                      // so how to target the current element which is being pressed .
                       // current element means the button which is being clicked or being pressed .
