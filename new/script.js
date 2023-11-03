import getCards from "./cards.js";
import { firestore } from "./firebase.js";
import { addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

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

    // Remove all truncation and irrelevant stuff because recruiters are busy people
    // $('.card-text').removeClass('truncate');
    $('.item:not(.relevant)').addClass('d-none');

    $("#relevant-filter").click(function() {
        $('.card-text').toggleClass('truncate');
        $("#relevant-tooltip").toggleClass('d-none');
    });

    // Filtering
    $('.filter').click(function() {
        // Whenever any filter is clicked, check all filters
        let filters = [];
        let relevant = $('#relevant-filter').prop('checked') ? '.relevant' : '';
        $('.filter').each(function() {
            if ($(this).prop('checked')) {
                filters.push($(this).attr('id').replace('-filter', '') + relevant);
            }
        });
        console.log(filters);

        // If no filters are active, show all cards
        if (filters.length === 0) {
            $('.item').removeClass('d-none');
            $('.item').removeClass('filtered');
        } else {
            // Otherwise, hide all cards
            $('.item').addClass('d-none');
            $('.item').addClass('filtered');

            // Show cards with active filters
            filters.forEach(filter => {
                $('.' + filter).removeClass('d-none');
                $('.' + filter).removeClass('filtered');
            });

            // Show cards with active filters and search query
            let query = $('#search-bar').val().toLowerCase();
            query = query.split(' ');
            $('.item').each(function() {
                if ($(this).hasClass('filtered')) return;

                // Show or hide card
                if (card_contains($(this), query)) {
                    $(this).removeClass('d-none');
                } else {
                    $(this).addClass('d-none');
                }
            });

            // If no cards are shown, show message
            if ($('.item:not(.d-none)').length === 0) {
                $('#no-results').removeClass('d-none');
            } else {
                $('#no-results').addClass('d-none');
            }
        }
    });

    // Searching
    $('#search-bar').on('input', function() {
        let query = $(this).val().toLowerCase();
        query = query.split(' ');
        $('.item').each(function() {
            if ($(this).hasClass('filtered')) return;

            // Show or hide card
            if (card_contains($(this), query)) {
                $(this).removeClass('d-none');
            } else {
                $(this).addClass('d-none');
            }
            
            // If no cards are shown, show message
            if ($('.item:not(.d-none)').length === 0) {
                $('#no-results').removeClass('d-none');
            } else {
                $('#no-results').addClass('d-none');
            }
        });
    });

    // Demo reel
    $('#demo-prev').click(function() {
        $('#demo-reel').carousel('prev');
    });
    $('#demo-next').click(function() {
        $('#demo-reel').carousel('next');
    });

    // Message
    $('#submit-btn').click(function() {
        let sender = $('#name-form').val();
        let message = $('#message-form').val();

        if (message) {
            // Send message
            addDoc(collection(firestore, "messages"), {
                sender: sender,
                message: message
            }).then(() => {
                $('#message-form').val('');
                $('#name-form').val('');
            }).catch((error) => {
            });
        }
    });
    $('#reset-btn').click(function() {
        $('#message-form').val('');
        $('#name-form').val('');
    });
});

// Search function
function card_contains(card, query) {
    let text = card.find('.card-text').text().toLowerCase();

    // Search in title, subtitle, small, and tags
    $(card).find('.badge').each(function() {
        text += ' ' + $(this).text().toLowerCase();
    });
    text += ' ' + card.find('.card-title').text().toLowerCase();
    text += ' ' + card.find('.card-subtitle').text().toLowerCase();
    text += ' ' + card.find('.card-small').text().toLowerCase();

    // Search for each word in query
    let found = true;
    query.forEach(word => {
        if (!text.includes(word)) found = false;
    });

    return found;
}

// Generate card HTML
function generate_card(tag, card) {
    let res = `
    <div class="col-sm-6 col-xl-4 p-2 item d-flex">
        <div class="card card-color">
            <div class="card-body d-flex justify-content-between flex-column">
                <div>
                    <div class="row mb-2">
                        <div class="col-2 col-sm-3 col-lg-4 d-flex flex-column justify-content-center text-center mb-2">
                            ${card.image ? '<img src="' + card.image + '" class="img-fluid rounded-circle" alt="">' : '<i class="text-warning ' + card.icon + ' card-icon"></i>'}
                        </div>
                        <div class="col">
                            <h5 class="card-title text-light m-0">${card.title}</h5>
                            ${card.subtitle ? '<h6 class="card-subtitle mt-1 text-secondary">' + card.subtitle + '</h6>' : ''}
                            ${card.small ? '<small class="text-secondary card-small">' + card.small + '</small>' : ''}
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