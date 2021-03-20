$(function() {

    const  coatsContentWrapper = $('.coats-content-wrapper');
    // nici aici nu vom mai avea propertyObj, ceea ce am vazut noi in exemplu de la lectie se referea strict la entitatile din acel layout, adica properties, aici te poti raporta la produse, de exemplu
          getcoatsHTML = function(propertyObj) {
            return `<div class="single-coats-wrapper" data-id=${propertyObj.id}>
            <div class="coats-image-wrapper" style="background-image: url(assets/coats/${propertyObj.imgUrl})"></div>
            
            <div class="title-and-price-wrapper">
                <div class="title-wrapper">${propertyObj.name}</div>
                <div class="price-wrapper">${propertyObj.currency} ${propertyObj.price}</div>
            </div>
                  
        </div>`;
    };
    let coats= products.coats;
    console.log(coats)
    for(let i = 0; i < coats.length; i++) {
        let coatsObj = coats[i],
        // atentie aici nu mai avem propertyObj, de altfel este si eroare in consola
            coatsHMTL = getcoatsHTML(propertyObj);
            coatsContentWrapper.append(coatsHMTL);
    }
    

    //event on item
    const overlay = $('.overlay');
    const imgWrapper = $('.product-wrapper');
});