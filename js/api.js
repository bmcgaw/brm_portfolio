document.addEventListener("DOMContentLoaded", function () {
  fetch("https://devbook.azurewebsites.net/Admin/Post/GetPosts")
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Error connection to blog API for post retrieval - " +
            response.statusText
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const blogArticles = document.getElementById("blogArticles");
      data.data.forEach((post) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("col-md-4");
        blogArticles.append(wrapper);

        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("mb-4");
        card.classList.add("shadow");
        wrapper.append(card);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.append(cardBody);

        const cardTitle = document.createElement("h3");
        cardTitle.innerText = post.title;
        const cardText = document.createElement("p");
        cardText.style.marginBottom = 0;

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = post.content.slice(0, 200) + "...";
        cardText.textContent = tempDiv.textContent || tempDiv.innerText || "";

        const line = document.createElement("hr");

        cardBody.append(cardTitle);
        cardBody.append(line);
        cardBody.append(cardText);

        const cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");

        const linkToArticle = document.createElement("a");
        linkToArticle.href = `http://devbook.azurewebsites.net/Guest/Home/Details/${post.id}`;
        linkToArticle.classList.add("btn", "btn-primary");
        linkToArticle.innerText = "Read Full Article";
        cardFooter.append(linkToArticle);
        card.append(cardFooter);
      });
    });
});
