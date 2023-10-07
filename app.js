var ProductCard1 = document.getElementById("productCard1");
var ProductCard2 = document.getElementById("productCard2");
var allproduct2 = [
    {
        tittle: "Bacha Party",
        price: "Kids Sale 51% 0ff",
        img: "https://bachaaparty.com/cdn/shop/collections/Girl_Shoes_copy.jpg?v=1677569128",
    },
    {
        tittle: "Toddler Lights ",
        price: "Kids Sale 51% 0ff",
        img: "https://m.media-amazon.com/images/I/51ak59IuL+L.jpg",
    },
     {
        tittle: " Casual Shoes",
        price: "Kids Sale 51% 0ff",
        img: "https://static-01.daraz.pk/p/93168c25fe77e85a5f00a3a1302644a9.jpg",
    },
    {
        tittle: "Boggie shoes",
        price: "Kids Sale 51% 0ff",
        img: "https://jacknjill.pk/cdn/shop/products/Boogie-Bear-Kids-Shoes-613.jpg?v=1649400132",
    },
    {
        tittle: "Prewalker Shoes",
        price: " Sale 51% 0ff",
        img: "https://i5.walmartimages.com/asr/ac445dc4-bc83-49ef-b616-d97dfa6e80b2.d62350f0b026821b17ef2f7be2a34b48.jpeg",
    },
];
function proCard2(){
    ProductCard2.innerHTML = "";
    for (var i = 0; i < allproduct2.length; i++) {
        ProductCard2.innerHTML += `<div class="main01">
        <div class="cards">
        <div><img src="${allproduct2[i].img}" width="100%" height="20%" alt=""></div>
        <div><b>${allproduct2[i].price}</b></div>
        <div><p>${allproduct2[i].tittle}</p></div>
        <div><button class="btnall" onclick="buy2(${i})">Buy</button></div>
        </div>
    </div>`
    }
}
proCard2()
var allProduct1 = [
    {
        tittle: "Summer collection",
        price: "Rs: <ins>199</ins> <del>300</del>",
        img: "https://i.pinimg.com/236x/66/f3/d0/66f3d0238532fdb0a058c9b8be102ae3--pink-sandals.jpg",
    },
    {
        tittle: "winter collection ",
        price: "Rs: <ins>5999</ins> <del>7000</del>",
        img: "https://5.imimg.com/data5/SELLER/Default/2023/1/IY/BV/TC/5951553/boys-shoes-500x500.jpg",
    },
    {
        tittle: " Winter Kids Collection",
        price: "Rs: <ins>300</ins> <del>500</del>",
        img: "https://static-01.daraz.pk/p/affe16abc38e136fb9cb50858d1f4bce.jpg",
    },
    {
        tittle: "Girls collection Sandals",
        price: "Rs: <ins>599</ins> <del>700</del>",
        img: "https://admin.mochishoes.com/product/57-4875/660/57-4875M21.jpg",
    },
    {
        tittle: "Boys Collections",
        price: "Rs: <ins>1599</ins> <del>2000</del>",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfmati4fJcdkwr3lTUweYlwumjE4LJRGAtB9jA-M6FbaK4nGq_O0ieL3m1O6TNEYRbwk&usqp=CAU",
    },
    {
        tittle: "Girsl Collection FLatSole",
        price: "Rs: <ins>300</ins> <del>500</del>",
        img: "https://static-01.daraz.pk/p/00dc438c8a53de711e574921df4cb627.jpg",
    },
   
];
function ProCard1 () {
    ProductCard1.innerHTML = "";
    for (var i = 0; i < allProduct1.length; i++) {
        ProductCard1.innerHTML += `<div class="main01">
        <div class="cards">
        <div><img src="${allProduct1[i].img}" width="100%" height="20%" alt=""></div>
        <div><b>${allProduct1[i].price}</b></div>
        <div><p>${allProduct1[i].tittle}</p></div>
        <div><button class="btnall" onclick="buy1(${i})">Buy</button></div>
        </div>
    </div>`
    }
}
ProCard1();

