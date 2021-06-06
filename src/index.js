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
      const ul = document.getElementById("dog-breeds");
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
  document.getElementById("dog-breeds").addEventListener("click",function(event) {
    if (event.target && event.target.matches("li.breed")) {
      event.target.style.color = "blue";
      }
    });
  }

function filterListener() {
  document.querySelector("#breed-dropdown").addEventListener("change",function(event) {
    const dropdownSelection = document.querySelector("#breed-dropdown").value
    const breedList = document.getElementsByClassName("breed");
    for (const breed of breedList) {
      if (breed.innerHTML[0] != dropdownSelection) {
        //console.log(breed.innerHTML)
        breed.style.display = "none";
        } else {
        breed.style.display = "";
        }
      };
    });
  }

document.addEventListener('DOMContentLoaded', function() {
  //fetchImages();
  fetchBreeds();
  });
