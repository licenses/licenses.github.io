;(function( doc ) {
    var name = location.search.replace( '?n=', '' ).split( '_' ).join( ' ' );
    doc.querySelector( '[data-js="name"]' ).innerHTML = name;
})( document );