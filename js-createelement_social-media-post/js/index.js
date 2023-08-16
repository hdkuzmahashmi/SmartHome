console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
// create article tag
const articleSec = document.createElement("article");
articleSec.classList.add("post");

// create p tag
const pelm = document.createElement("p");
pelm.textContent = "It's a post about create Element ";
pelm.classList.add("post__content");

// create footer
const footerelm = document.createElement("footer");
footerelm.classList.add("post__footer");
const spanelm = document.createElement("span");
spanelm.textContent = "@username";
spanelm.classList.add("post__username");
const buttonelm = document.createElement("button");
buttonelm.classList.add("post__button");
buttonelm.textContent = "♥ Like";
buttonelm.setAttribute("data-js", "like-button");
buttonelm.addEventListener("click", handleLikeButtonClick);
footerelm.append(spanelm);
footerelm.append(buttonelm);

articleSec.append(pelm);
articleSec.append(footerelm);
document.body.append(articleSec);