// var girlColl = [
//     {
//         tittle: "Flat Sandals Girls",
//         price: "Rs : <ins>999</ins> <del>1200</del>",
//         img: "https://stylesatlife.com/wp-content/uploads/2016/12/Designer-Flat-Sandals-for-Girls6.jpg",
//     },
//     {
//         tittle: "Leather Sandals Girls",
//         price: "Rs : <ins>799</ins> <del>1000</del>",
//         img: "https://i.pinimg.com/736x/c9/f7/b3/c9f7b383245865397a863088fd828377.jpg"
//     },
//     {
//         tittle: "Flat Bottom Sandals ",
//         price: "Rs : <ins>599</ins> <del>700</del>",
//         img: "https://i5.walmartimages.com/asr/697b435a-2bb7-4c2c-8a4e-92551f0d0a27.898cfd0839d3efb205160e01b49f1c4f.jpeg"
//     },
//     {
//         tittle: "High Heels Girls Collection ",
//         price: "Rs : <ins>899</ins> <del>1100</del>",
//         img: "https://i.pinimg.com/1200x/b5/65/c6/b565c6858cd4e325d753b963d9e45be7.jpg"
//     },
//     {
//         tittle: "NewGletter sandals Girls",
//         price: "Rs : <ins>799</ins> <del>1000</del>",
//         img: "https://static.jazp.com/uploads/202007/db4042e146e4122a8e1d1f90091d80c5.jpeg"
//     },
//     {
//         tittle: "Leather Sandals Girls",
//         price: "Rs : <ins>799</ins> <del>1000</del>",
//         img: "https://static-01.daraz.pk/p/da4011ce432493c4c7bc57ae88c9af87.jpg"
//     },
// ]

// function girlsCol() {
//     girlsCollection.innerHTML = ""
//     for (var i = 0; i < girlColl.length; i++) {
//         girlsCollection.innerHTML += `<div class="main01">
//         <div class="cards">
//         <div><img src="${girlColl[i].img}" width="100%" height="20%" alt=""></div>
//         <div><b>${girlColl[i].price}</b></div>
//         <div><p>${girlColl[i].tittle}</p></div>
//         <div><button class="btnall" onclick="buy3(${i})">Buy</button></div>
//         </div>
//     </div>`
//     }
// }
// girlsCol()

// var boysColl = [
//     {
//         tittle: "Casual Flip Sandals",
//         price: "Rs : <ins>1199</ins> <del>1300</del>",
//         img: "https://images.meesho.com/images/products/142089688/mb1db_512.webp",
//     },
//     {
//         tittle: "Flat Slipper Boys",
//         price: "Rs : <ins>599</ins> <del>900</del>",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBO8P5oiSK0URDUn-hDTWSnx58egyOqyD1VxNbHt4KTKiiIMWRjKC4CVHcW1ZAtAAzB0k&usqp=CAU",
//     },
//     {
//         tittle: "Strappy Sandals Boys",
//         price: "Rs : <ins>899</ins> <del>1100</del>",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0on3dCkKnHrVPuKf-TS2Umwe6CIOVIa_R5rWHDOlo8mDBoaOwnlqJ_bpuK8BRbYDQkg&usqp=CAU",
//     },
//     {
//         tittle: "Men's <br> Sneakers",
//         price: "Rs : <ins>2299</ins> <del>2500</del>",
//         img: "https://martinvalen.com/17868-large_default/chunky-sneakers-shoes-white-red.jpg",
//     },
//     {
//         tittle: "Flat Sandals Girls",
//         price: "Rs : <ins>599</ins> <del>900</del>",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrxK3PUp9RJKHs7TXD8eizHRhP17TAY1F_A&usqp=CAU",
//     },
// ];

// function boyscal() {
//     boysCollection.innerHTML = ""
//     for (var i = 0; i < boysColl.length; i++) {
//         boysCollection.innerHTML += `<div class="main01">
//         <div class="cards">
//         <div><img src="${boysColl[i].img}" width="100%" height="20%" alt=""></div>
//         <div><b>${boysColl[i].price}</b></div>
//         <div><p>${boysColl[i].tittle}</p></div>
//         <div><button class="btnall" onclick="buy4(${i})">Buy</button></div>
//         </div>
//     </div>`
//     }
// }
// boyscal();

// var winColl = [

