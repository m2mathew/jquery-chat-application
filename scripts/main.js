'use strict';

// http://tiyfe.herokuapp.com/collections/mike_m

$(document).ready(function() {

    // target elements
    var $form = $('form');
    var $chatInput = $('#chat-input');
    var $messageBlock = $('message-block');
    var $chatBox = $('#chat-box');
    var $deleteButton = $('#delete-button');
    var $timeStamp = $('#time-stamp');
    var now = moment().format('MMMM Do YYYY, h:mm:ss a');

    // create function
    $form.submit(function(e) {
        e.preventDefault();
        console.log(now);
        // get input from the array
        var newChat = $chatInput.val();

        // empty the input box
        $chatInput.val('');

        // Make a post request to tiny pizza server
        $.post(
            'http://tiyfe.herokuapp.com/collections/mike_m',
            {message: newChat, timestamp: now},
            function(result) {
                var newString = '<div> &#8226; ' + result.message + '</div><span> ' + result.timestamp +'</span>';
                $chatBox.append(newString);
                console.log(newString);
            },
            'json'
        );
    });

    // get info to print from the server on a timed delay
    setInterval( function() {
        $.get(
            'http://tiyfe.herokuapp.com/collections/mike_m',
            function(response) {
                $chatBox.text('');
                response.reverse();
                for(var i = 0; i < response.length; i++) {
                    $chatBox.append('<div> &#8226; ' + response[i].message + '</div><span> ' + response[i].timestamp +'</span>');
                }
            },
            'json'
        )}, 2000);

    function onDeleteCollection() {
        $.get(
            'http://tiyfe.herokuapp.com/collections/mike_m',
            onGetCollectionRecords,
            'json'
        );
        $chatBox.text('');
    }

    function onGetCollectionRecords(response) {
        response.forEach(function(record) {
            var url = 'http://tiyfe.herokuapp.com/collections/mike_m/' + record._id;
            $.ajax({
                url: url,
                method: 'DELETE'
            });
        });
    }

    $deleteButton.click(onDeleteCollection);
});
