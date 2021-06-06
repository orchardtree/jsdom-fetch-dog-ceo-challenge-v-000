console.log('%c HI', 'color: firebrick')

const imagesUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedsUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchImages() {
  let images = fetch(imagesUrl)
      .then(resp => resp.json())
      .then(json => renderImages(json.message));
  return images;
  }

function renderImages(images) {
  const div = document.querySelector('div#dog-image-container');
  for (const image of images) {
    const img = document.createElement('img');
    img.src = image;
    div.appendChild(img);
    }
  }

  function fetchBreeds() {
    let breeds = fetch(breedsUrl)
        .then(resp => resp.json())
        .then(json => renderBreeds(json.message));
    return breeds;
    }

    function renderBreeds(breeds) {
      const ul = document.querySelector('ul#dog-breeds');
      for (const breed in breeds) {
        if (breeds[breed].length > 0) {
          const subBreeds = breeds[breed]
          for (const subBreed in subBreeds) {
            const subBreedBreed = subBreeds[subBreed] + " " + breed
            const li = document.createElement('li');
            li.innerHTML = subBreedBreed;
            li.className = "breed";
            ul.appendChild(li);
            }
          } else {
            const li = document.createElement('li');
            li.innerHTML = breed;
            li.className = "breed";
            ul.appendChild(li);
          }
        }
        breedListener();
        filterListener();
      }

function breedListener() {
  document.querySelector("#dog-breeds").addEventListener("click",function(event) {
    if (event.target && event.target.matches("li.breed")) {
      event.target.style.color = "blue";
      }
    });
  }

function filterListener() {
  document.querySelector("#breed-dropdown").addEventListener("change",function(event) {
    dropdownSelection = document.querySelector("#breed-dropdown").value
    alert(dropdownSelection)
    myFunction();
    });
  }

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("breed-dropdown");
    filter = input.value.toUpperCase();
    ul = document.getElementById("dog-breeds");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("li")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
  //fetchImages();
  fetchBreeds();
  });