//     {
//         tittle: "Front open Sandal",
//         price: "Rs : <ins>899</ins> <del>1100</del>",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCurs6zQ1-9wW6oTWVPhhDKavMTHUJt3oeWwvC-PoQGeSZ7H1w4zWZ0IwXyMKuzPx42o&usqp=CAU",
//     },
//     {
//         tittle: "Ballerina for Ladies",
//         price: "Rs : <ins>799</ins> <del>1000</del>",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3Z-Pq5_LjNnxUz5d0iIRpSFTTCN8zNmibka0eE5y6q3334Nj4dFIsaV48OiBhTRAiN8&usqp=CAU",
//     },
//     {
//         tittle: "Womens Sneakers",
//         price: "Rs : <ins>1999</ins> <del>2200</del>",
//         img: "https://ravishingcollection.com/wp-content/uploads/2021/12/Women-s-Chunky-Sneakers-Thick-Bottom-Platform-Vulcanize-Shoes-Fashion-Breathable-Casual-Running-Shoe-for-Woman.jpg",
//     },
//     {
//         tittle: "Boys <br>Sneakers",
//         price: "Rs : <ins>2399</ins> <del>2700</del>",
//         img: "https://images.meesho.com/images/products/123382828/pi5iy_512.webp",
//     },
//     {
//         tittle: "BornBaby Shoes",
//         price: "Rs : <ins>999</ins> <del>1100</del>",
//         img: "https://m.media-amazon.com/images/I/51-LZy10bUL.jpg",
//     },
//     {
//         tittle: "Ballerina for Ladies",
//         price: "Rs : <ins>799</ins> <del>1000</del>",
//         img: "https://www.stylesgap.com/wp-content/uploads/2014/10/PartyWear-Heels-and-Shoes-26.jpg",
//     },
// ];

// function wintercol() {
//     winterCollection.innerHTML = ""
//     for (var i = 0; i < winColl.length; i++) {
//         winterCollection.innerHTML += `<div class="main01">
//         <div class="cards">
//         <div><img src="${winColl[i].img}" width="100%" height="20%" alt=""></div>
//         <div><b>${winColl[i].price}</b></div>
//         <div><p>${winColl[i].tittle}</p></div>
//         <div><button class="btnall" onclick="buy5(${i})">Buy</button></div>
//         </div>
//     </div>`
//     }
// }
// wintercol();




// var sumcoll = [
//     {
//         tittle: "Summer collection",
//         price: "Rs: <ins>199</ins> <del>300</del>",
//         img: "https://i.pinimg.com/236x/66/f3/d0/66f3d0238532fdb0a058c9b8be102ae3--pink-sandals.jpg",
//     },
//     {
//         tittle: "Leather<br> Sandals",
//         price: "Rs : <ins>999</ins> <del>1100</del>",
//         img: "https://anyasreviews.com/wp-content/uploads/2022/01/Laboo-Leather-barefoot-sandals-Anya-brown-side-view.jpeg",
//     },
//     {
//         tittle: "Summer kids Collection",
//         price: "Rs : <ins>499</ins> <del>600</del>",
//         img: "https://image.doba.com/dg9-VMDcBkZyRYqo/summer-kids-sandals-fashion-mixed-color-toddler-boy-beach-shoes-outdoor-children-sport-sandalias-casual-baby-boys-zapatos-para.webp",
//     },
//     {
//         tittle: "Strapylook Sandal",
//         price: "Rs : <ins>799</ins> <del>950</del>",
//         img: "https://ravishingcollection.com/wp-content/uploads/2022/03/Women-Pumps-High-Heels-New-Ladies-Shoes-Fashion-Women-Sandals-Sexy-Platform-Sandals-Wedding-Women-Shoes.jpg",
//     },
//     {
//         tittle: " kids Flipper Sandal",
//         price: "Rs : <ins>699</ins> <del>750</del>",
//         img: "https://media.licdn.com/dms/image/C4E03AQHCgeIrLnPMHA/profile-displayphoto-shrink_800_800/0/1616931814220?e=2147483647&v=beta&t=u-TKO0Ltx6KOIaWjBrDUDiK80JGHQ8Eayuj6rUCI7w4",
//     },
// ]
// function summercol() {
//     summerCollection.innerHTML = ""
//     for (var i = 0; i < sumcoll.length; i++) {
//         summerCollection.innerHTML += `<div class="main01">
//          <div class="cards">
//          <div><img src="${sumcoll[i].img}" width="100%" height="20%" alt=""></div>
//          <div><b>${sumcoll[i].price}</b></div>
//          <div><p>${sumcoll[i].tittle}</p></div>
//          <div><button class="btnall" onclick="buy6(${i})">Buy</button></div>
//          </div>
//      </div>`
//     }
// }
// summercol();


