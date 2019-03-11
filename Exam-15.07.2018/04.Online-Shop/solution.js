function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let $product = $('input:first');
    let $price = $('#price');
    let $qunatity = $('#quantity');
    let $submitButton = $('#submit');
    let $ul = $('.display');
    let $capacity = $('#capacity');
    let $sum = $('#sum');

    $product.on('input', function () {
        $submitButton.attr('disabled', false);
    });

    $submitButton.on('click', function () {
        let product = $product.val();
        let price = Number($price.val());
        let quantity = Number($qunatity.val());

        let totalCapacity = Number($capacity.val()) + quantity;
        if (totalCapacity < 150) {
            let $li = $(`<li>Product: ${product} Price: ${price} Quantity: ${quantity}</li>`);
            $ul.append($li);

            let totalSum = Number($sum.val()) + price;
            $capacity.val(totalCapacity);
            $sum.val(totalSum);
        } else {
            $capacity.val('full');
            $capacity.addClass('fullCapacity');
            $submitButton.attr('disabled', true);
            $product.attr('disabled', true);
            $price.attr('disabled', true);
            $qunatity.attr('disabled', true);
        }

        $product.val('');
        $price.val(1);
        $qunatity.val(1);
        $submitButton.attr('disabled', true);
    });
}
