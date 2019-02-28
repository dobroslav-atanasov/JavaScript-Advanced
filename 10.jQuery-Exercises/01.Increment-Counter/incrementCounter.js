function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementButton = $('<button>Increment</button>');
    let addButton = $('<button>Add</button>');
    let list = $('<ul>');
    
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', 'true');

    incrementButton.addClass('btn');
    incrementButton.attr('id', 'incrementBtn');

    addButton.addClass('btn');
    addButton.attr('id', 'addBtn');

    list.addClass('results');

    $(incrementButton).on('click', function(){
        textArea.val(Number(textArea.val()) + 1);
    });

    $(addButton).on('click', function(){
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });

    textArea.appendTo(fragment);
    incrementButton.appendTo(fragment);
    addButton.appendTo(fragment);
    list.appendTo(fragment);
    container.append(fragment);
}