// var kidsColl = [
//     {
//         tittle:"Baby Kids Shoes",
//         price:"Rs : <ins>550</ins> <del>750</del>",
//         img:"https://static-01.daraz.pk/p/9779b17fafdb0d72029a8325a8820b99.jpg",
//     },
//     {
//         tittle: "Bacha Party",
//         price: "Kids Sale 51% 0ff",
//         img: "https://bachaaparty.com/cdn/shop/collections/Girl_Shoes_copy.jpg?v=1677569128",
//     },
//     {
//         tittle: "Toddler Lights ",
//         price: "Kids Sale 51% 0ff",
//         img: "https://m.media-amazon.com/images/I/51ak59IuL+L.jpg",
//     },
//     {
//         tittle:"Sneakers Baby Shoes",
//         price:"Rs : <ins>999</ins> <del>1150</del>",
//         img:"https://www.dhresource.com/260x260s/f2-albu-g20-M00-27-44-rBVaqGCKRQSAMGjJAAGFOtoWl10669.jpg/children-sneakers-winter-shoes-for-girls.jpg",
//     },
//     {
//         tittle:" Kids Jordan Slipper",
//         price:"Rs : <ins>1199</ins> <del>1350</del>",
//         img:"https://mnkidsstore.com/wp-content/uploads/2021/06/kids-shoesshoes3-300x300.jpg",
//     },
// ];
// function kidsCol() {
//     kidsCollection.innerHTML = ""
//     for (var i = 0; i < kidsColl.length; i++) {
//         kidsCollection.innerHTML += `<div class="main01">
//          <div class="cards">
//          <div><img src="${kidsColl[i].img}" width="100%" height="20%" alt=""></div>
//          <div><b>${kidsColl[i].price}</b></div>
//          <div><p>${kidsColl[i].tittle}</p></div>
//          <div><button class="btnall" onclick="buy7(${i})">Buy</button></div>
//          </div>
//      </div>`
//     }
// }
// kidsCol();

