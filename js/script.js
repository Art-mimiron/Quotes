document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let quote = document.getElementById('quote'),
        quoteAuthor = document.getElementById('quote_author'),
        generateQuote = document.getElementById('generate'),
        twitter = document.getElementById('twitter'),
        quoteWrapper = document.getElementById('wrapper');

    generateQuote.addEventListener('click', (e) => {
        generateQuote.classList.remove('active');
        generateQuote.classList.add('inactive');
        
        quoteWrapper.classList.add('wrapper_download');
        quote.classList.add('font_hide');
        quoteAuthor.classList.add('font_hide');

        fetch('https://stormy-waters-81463.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
            .then(request => request.text())
            .then(request => JSON.parse(request))
            .then(request => {
                quote.innerHTML = request.quoteText;
                quoteAuthor.innerHTML = request.quoteAuthor;
                console.log(request);
            });
        
        setTimeout(()=>{
            quoteWrapper.classList.add('wrapper_done');
        }, 3500);

        setTimeout(()=>{
            quoteWrapper.classList.remove('wrapper_download');
            quoteWrapper.classList.remove('wrapper_done');
            
        }, 4500);
        setTimeout(()=>{
            
            quote.classList.remove('font_hide');
            quoteAuthor.classList.remove('font_hide');
        }, 4950);

        setTimeout(()=> {
            generateQuote.classList.add('active');
            generateQuote.classList.remove('inactive');
        },5600);
        
    });

   /*  generateQuote.addEventListener('click', function(e) {
        console.log('hi');
    }); */

});