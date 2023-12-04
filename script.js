let messageLogo=document.querySelector("#messageLogo")
let messageCtn=document.querySelector(".message_ctn")
let storyContainer=document.querySelector(".story_container")
let nav=document.querySelector("nav")
let messCtnBackBtn=document.querySelector("#ids svg")



messageLogo.addEventListener("click",()=>{
    messageCtn.style.display="block";
    messageCtn.style.backgroundColor="white";
})
messCtnBackBtn.addEventListener("click",()=>{
    messageCtn.style.display="none";
})



let arr=[
    {
    dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww"},
    
    {
    dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsfGVufDB8fDB8fHww"},
    
    {
    dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1533973860717-d49dfd14cf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVsfGVufDB8fDB8fHww"},
    
    {
    dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsfGVufDB8fDB8fHww"},
    
    {
    dp:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1vZGVsfGVufDB8fDB8fHww"},
    {
    dp:"",story:""},
    {
    dp:"",story:""},
    

]

let clutter=""
arr.forEach((elem,index)=>{
    clutter+=`<div class="story_box">
             <img id=${index} src="${elem.dp}" alt="">
            </div>`
})
document.querySelector(".story_container").innerHTML=clutter
document.querySelector("#highlights").innerHTML=clutter


storyContainer.addEventListener("click",(det)=>{
        document.querySelector(".fullscreen").style.display="block"
        console.log(arr[det.target.id].story)
        document.querySelector(".fullscreen").style.backgroundImage=`url(${arr[det.target.id].story})`


        setTimeout(()=>{
            document.querySelector(".fullscreen").style.display="none"
        },2000)

})




//post code

let post=[
    {
    dp:"https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95cyUyMG1vZGVsfGVufDB8fDB8fHww",postImg:"https://images.unsplash.com/photo-1664759212687-287561325e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljJTIwcG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
},
    {
    dp:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",postImg:"https://images.unsplash.com/photo-1516446636564-c48e723868fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
},
    {
    dp:"https://images.unsplash.com/photo-1611637576109-b6f76185ec9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXN8ZW58MHx8MHx8fDA%3D",postImg:"https://images.unsplash.com/photo-1586057708056-6149710c46cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
},
    {
    dp:"https://images.unsplash.com/photo-1611316185995-9624c94487d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXN8ZW58MHx8MHx8fDA%3D",postImg:"https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
},
    {
    dp:"https://images.unsplash.com/photo-1546512565-39d4dc75e556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXN8ZW58MHx8MHx8fDA%3D",postImg:"https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
},
    {
    dp:"https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJveXN8ZW58MHx8MHx8fDA%3D",postImg:"https://images.unsplash.com/photo-1536243298747-ea8874136d64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
},
    {
    dp:"https://images.unsplash.com/photo-1574722772849-7b249c18a2fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJveXN8ZW58MHx8MHx8fDA%3D",postImg:"https://images.unsplash.com/photo-1530777780045-c11965d8f4c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
},
    {
    dp:"https://images.unsplash.com/photo-1574722772849-7b249c18a2fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJveXN8ZW58MHx8MHx8fDA%3D",postImg:"https://images.unsplash.com/photo-1530777780045-c11965d8f4c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
},
    {
    dp:"https://images.unsplash.com/photo-1574722772849-7b249c18a2fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJveXN8ZW58MHx8MHx8fDA%3D",postImg:"https://images.unsplash.com/photo-1530777780045-c11965d8f4c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGJveXMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
},
]

let flutter=""
post.forEach((elem,index)=>{
    flutter+=` <div class="userPost">
    <div class="userPostinfo">
        <div id="userDp">
            <div id="dp">
                <img src="${elem.dp}" alt="">
            </div>
            <a href="">Aayushaya</a>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
    </div>
    <div class="post">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="65" height="65"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z" fill="rgba(255,255,255,1)"></path></svg>
        <img src="${elem.postImg}" alt="">
    </div>
    <div class="reactions">
        <div class="react">
            <!-- like -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path></svg>
            <!-- comment -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path d="M10 3H14C18.4183 3 22 6.58172 22 11C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3ZM12 17H14C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5H10C6.68629 5 4 7.68629 4 11C4 14.61 6.46208 16.9656 12 19.4798V17Z"></path></svg>
            <!-- send -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path d="M21.7264 2.95706L16.2732 22.0433C16.1222 22.5718 15.7976 22.5958 15.5561 22.1127L10.9998 13.0002L1.92266 9.36931C1.41298 9.16544 1.41929 8.86034 1.9567 8.6812L21.0429 2.31913C21.5714 2.14297 21.8745 2.43878 21.7264 2.95706ZM19.0351 5.0966L6.81197 9.17097L12.4486 11.4256L15.4893 17.507L19.0351 5.0966Z"></path></svg>

        </div>
        <!-- bookmarks -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
    </div>
    <div class="comments">
        <p>here will be comments</p>
    </div>
</div>`
})
document.querySelector(".container .page").innerHTML=flutter

//message page

let userMessBox=[
    {dp:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww",name:"kaushik"},
    {dp:"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww",name:"ayushya"},
    {dp:"https://plus.unsplash.com/premium_photo-1675107359685-f268487a3a46?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Sneha"},
    {dp:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww",name:"Anista"},
    {dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww",name:"Riya"},
    {dp:"https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsfGVufDB8fDB8fHww",name:"Priya"},
    {dp:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsfGVufDB8fDB8fHww",name:"Nitika"},
    {dp:"https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vZGVsfGVufDB8fDB8fHww",name:"Sapna"}
]


let clutter1=""
userMessBox.forEach((elem,index)=>{
        clutter1+=`<div class="friends">
        <div class="dp">
            <img src="${elem.dp}" alt="">
        </div>
        <div class="username">
            <h4>${elem.name}</h4>
        </div>
        <div class="camera">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M9.82843 5L7.82843 7H4V19H20V7H16.1716L14.1716 5H9.82843ZM9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM12 18C8.96243 18 6.5 15.5376 6.5 12.5C6.5 9.46243 8.96243 7 12 7C15.0376 7 17.5 9.46243 17.5 12.5C17.5 15.5376 15.0376 18 12 18ZM12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10.567 13.933 9 12 9C10.067 9 8.5 10.567 8.5 12.5C8.5 14.433 10.067 16 12 16Z"></path></svg>
        </div>

    </div>`
})

document.querySelector("#chats").innerHTML=clutter1


//user profile page

let profilePage=document.querySelector(".profile")
let profileBtn=document.querySelector(".navDown #userLogo")
let backProfile=document.querySelector("#idAddMore #back")

profileBtn.addEventListener("click",()=>{
    profilePage.style.display="block"
})

backProfile.addEventListener("click",()=>{
    profilePage.style.display="none"
})