var allMain =document.getElementById("allMain");
var inpSection = document.getElementById("inpSection");
var storelocalData = document.getElementById("storelocalData");
var arr1 = [];  
window.buy2 = function (i){
    var pc2 = allproduct2[i]
    arr1.unshift(pc2)
    allMain.style.display = "none";
inpSection.style.display = "block";
    storelocalData.innerHTML = `<div class="main01">
    <div class="carded">
    <div><img src="${arr1[0].img}" width="100%" height="20%" alt=""></div>
    <div><b>${arr1[0].price}</b></div>
    <div><p>${arr1[0].tittle}</p></div>
    </div>
</div>`
}
var arr2 = [];  
window.buy1 = function (i){
    var pc1 = allProduct1[i]
    arr2.unshift(pc1)
    allMain.style.display = "none";
inpSection.style.display = "block";
    storelocalData.innerHTML = `<div class="main01">
    <div class="carded">
    <div><img src="${arr2[0].img}" width="100%" height="20%" alt=""></div>
    <div><b>${arr2[0].price}</b></div>
    <div><p>${arr2[0].tittle}</p></div>
    </div>
</div>`
}
var arr3 = [];  
window.buy3 = function (i){
    var girl = girlProuctList[i]
    arr3.unshift(girl)
    allMain.style.display = "none";
inpSection.style.display = "block";
    storelocalData.innerHTML = `<div class="main01">
    <div class="carded">
    <div><img src="${arr3[0].imgURL}" width="100%" height="20%" alt=""></div>
    <div><b>${arr3[0].price}</b></div>
    <div><p>${arr3[0].description}</p></div>
    </div>
</div>`
}
var arr4 = [];  
window.buy4 = function (i){
    var boy = boyProuctList[i]
    arr4.unshift(boy)
    allMain.style.display = "none";
inpSection.style.display = "block";
    storelocalData.innerHTML = `<div class="main01">
    <div class="carded">
    <div><img src="${arr4[0].imgURL}" width="100%" height="20%" alt=""></div>
    <div><b>${arr4[0].price}</b></div>
    <div><p>${arr4[0].description}</p></div>
    </div>
</div>`
}
var arr5 = []
window.buy5 = function (i){
    var win = winterProuctList[i]
    arr5.unshift(win)
    allMain.style.display = "none";
inpSection.style.display = "block";
    storelocalData.innerHTML = `<div class="main01">
    <div class="carded">
    <div><img src="${arr5[0].imgURL}" width="100%" height="20%" alt=""></div>
    <div><b>${arr5[0].price}</b></div>
    <div><p>${arr5[0].description}</p></div>
    </div>
</div>`
}
var arr6 = []
window.buy6 = function (i){
    var sum = summerProuctList [i]
    arr6.unshift(sum)
    allMain.style.display = "none";
inpSection.style.display = "block";
    storelocalData.innerHTML = `<div class="main01">
    <div class="carded">
    <div><img src="${arr6[0].imgURL}" width="100%" height="20%" alt=""></div>
    <div><b>${arr6[0].price}</b></div>
    <div><p>${arr6[0].description}</p></div>
    </div>
</div>`
}
var arr7 = []
window.buy7= function (i){
    var kidcol = kidProuctList[i]
    arr7.unshift(kidcol)
    allMain.style.display = "none";
inpSection.style.display = "block";
    storelocalData.innerHTML = `<div class="main01">
    <div class="carded">
    <div><img src="${arr7[0].imgURL}" width="100%" height="20%" alt=""></div>
    <div><b>${arr7[0].price}</b></div>
    <div><p>${arr7[0].description}</p></div>
    </div>
</div>`
}
window.iconbtn = function(){
    allMain.style.display = "block";
    inpSection.style.display = "none";
}



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {getDatabase,ref,set,onChildAdded,push,remove } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

var firebaseConfig = {
    apiKey: "AIzaSyDzupkPL6pOiGqIzEsaYxXFoQXZTUWmuO8",
    authDomain: "qadam-shoes-database.firebaseapp.com",
    projectId: "qadam-shoes-database",
    storageBucket: "qadam-shoes-database.appspot.com",
    messagingSenderId: "40036680691",
    appId: "1:40036680691:web:a4fdd3fa533ab14d570886",
    measurementId: "G-5SPCTC466G"
};
var app = initializeApp(firebaseConfig);
var database = getDatabase(app);
var name = document.getElementById("name");
var number = document.getElementById("number");
var address = document.getElementById("address");
var article = document.getElementById("Article");
window.btnorder = function(){
if(name.value == ""){
    swal({
        title: "Note!",
        text: "Please fill the Name",
      });
      return false;
}else if (number.value == ""){
    swal({
        title: "Note!",
        text: "Please fill the Contact Number",
      });
      return false;
}else if (address.value == ""){
    swal({
        title: "Note!",
        text: "Please fill the Address",
      });
      return false;
}else if (article.value == ""){
    swal({
        title: "Note!",
        text: "Please fill the Article Name",
      });
      return false;
}else{
    swal({
        title: "COngratulations!",
        text: "Your Order is Done",
        timer: 1000
      });
    allMain.style.display = "block";
    inpSection.style.display = "none";
}
var order = {
    Name: name.value,
    Number: number.value,
    Address: address.value,
    Articles:article.value,
}
// console.log(order)
var referId = ref(database)
var ID = push(referId).key
order.id = ID
var reference = ref(database,`Orders/${order.id}`)
set(reference,order)
name.value = "";
number.value = "";
address.value = "";
article.value = "";
}

var girlsCollection = document.getElementById("girlsCollection");
var girlProuctList = []
//GET FUNCTION
window.girlProductFromDatabased = function(){
    var reference = ref(database,`girlproducts`)
       onChildAdded(reference,function(data){
           girlrender(data.val())
       })
   }
   function girlrender(data){
       if(data){
           girlProuctList.push(data)
       }
       girlsCollection.innerHTML=''
       for (var i=0 ; i < girlProuctList.length;i++) {
           
           girlsCollection.innerHTML+= `<div class="main01">
           <div class="cards">
           <div><img src='${girlProuctList[i].imgURL}' alt='${girlProuctList[i].title}image' width="100%" /> </div> 
           <div><b> Rs : ${girlProuctList[i].price}</b></div>
           <div>${girlProuctList[i].description}</div>
           <div><button class="btnall" onclick="buy3(${i})">Buy</button></div>
           </div>
       </div>`   
       }
   }
