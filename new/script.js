import getCards from "./cards.js";

$(document).ready(function() {
    // Load json
    Object.entries(getCards()).forEach(([tag, cards]) => {
        cards.forEach((card) => {
            $("#cards").append(generate_card(tag, card));
        });
    });
});

function generate_card(tag, card) {
    let res = `
    <div class="col-12 col-md-6 col-lg-3 col-xl-2 p-2">
        <div class="card">
            <div class="card-body">
                <div class="row mb-2">
                    <div class="col-3">
                        <img src="${card.image}" class="img-fluid rounded-circle">
                    </div>
                    <div class="col">
                        <h5 class="card-title">${card.title}</h5>
                        <h6 class="card-subtitle text-body-secondary">${card.subtitle}</h6>
                        <small class="text-muted">${card.small}</small>
                    </div>
                </div>
                <p class="card-text text-truncate">${card.text}</p>
                <div class="badge bg-warning text-dark mx-1">${tag}</div>`;

    card.tags.forEach(tag => {
        res += `<div class="badge bg-secondary text-dark mx-1">${tag}</div>`;
    });
    res += `</div>
        </div>
    </div>
    `;
    return res;
}