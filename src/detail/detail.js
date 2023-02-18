import data from '../../db.json' assert {type: 'json'}

const urlParams = new URLSearchParams(location.search);
const id = urlParams.get('id')
console.log(data)

let book = data.filter(function (book) {
  return book.id == id
})

book = book[0]

const contentElement = document.querySelector('#content')

let bookcates = data.filter(function (bookcate) {
  return bookcate.categories.name == book.categories.name;
})

const sanpham = document.querySelector('#sanpham');
let _sanpham = '';
bookcates.forEach(function (book) {

  _sanpham = _sanpham + `

      <div class="grid-cols-4">
          <img src="${book.images[0].base_url}" alt="" class="max-h-48 grid-cols-6">
          
          <p>Tiki now</p>
          <p>${book.name}</p>
          <p>
              <i class="text-yellow-400 fa-solid fa-star"></i>
              <i class="text-yellow-400 fa-solid fa-star"></i>
              <i class="text-yellow-400 fa-solid fa-star"></i>
              <i class="text-yellow-400 fa-solid fa-star"></i>
              <i class="text-yellow-400 fa-solid fa-star"></i>
              ${book.rating_average}
          </p>
          <p>${book.quantity_sold?.text}</p>
      </div>
  
  `
})
sanpham.innerHTML = _sanpham;

// const info = document.querySelector('#info');
// let _info = `
// <ul class="bg-slate-200">
//         ${infobooks.specifications[0].attributes.map(function (info) {
//     // console.log(info.code)
//     return `<li class="p-3 ">${info.name}</li>`
//     }).join('')}


//     </ul>
//     <ul class="w-1/2">
//     ${infobooks.specifications[0].attributes.map(function (info) {
//     // console.log(info.code)
//     return `<li class="p-3 bg-slate-100">${info.value}</li>`
//     }).join('')}
//     </ul>
// `
// info.innerHTML = _info


