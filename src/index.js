console.log('%c HI', 'color: firebrick');


document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        //function to add image elements to DOM
        const dogDiv = document.getElementById("dog-image-container")
        const ul = document.createElement('ul')
        // console.log(data)
        data["message"].forEach(function(img) {
           const li = document.createElement("li")
           const imgSrc = document.createElement("img");
           imgSrc.setAttribute("src", img)
           li.appendChild(imgSrc)
           // <li> src=""https://images.dog.ceo/breeds/spaniel-cocker/n02102318_234.jpg"" </li>
           ul.appendChild(li)
           //<ul>
            // <li> src=""https://images.dog.ceo/breeds/spaniel-cocker/n02102318_234.jpg"" </li>
        });
        dogDiv.appendChild(ul)
        // <div>
    });
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        // const li = document.createElement("li")
        const breedUl = document.getElementById("dog-breeds")
        console.log(data['message'])

        // data["message"].forEach(function(breed) {
        //     console.log(breed)
        // })
        // console.log(data)
        for (let breedKey in data["message"]) {
            
            let b = data["message"][breedKey]

            if (b.length != 0) {
                b.forEach(function(subBreed) {
                    
                    const subLi = document.createElement("li")
                    // const button = document.createElement("button")
                    // button.class = "breed-color"
                    // button.setAttribute("type", "button")
                    // button.setAttribute('class', )
                    // button.textContent = "change text color"
                    subLi.textContent = breedKey + " - " + subBreed
                    // subLi.appendChild(button)
                    breedUl.appendChild(subLi)

                    subLi.addEventListener("click", function(event) {
                        console.log(event)
                        event.target.style.color = "red"
                    })
                })        

            } else {
                const li = document.createElement("li")
                // const button = document.createElement("button")
                // button.class = "breed-color"
                // button.setAttribute("type", "button")
                // button.textContent = "change text color"
                li.textContent = breedKey
                // li.appendChild(button)
                breedUl.appendChild(li)
                
                li.addEventListener("click", function(a) {
                    a.target.style.color = "blue"
                })
                
                
            }
            // check if that data at message at breed key has sub catigotries
            // if yes loop -> make breed names prefixed with sub categories
            // 
        };
        
    });
    // const dropDown = document.getElementById("breed-dropdown")
    // dropDown.addEventListener("change", function(a) {
    //     lists.forEach(function(li) {
    //         if (li.innerText[0] ===  a.target.value) {
                
    //     for (let breedKey in data["message"]) {
    //         if (breedKey[0] === ) {
    //             create element lists

    //         }
    //         }
    //     })

    // })
    
    // Great idea inorder to filter the breed list is to create a 
    // fetch() request that updates the index area.--get
    // or add conditions relative to the values of the <optin>
});