const getUserData = async () => {
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/books", {
      method: "GET",
      headers: {
        authorization: "yes",
      },
    });
    let data = await response.json();
    console.log(data);
    renderCard(data);
  } catch (error) {
    console.log(err);
  }
};

const renderCard = (data) => {
  let row = document.querySelector(".row");
  //   for (let i = 0; i < data.length; i++) {
  //     const singlebook = data[i];

  //     row.innerHTML += `
  //     `;
  //   }
  data.forEach((singleBook) => {
    row.innerHTML += `
    <div class="card col col-3 my-2 mx-3">
          <img src="${singleBook.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${singleBook.title}</h5>
            <p class="card-text">${singleBook.category}</p>
            <p class="card-text">${singleBook.asin}</p>
            <p class="card-text bookPrice">$ ${singleBook.price}</p>
            <div class="btn btn-primary" onclick="addToCart(this)">Add to Cart</div>
            <div class="btn btn-primary" onclick="deleteBook(this)">Skip</div>
          </div>
        </div>
    `;
  });
};

const addToCart = (btn) => {
  let card = btn.closest(".card");
  let tBody = document.querySelector("tbody");
  let tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${card.querySelector(".card-title").innerText}</td>
    <td>${card.querySelector(".bookPrice").innerText}</td>
    <td></td>
    `;
  tBody.appendChild(tr);

  card.classList.add("border", "border-success");
};

const deleteBook = (btn) => {
  btn.closest(".col").remove();
};

window.onload = () => {
  getUserData();
};
