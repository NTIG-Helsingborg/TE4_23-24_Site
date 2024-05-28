class Projectcard extends HTMLElement {
  static observedAttributes = ["group", "text-side","describiton"];

  constructor() {
    super();
  }

  connectedCallback() {
    this.renderCards();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "group") {
      this.renderCards();
    }
  }

  renderCards() {
    const group = parseInt(this.getAttribute("group"));

    let projects = [
      { group: 1, name: "whisker Wonders", image: "https://placehold.co/100x0", link: "https://example.com" },
      { group: 1, name: "Furry Friends", image: "https://placehold.co/100x0", link: "https://example.com" },
      { group: 1, name: "Paw Prints", image: "https://placehold.co/100x0", link: "https://example.com" },
      { group: 1, name: "Purrfect Pals", image: "https://placehold.co/100x0", link: "https://example.com" },
      { group: 2, name: "Meow Mates", image: "https://placehold.co/100x0", link: "https://example.com" },
      { group: 2, name: "Kitty Krew", image: "https://placehold.co/100x0", link: "https://example.com" },
      { group: 2, name: "Cat Crew", image: "https://placehold.co/100x0", link: "https://example.com" },
      { group: 3, name: "Feline Friends", image: "https://placehold.co/100x0", link: "https://example.com" },
      { group: 3, name: "Cat Clan", image: "https://placehold.co/100x0", link: "https://example.com" },
      { group: 3, name: "Paw Pals", image: "https://placehold.co/100x0", link: "https://example.com" },
    ];



    var side ;

    let boxHTML = ` <div class="row gx-5 justify-content-center mb-5" >`;
   

    if (this.getAttribute("text-side") === "right") {
     side =  "text-end";
    } else {
       side = "text-start";
        }






     let titleHTML = `
   <div class="col-xxl-5 ${side} ">
        <h2 class="display-6 fw-bolder">
          <span class="text-gradient d-inline">Webb shop</span>
        </h2>
        <div class="fs-3 fw-light text-muted">
            Projekt ${group}
        </div>
          <p class="card-text">${this.getAttribute("describiton")}</p>
    </div>`;

    let cardHTML = `<div class="col-xxl-5 row ">`;

    projects.forEach((project) => {
      if (project.group === group) {
        cardHTML += `
                <div class="card d-inline-block shadow border-0 p-1 mb-4 ">
                <a class="stretched-link" href="index.html">
                <img src="${project.image}"  class="card-img" alt="...">
                        
                <div class="card-img-overlay ">
                <h5 class="card-title">${project.name}</h5>
               
              </div>
                    </a>
                </div>
                
                `;
      }
    });

    cardHTML += `</div>`;




    if (this.getAttribute("text-side") === "left") {
      this.innerHTML = boxHTML + titleHTML + cardHTML + `</div> `;
    } else {
      this.innerHTML = boxHTML + cardHTML + titleHTML + `</div> `;
    }
  }
}

customElements.define("project-card", Projectcard);