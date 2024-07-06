
function createCard(thumbnail,title,Cname,views,monthsOld,duration){

 let html=`<div class="card">
 <img src="${thumbnail}" alt="">
 <div class="timestamp">${duration}</div>
 <div class="text">
     <h1>${title}</h1>
     <p>${Cname}•${views} views•${monthsOld} months ago</p>
 </div>
</div>`
}
