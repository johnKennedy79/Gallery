let imgindex = 0;
const bgimg = document.getElementById("bgimg");
const mainImage = document.getElementById("main-image");

const img = [
  "./img/alps.jpg",
  "./img/clouds.jpg",
  "./img/drop.jpg",
  "./img/forest.jpg",
  "./img/planet-.jpg",
  "./img/sea.jpg",
  "./img/squirrel.jpg",
  "./img/sunset,jpg.jpg",
  "./img/thunderstorm.jpg",
  "./img/ott1.jpg",
];
const alts = {
  "./img/alps.jpg": "Alpin forrest emerging from a blanket of clouds.",

  "./img/clouds.jpg": "Blue sky with a wisp of clouds.",

  "./img/drop.jpg":
    "A drop of water splashing against the surface of a clear pool.",

  "./img/forest.jpg": "Deep in a dark pine forrest looking through the trees.",

  "./img/planet-.jpg":
    "Four alien planets in a line getting smaller in the distance.",

  "./img/sea.jpg":
    "A dusky red moon sitting low over small waves crashing on the shore.",

  "./img/squirrel.jpg":
    "A red squirrel with tufted ears sitting on a tree stump eating with its front paws.",

  "./img/sunset,jpg.jpg":
    "A pink purple and orange sky with a thin blanket of clouds over a calmly rippled sea.",

  "./img/thunderstorm.jpg":
    "Deep blue clouds illuminated from within by electric fork lightning.",

  "./img/ott1.jpg":
    "An otter looking directly in to the camera with a blured back ground.",
};

for (const imgs of img) {
  const newimg = document.createElement("img");
  newimg.setAttribute("src", "img/${imgs}");
  newimg.setAttribute("alt", alts[imgs]);
  //   mainImage.appendChild(newimg);
  newimg.addEventListener("click", (e) => {
    bgimg.src = e.target.src;
    bgimg.alt = e.target.alt;
  });
}

function next() {
  imgindex++;
  bgimg.src = img[imgindex].src;
}
function prev() {
  imgindex--;
  bgimg.src = img[imgindex].src;
}

const nextbtn = document.getElementById("next");
nextbtn.addEventListener("click", function () {
  bgimg.next;
});
document.createElement("img");
