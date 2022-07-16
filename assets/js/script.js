// setup current date
var today = moment();
// set text so current date is printed on top os page
$('#currentDay').text(today.format("dddd, MMMM Do"));

// event loader
var h0600 = localStorage.getItem('ls0600');
$('#html0600').html(h0600);

// event saver
var btn06 = $('#save06');
btn06.on('click', function(){
    h0600 = $('#html0600').html();
    console.log(h0600);
    localStorage.setItem('ls0600', h0600);
});

// define class based on hour

var hr=moment().format("HH");
console.log(hr);

if (hr==06) {
    $('#html0600').addClass('present')
} else if (hr>06) {
    $('#html0600').addClass('past')
}  else {   $('#html0600').addClass('future') };
