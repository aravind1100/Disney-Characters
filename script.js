const api_url = "https://api.disneyapi.dev/character";
const p = document.getElementById("p");
const row = document.getElementById("row");

const image = document.getElementsByClassName("card-img-top")[0];
const api = fetch(api_url);
api
  .then((ele) => ele.json())
  .then((result) => {
    try {
    const arr = result.data;
    arr.map((element) => {
      const col = document.createElement("div");
      col.classList.add(
        "col-12",
        "col-sm-6",
        "col-md-4",
        "p-3",
        "align-self-center"
      );
      col.innerHTML = `
                    <div class="card " >
                        <img src="${element.imageUrl}" class="card-img-top" alt="${element.name}">
                        <div class="card-body">
                          <p id="p" class="card-text">Character Name : ${element.name}</p>
                        </div>
                      </div>
               `;

      row.append(col);
    });
    } catch (error) {
      console.log(error)
    }
    
  });


