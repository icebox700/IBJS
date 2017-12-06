/***************************************
 * IBJS v.01 - Icebox Javascript
 * Essent Catalogs
 * for use within Icebox Projects only
 *
 * created by Brandons Simms
 ***************************************/
$(document).ready(function () {
    $('.Groups tbody').hide();
    var SearchTable = $('.SearchTable');
    var productImages = $('.ProductImage');
    var productPricing = $('.ProductPricing');
    var productNames = $('.ProductName');
    var wrap = $('<div></div>', {
        class: 'product-wrap'
    });
    if (productImages.length > 0) {
        for (var i = 0; i < productImages.length; i++) {
            var div = $('<div></div>', {
                class: "product " + i
            });
            var productImage = $('<div></div>', {
                class: "ProductImage " + i
            });
            var productDetail = $('<div></div>', {
                class: "ProductDetail " + i
            });
            var productName = $('<div></div>', {
                class: "ProductName " + i
            });
            var productPrice = $('<div></div>', {
                class: "ProductPricing " + i
            });
            if (productImages[i].innerHTML === "") {
                var link = $('<a />', {
                    href: productNames[i].firstChild.attributes[0].value
                });
                var img = $('<img />', {
                    src: 'https://raw.githubusercontent.com/icebox700/IBJS/master/assets/img/ProductImagePlaceholder-01.png',
                    alt: 'Product Image Placeholder'
                });
                img.appendTo(productImages[i]).wrap(link);
            }
            div.append(productImage.append(productImages[i].innerHTML));
            productDetail.append(productName.append(productNames[i].innerHTML));
            productDetail.append(productPrice.append(productPricing[i].innerHTML));
            div.append(productDetail);
            wrap.append(div);
        }
        $('.Groups tbody').remove();
        SearchTable.append(wrap);
    }
    else {
        SearchTable.append('<h1 id="ComingSoon"> Coming Soon </h1>');
    }
});
console.log('IBJS Essent Catalog loaded...');
