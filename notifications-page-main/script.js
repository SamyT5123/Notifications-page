let notificationBoxes = document.querySelectorAll(".notification-box");
const markRead = document.getElementById("markRead")
let notificationNum = document.querySelector(".notificationNumber");
notificationNum.innerHTML = 0;
notificationNum.style.backgroundColor = "blue"




notificationBoxes.forEach(box => {
    box.addEventListener("click", () => {
        box.classList.toggle("active")
        // notificationNum.innerHTML++

        if(box.classList.contains("active")){
            notificationNum.innerHTML++
            
        } else {
            notificationNum.innerHTML--
        };

    })
    // box.addEventListener("click", ())
    markRead.addEventListener("click", () => {
        box.classList.remove("active")
        notificationNum.innerHTML = 0;
    })

})




// notificationBoxes.forEach(box => {
//     box.addEventListener("click", () => {
//         box.classList.toggle("active")
//         // notificationNum.innerHTML++

//         if(box.classList.contains("active")){
//             notificationNum.innerHTML++
//             if(box.classList.contains("rizky")){
//                 activeMessage.classList.add
//                 ("messageContainerActive")
//                 box.classList.remove("rizky")
//             } else {
//                 box.classList.add("rizky")
//                 activeMessage.classList.remove("messageContainerActive")
//             }

//         } else {
//             notificationNum.innerHTML--
//         };

//     })
//     // box.addEventListener("click", ())
//     markRead.addEventListener("click", () => {
//         box.classList.remove("active")
//         notificationNum.innerHTML = 0;
//     })

// })

// notificationBoxes.forEach(box => {
//     markRead.addEventListener("click", () => {

//     })
// })