let number = 1;
const _content = `
<div class="container mx-auto lg:flex lg:px-14">
<div class="lg:w-1/4 flex-none mx-10 ">
<img src="${book.images[0].base_url}" id="img_book">
    <div class="flex w-1/5">
    ${book.images.map(function (image) {
  return `<img src="${image.base_url}" alt="" class="img">`
}).join('')}
    </div>
    <div class="lg:flex mt-2.5 hidden lg:block">
          <p class="p-1 ">Chia sẻ</p>
          <img class="p-1" src="../img/Frame.png" alt="">
          <img class="p-1" src="../img/Frame-1.png" alt="">
          <img class="p-1" src="../img/Frame-2.png" alt="">
          <img class="p-1" src="../img/Frame-3.png" alt="">
          <img class="p-1" src="../img/Frame-4.png" alt="">
          
</div>
</div>
      
<div class="grow-2 lg:p-4">
    <div class="flex pt-3 hidden lg:block">
       <p>Tác giả: ${book.authors[0].name}</p>
       <p class="pl-3 ">Đứng thứ 13 trong: </p>
       <p class="text-sky-400">Top 1000 Sách tư duy - Kỹ năng sống bán chạy tháng này</p>
    </div>
    <h3  class="text-2xl"> ${book.name}</h3>
    <div class="flex">
        <ul class="stars flex ">
            <li class="star">&#10029;</li>
            <li class="star">&#10029;</li>
            <li class="star">&#10029;</li>
            <li class="star">&#10029;</li>
            <li class="star">&#10029;</li>
        </ul> 
        <p class=" pl-2 hidden lg:block">(Xem 2942 đánh giá)</p>
        <p class="pl-2">${book.quantity_sold.text}</p>
    </div>

    
    <div class="flex">
            <p class="text-4xl text-red-500" id="price">83.980</p>
            <p class="text-stone-300 pt-4 pl-2" id="product">${book.original_price}</p>
            <p class="border-red-400 text-red-500 pt-4 pl-4  justify-between">-23%</p>
     </div>
    <div class="flex bg-violet-50 mt-3 w-72">
            <img src="../img/icons1.png" alt="">
            <p class="pl-2">Thưởng lên đến 7,31 ASA ≈ 3.969 Xu</p>
    </div>
    <div class="pt-16">
      <p>15 Mã Giảm Giá</p>
      <div class="py-2 block lg:hidden">
             <span class="border-blue-400 border-2 p-0.5 mx-1 rounded text-blue-400">Giảm 10k</span>
            <span class="border-blue-400 border-2 p-0.5 mx-1 rounded text-blue-400">Giảm 20k</span>                        
      </div>

      <div class="flex hidden lg:block ">
        <input type="text" value="Giảm 10k" class=" text-center m-2 w-20 h-8 border-sky-600 text-sky-500 border">
        <input type="text" value="Giảm 20K" class=" text-center m-2 w-20 h-8 border-sky-600 text-sky-500 border">
        <input type="text" value="Giảm 30k" class=" text-center m-2 w-20 h-8 border-sky-600 text-sky-500 border">
        <img src="../img/icon2.png" alt="">
      </div>
      
    </div>
    <!--Khung2 bên-->
    <div >
        <div class="flex">
            <p>Giao đến Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</p>
            <p class="text-sky-500">- Đổi địa chỉ</p> 
        </div>

      <div class="flex ">
        <div class="w-64 h-24 bg-slate-100 border mt-5 hidden lg:block ">
            <div class="flex ">
                <img src="../img/icon3.png" alt="">
                <p class="pt-2 pl-3 text-lime-500">Trước 18:00 hôm nay</p>
            </div>
                <p>19.000đ</p>
            <div class="flex bg-violet-50 mt-3 w-64">
              <img src="../img/icons1.png" alt="">
              <p class="pl-2">Freeship 100% chỉ với 34 ASA</p>     
            </div>
        </div>
        <div class="w-64 h-24 bg-slate-100 border m-5 hidden lg:block">
            <div class="flex ">
                <img src="../img/icon3.png" alt="">
                <p class="pt-2 pl-3 text-lime-500">Trước 18:00 hôm nay</p>
            </div>
                <p>19.000đ</p>
            <div class="flex bg-violet-50 mt-3 w-64">
              <img src="../img/icons1.png" alt="">
              <p class="pl-2">Freeship 100% chỉ với 34 ASA</p>     
            </div>
        </div>
      </div>

        <div class= "pt-10">
             <p>Số lượng</p>
          <div class="flex">
             <button class="w-10 h-8 border text-center"  id="minus">
             <i class="text-xl fa-solid fa-minus"></i>
             </button>
             <div class="w-14 h-8 border text-center" id="number">
                ${number}
             </div>
             <button class="w-10 h-8 border text-center"  id="add" >
             <i class="text-xl fa-solid fa-plus"></i>
             </button>
          </div>
          <div>
             <input type="text" class="w-64 h-12 bg-red-600 text-center mt-3 text-white" value="Chọn mua">
          </div>
        </div>

    </div>
  </div>

  <!--Khung2-->
  <div class = "">
      <div class="pt-36 pl-16">
         <div class="flex">
            <img src="../img/icon4.png" alt="">
          <div class="pl-3">
            <p>Tiki Trading</p>
            <img src="../img/icon5.png" alt="">
          </div>
        </div>
      </div>

      <div class="flex pl-20 pt-5">
          <div class="">
              <p class="">4.6/5</p>
              <p class="text-zinc-300">4.7tr+</p>
          </div>
          <div class="pl-20">
              <p class="">408k+</p>
              <p class="text-zinc-300">Theo dõi</p>
          </div>
      </div>
      <div class="flex pl-16 pt-5">
          <div class=" flex text-center m-2 w-28 h-8 text-sky-500 border-2 border-sky-700">
              <img src="../img/icon6.png" alt="">
              <p>Xem shop</p>
          </div>
          <div class=" flex text-center m-2 w-28 h-8 text-sky-500 border-2 border-sky-700">
              <i class="fa-solid fa-plus m-1.5"></i>
              <p class="">Theo dõi</p>
          </div>
      </div>
      <div class="flex pl-12 pt-10 text-center ">
          <div>
              <img src="../img/icon9.png" alt="" >
              <p>Hoàn tiền</p>
              <p>111%</p>
              <p>nếu hàng giả</p>
          </div >
          <div class="pl-5">
              <img src="../img/icon7.png" alt="" >
              <p>Mở hộp</p>
              <p>kiểm tra</p>
              <p>nhận hàng</p>
        </div>
        <div class="pl-5">
              <img src="../img/icon8.png" alt="" >
              <p>Đổi trả trong</p>
              <p>30 ngày</p>
              <p>nếu sp lỗi</p>
        </div>
      </div>

      <div class="flex w-42 h-16 bg-slate-100 border mt-5">
         <div class="pl-5 pt-2">
            <p>8 nhà bán khác</p>
            <p class="text-zinc-300">Giá từ 75.210 ₫</p>
         </div>
         <div class="pl-5 border-sky-600 text-sky-500 pt-3">
            <input type="text" class="w-20 h-10 text-center border border-sky-600 ml-14" value="So Sánh">
         </div>
      </div>
</div>


</div>



`

contentElement.innerHTML = _content

var add = document.querySelector('#add');
console.log(add);
var numberelement = document.querySelector('#number');
var minus = document.querySelector('#minus');
var imgsach = document.querySelector('#img_book');
console.log(imgsach)
console.log(number)

const imgs = document.querySelectorAll('.img');
console.log(imgs)
console.log(minus)

// add.addEventListenner('click' , function(){
//   number++;
//   numberelement.innerHTML = number;
// })
add.onclick = function () {
  number++;
  numberelement.innerHTML = number;
}

minus.onclick = function () {
  number--;
  if (number == 0) {
    number = 1;
  }
  numberelement.innerHTML = number;
}

imgs.forEach((img, index) => {
  img.onclick = function () {
    imgsach.src = img.src;
  }
});