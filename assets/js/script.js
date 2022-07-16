// setup current date
var now = moment();

$('#currentDay').text(now.format("dddd, MMMM Do"));

// var h0600 = $('.html0600').html();
// console.log(h0600);

var btn06 = $('#save06');
btn06.on('click', function(){
    var h0600 = $('#html0600').html();
    console.log(h0600);
})

