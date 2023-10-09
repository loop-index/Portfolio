import getCards from "./cards.js";
$(document).ready(function() {
    // Load json
    Object.entries(getCards()).forEach(([tag, cards]) => {
        cards.forEach((card) => {
            let card_html = $(generate_card(tag, card)).appendTo('#cards');
            card.filter.forEach(filter => {
                card_html.addClass(filter);
            });
        });
    });

    // Prevent card text from being selected when clicking links
    $('.btn').click(function(e) {
        e.stopPropagation();
    });

    // Card toggling
    $('.card').click(function() {
        $(this).find('.card-text').toggleClass('truncate');
    });

    // Filtering
    $('.filter').click(function() {
        // Whenever any filter is clicked, check all filters
        let filters = [];
        $('.filter').each(function() {
            if ($(this).prop('checked')) {
                filters.push($(this).attr('id').replace('-filter', ''));
            }
        });
        console.log(filters);
        // If no filters are active, show all cards
        if (filters.length === 0) {
            $('.item').removeClass('d-none');
        } else {
            // Otherwise, hide all cards
            $('.item').addClass('d-none');
            // Show cards with active filters
            let combined = '.' + filters.join('.');
            $(combined).removeClass('d-none');
        }
    });
});

// Generate card HTML
function generate_card(tag, card) {
    let res = `
    <div class="col-sm-6 col-lg-4 p-2 item">
        <div class="card card-color">
            <div class="card-body d-flex justify-content-between flex-column">
                <div>
                    <div class="row mb-2">
                        <div class="col-2 col-sm-3 col-lg-4 d-flex flex-column justify-content-center text-center mb-2">
                            ${card.image ? '<img src="' + card.image + '" class="img-fluid rounded-circle" alt="">' : '<i class="text-warning ' + card.icon + ' card-icon"></i>'}
                        </div>
                        <div class="col">
                            <h5 class="card-title text-light m-0">${card.title}</h5>
                            ${card.subtitle ? '<h6 class="card-subtitle mt-1 text-muted">' + card.subtitle + '</h6>' : ''}
                            ${card.small ? '<small class="text-muted">' + card.small + '</small>' : ''}
                        </div>
                    </div>
                    <p class="mb-2 card-text text-light truncate">${card.text}</p>
                </div>
                <div>
                    ${card.links ? '<div class="mb-2">' + card.links + '</div>' : ''}
                    <div class="badge bg-warning text-dark mx-1">${tag}</div>`;

        card.tags.forEach(tag => {
            res += `<div class="badge bg-secondary text-dark mx-1">${tag}</div>`;
        });
        res += `</div>
            </div>
        </div>
    </div>
    `;
    return res;
}