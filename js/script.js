document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let quote = document.getElementById('quote'),
        quoteAuthor = document.getElementById('quote_author'),
        generateQuote = document.getElementById('generate'),
        twitter = document.getElementById('twitter'),
        quoteWrapper = document.getElementById('wrapper');

    function generatingQuote() {
        fetch('https://stormy-waters-81463.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
            .then(request => request.json())
            .then(data => {
                quote.innerHTML = data.quoteText;
                if(data.quoteAuthor) {
                    quoteAuthor.innerHTML = data.quoteAuthor;
                } else {quoteAuthor.innerHTML = 'Someone';}
            })
            .catch(() => {
                generatingQuote();
            });
    }

    generatingQuote();

    generateQuote.addEventListener('click', (e) => {
        generateQuote.classList.remove('active');
        generateQuote.classList.add('inactive');
        generateQuote.disabled = true;
        twitter.classList.remove('active');
        twitter.classList.add('inactive');
        twitter.disabled = true;
        
        quoteWrapper.classList.add('wrapper_download');
        quote.classList.add('font_hide');
        quoteAuthor.classList.add('font_hide');

        generatingQuote();
        
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
            generateQuote.disabled = false;
            generateQuote.classList.add('active');
            generateQuote.classList.remove('inactive');
            twitter.disabled = false;
            twitter.classList.add('active');
            twitter.classList.remove('inactive');
        },5600);
        
    });

   twitter.addEventListener('click', ()=> {
        window.open(`https://twitter.com/intent/tweet?text="${quote.innerText}" ${quoteAuthor.innerText}`);
   });

});