$(function() {

    const  coatsContentWrapper = $('.coats-content-wrapper');
    const getcoatsHTML = function(coatsObj) {
            return `<div class="single-coats-wrapper" data-id=${coatsObj.id}>
            <div class="coats-image-wrapper" data-img="${coatsObj.imgUrl}" style="background-image: url(assets/coats/${coatsObj.imgUrl})"></div>
            
            <div class="title-and-price-wrapper">
                <div class="title-wrapper">${coatsObj.name}</div>
                <div class="price-wrapper">${coatsObj.currency} ${coatsObj.price}</div>
            </div>
                  
        </div>`;
    };
    const getNameHTML =function(coatsProp){
        return`<h3>${coatsProp.name}</h3>
            <div class="price">${coatsProp.currency} ${coatsProp.price}</div>`;
    }
    const getCompositionCountryHTML = function(coatsProp){
        return ` <div class="composition subtitle">Composition <span>${coatsProp.composition}</span></div>
            <div class="country subtitle">Country <span>${coatsProp.country}</span></div> `;
    }
    const getCareHTML= function(coatsProp){
        return `<div>${coatsProp.care}</div>`;
    }
    
    let coats= products.coats;
    for(let i = 0; i < coats.length; i++) {
        let coatsObj = coats[i], 
            coatsHMTL = getcoatsHTML(coatsObj);
        coatsContentWrapper.append(coatsHMTL);
    } 

    //navigation list background color 
    const navItem= $('li');
    navItem.click(function(){
        navItem.removeClass('selected');
        $(this).addClass('selected');
        console.log(navItem)
    })

    //event on item
    const overlay = $('.overlay'),       
          imgWrapper = $('.product-wrapper'),
          singleCoats= $('.single-coats-wrapper'),
          compositionCountry= $('.composition-country-wrapper'),
          careDetails= $('.care-details');
  
    singleCoats.click(function(){
        const productId=$(this).data('id');
        appendProductDetails(productId);
        overlay.fadeIn();
    });

   const productHeader = $('.product-header'); 
   function appendProductDetails(productId){
        let coatsProp = coats[productId-1],
            coatsNameHMTL = getNameHTML(coatsProp),
            coatsCompositionCountryHMTL = getCompositionCountryHTML(coatsProp),
            coatsCareHMTL = getCareHTML(coatsProp),
            coatsItems= $('.coats-image-wrapper');
        productHeader.append(coatsNameHMTL);
        compositionCountry.append(coatsCompositionCountryHMTL);
        careDetails.append(coatsCareHMTL);
        imgWrapper.css({backgroundImage: `url(assets/coats/${coatsProp.imgUrl})`});
    }
  
    //event on close btn
    const closeBtn=$('.close-btn');
    closeBtn.click(function(){
        overlay.fadeOut();
        // nu cred ca este cea mai buna solutie, dar daca nu il pun imi tot completeaza cu date de fiecare data cand dau click pe o poza
        // ma poti ajuta, te rog cu o sugestie de cum as putea sa rescriu datele la click pe poza?
        location.reload();
    })
});