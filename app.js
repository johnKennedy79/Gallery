let imgindex = 0;
const bgimg = document.getElementById("bgimg");
const thumbs = document.getElementById("thumbs");

const imgs = [
  {
    src: "./img/alps.jpg",
    alt: "Alpin forrest emerging from a blanket of clouds.",
  },

  { src: "./img/clouds.jpg", alt: "Blue sky with a wisp of clouds." },

  {
    src: "./img/drop.jpg",
    alt: "A drop of water splashing against the surface of a clear pool.",
  },

  {
    src: "./img/forest.jpg",
    alt: "Deep in a dark pine forrest looking through the trees.",
  },

  {
    src: "./img/planet-.jpg",
    alt: "Four alien planets in a line getting smaller in the distance.",
  },

  {
    src: "./img/sea.jpg",
    alt: "A dusky red moon sitting low over small waves crashing on the shore.",
  },

  {
    src: "./img/squirrel.jpg",
    alt: "A red squirrel with tufted ears sitting on a tree stump eating with its front paws.",
  },

  {
    src: "./img/sunset,jpg.jpg",
    alt: "A pink purple and orange sky with a thin blanket of clouds over a calmly rippled sea.",
  },

  {
    src: "./img/thunderstorm.jpg",
    alt: "Deep blue clouds illuminated from within by electric fork lightning.",
  },

  {
    src: "./img/ott1.jpg",
    alt: "An otter looking directly in to the camera with a blured back ground.",
  },
];

for (let i = 0; i < imgs.length; i++) {
  const newimg = document.createElement("img");
  newimg.src = imgs[i].src;
  newimg.alt = imgs[i].alt;
  newimg.setAttribute("aria-description", imgs[i].alt);
  newimg.setAttribute("tabindex", "0");
  thumbs.appendChild(newimg);
  //   mainImage.appendChild(newimg);
  newimg.addEventListener("click", (e) => {
    bgimg.src = e.target.src;
    bgimg.alt = e.target.alt;
    bgimg.setAttribute("aria-description", e.target.alt);
    imgindex = i;
  });
}

function next() {
  imgindex++;
  if (imgindex >= imgs.length) {
    imgindex = 0;
  }
  bgimg.src = imgs[imgindex].src;
  bgimg.alt = imgs[imgindex].alt;
}
function prev() {
  imgindex--;
  if (imgindex < 0) {
    imgindex = imgs.length - 1;
  }
  bgimg.src = imgs[imgindex].src;
  bgimg.alt = imgs[imgindex].alt;
}

const nextbtn = document.getElementById("next");
nextbtn.addEventListener("click", next);
document.createElement("img");

const prevbtn = document.getElementById("prev");
prevbtn.addEventListener("click", prev);
document.createElement("img");

// keyboard controles
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    next();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prev();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    const action = document.activeElement;
    action.click();
  }
});
