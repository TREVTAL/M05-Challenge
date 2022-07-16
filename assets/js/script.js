// setup current date
var now = moment();
// set text so current date is printed on top os page
$('#currentDay').text(now.format("dddd, MMMM Do"));

// event loader
var h0600 = localStorage.getItem('ls0600');
$('#html0600').html(h0600);

// event saver
var btn06 = $('#save06');
btn06.on('click', function(){
    h0600 = $('#html0600').html();
    console.log(h0600);
    localStorage.setItem('ls0600', h0600);
})