window.onload = girlProductFromDatabased()


var boysCollection = document.getElementById("boysCollection");
var boyProuctList = [];
//GET FUNCTION
window.boyProductFromDatabased = function(){
  var reference = ref(database,`boyproducts`)
     onChildAdded(reference,function(data){
         boyrender(data.val())
     })
 }
 function boyrender(data){
     if(data){
         boyProuctList.push(data)
     }
     boysCollection.innerHTML=''
     for (var i=0 ; i < boyProuctList.length;i++) {
         
         boysCollection.innerHTML+= `<div class="main01">
         <div class="cards">
         <div><img src='${boyProuctList[i].imgURL}' alt='${boyProuctList[i].title}image' width="100%" /> </div> 
         <div><b> Rs : ${boyProuctList[i].price}</b></div>
         <div>${boyProuctList[i].description}</div>
         <div><button class="btnall" onclick="buy4(${i})">Buy</button></div>
         </div>
     </div>`   
     }
  }
window.onload = boyProductFromDatabased()

var winterCollection = document.getElementById("winterCollection");
var winterProuctList = []
window.winterProductFromDatabased = function(){
    var reference = ref(database,`winterproducts`)
       onChildAdded(reference,function(data){
           winterrender(data.val())
       })
   }
   function winterrender(data){
       if(data){
           winterProuctList.push(data)
       }
       winterCollection.innerHTML=''
       for (var i=0 ; i < winterProuctList.length;i++) {
           
           winterCollection.innerHTML+= `<div class="main01">
           <div class="cards">
           <div><img src='${winterProuctList[i].imgURL}' alt='${winterProuctList[i].title}image' width="100%" /> </div> 
           <div><b> Rs : ${winterProuctList[i].price}</b></div>
           <div>${winterProuctList[i].description}</div>
         <div><button class="btnall" onclick="buy5(${i})">Buy</button></div>
           </div>
       </div>`   
       }
   }
  window.onload = winterProductFromDatabased()

var summerCollection = document.getElementById("SummerCollection");
var summerProuctList = []
window.summerProductFromDatabased = function(){
    var reference = ref(database,`summerProducts`)
       onChildAdded(reference,function(data){
           summerrender(data.val())
       })
   }
   function summerrender(data){
       if(data){
           summerProuctList.push(data)
       }
       summerCollection.innerHTML=''
       for (var i=0 ; i < summerProuctList.length;i++) {
           
           summerCollection.innerHTML+= `<div class="main01">
           <div class="cards">
           <div><img src='${summerProuctList[i].imgURL}' alt='${summerProuctList[i].title}image' width="100%" /> </div> 
           <div><b> Rs : ${summerProuctList[i].price}</b></div>
           <div>${summerProuctList[i].description}</div>
           <div><button class="btnall" onclick="buy6(${i})">Buy</button></div>
       </div>`   
       }
   }
window.onload = summerProductFromDatabased();

var kidsCollection = document.getElementById("kidsCollection");
var kidProuctList = []
window.kidProductFromDatabased = function(){
    var reference = ref(database,`kidProducts`)
       onChildAdded(reference,function(data){
           kidrender(data.val())
       })
   }
   function kidrender(data){
       if(data){
           kidProuctList.push(data)
       }
      kidsCollection.innerHTML=''
       for (var i=0 ; i < kidProuctList.length;i++) {
           
          kidsCollection.innerHTML+= `<div class="main01">
           <div class="cards">
           <div><img src='${kidProuctList[i].imgURL}' alt='${kidProuctList[i].title}image' width="100%" /> </div> 
           <div><b> Rs : ${kidProuctList[i].price}</b></div>
           <div>${kidProuctList[i].description}</div>
           <div><button class="btnall" onclick="buy7(${i})">Buy</button></div>
       </div>`   
       }
   }
   window.onload = kidProductFromDatabased()
