const img = document.getElementById("image");

img.onclick = function () {
  if (img.src.includes("img/img1.jpg")) {
    img.src = "img/img2.jpg"; // 置き換える画像のパス
  } else if (img.src.includes("img/img2.jpg")) {
    img.src = "img/img3.jpg"; // 置き換える画像のパス
  } else if (img.src.includes("img/img3.jpg")) {
    img.src = "img/img4.jpg"; // 置き換える画像のパス
  } else if (img.src.includes("img/img4.jpg")) {
    img.src = "img/img5.jpg"; // 置き換える画像のパス
  } else if (img.src.includes("img/img5.jpg")) {
    img.src = "img/img6.jpg"; // 置き換える画像のパス
  } else if (img.src.includes("img/img6.jpg")) {
    img.src = "img/img7.jpg"; // 置き換える画像のパス
  } else if (img.src.includes("img/img7.jpg")) {
    img.src = "img/img8.jpg"; // 置き換える画像のパス
  } else if (img.src.includes("img/img8.jpg")) {
    img.src = "img/img9.jpg"; // 置き換える画像のパス
  } else if (img.src.includes("img/img9.jpg")) {
    img.src = "img/img10.jpg"; // 置き換える画像のパス
  } else if (img.src.includes("img/img10.jpg")) {
    img.src = "img/img11.jpg"; // 置き換える画像のパス
  } else if (img.src.includes("img/img11.jpg")) {
    img.src = "img/img12.jpg"; // 置き換える画像のパス
  } else if (img.src.includes("img/img12.jpg")) {
    img.src = "img/img13.jpg"; // 置き換える画像のパス
  } else if (img.src.includes("img/img13.jpg")) {
    img.src = "img/img14.jpg"; // 置き換える画像のパス
  } else if (img.src.includes("img/img14.jpg")) {
    img.src = "img/img15.jpg"; // 置き換える画像のパス
  } else {
    img.src = "img/img1.jpg";
  }
};
