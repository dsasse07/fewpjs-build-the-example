// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal")
errorModal.classList.toggle('hidden')
const likeQuery = new RegExp (`${EMPTY_HEART}`)

const likePost = post => {
  let thisCard = post
  mimicServerCall()
    .then( thisCard.querySelector(".like-glyph").textContent = FULL_HEART)
    .catch( errorModal.classList.toggle("hidden"))
}

const handleClick = e => {
  switch (true) {
    case (likeQuery.test(e.target.textContent)):
      likePost(e.target.closest(".media-post"))
      break
  }
}

document.body.addEventListener('click', handleClick)


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
