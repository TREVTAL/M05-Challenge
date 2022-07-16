// setup current date
var today = moment();
// set text so current date is printed on top os page
$('#currentDay').text(today.format("dddd, MMMM Do"));



// event loader first hour
var h06 = localStorage.getItem('ls06');
$('#html06').html(h06);






// event saver first hour
var btn06 = $('#save06');
btn06.on('click', function(){
    h06 = $('#html06').html();
    console.log(h06);
    localStorage.setItem('ls06', h06);
});








// define class based on hour for first hour
var hr = moment().format("HH");
// var hr = 14
console.log(hr);

if (hr==06) {
    $('#html06').addClass('present')
} else if (hr>06) {
    $('#html06').addClass('past')
}  else {   $('#html06').addClass('future') };






// REST OF FORMULAS, TONS OF COPY PASTING AND REPLACING!!!
// 0700
var h07 = localStorage.getItem('ls07');
$('#html07').html(h07);

var btn07 = $('#save07');
btn07.on('click', function(){
    h07 = $('#html07').html();
    console.log(h07);
    localStorage.setItem('ls07', h07);
});

if (hr==07) {
    $('#html07').addClass('present')
} else if (hr>07) {
    $('#html07').addClass('past')
}  else {   $('#html07').addClass('future') };



//0800
var h08 = localStorage.getItem('ls08');
$('#html08').html(h08);

var btn08 = $('#save08');
btn08.on('click', function(){
    h08 = $('#html08').html();
    console.log(h08);
    localStorage.setItem('ls08', h08);
});

if (hr==08) {
    $('#html08').addClass('present')
} else if (hr>08) {
    $('#html08').addClass('past')
}  else {   $('#html08').addClass('future') };





//0900
var h09 = localStorage.getItem('ls09');
$('#html09').html(h09);

var btn09 = $('#save09');
btn09.on('click', function(){
    h09 = $('#html09').html();
    console.log(h09);
    localStorage.setItem('ls09', h09);
});

if (hr==09) {
    $('#html09').addClass('present')
} else if (hr>09) {
    $('#html09').addClass('past')
}  else {   $('#html09').addClass('future') };





//1000
var h10 = localStorage.getItem('ls10');
$('#html10').html(h10);

var btn10 = $('#save10');
btn10.on('click', function(){
    h10 = $('#html10').html();
    console.log(h10);
    localStorage.setItem('ls10', h10);
});

if (hr==10) {
    $('#html10').addClass('present')
} else if (hr>10) {
    $('#html10').addClass('past')
}  else {   $('#html10').addClass('future') };





//1100
var h11 = localStorage.getItem('ls11');
$('#html11').html(h11);

var btn11 = $('#save11');
btn11.on('click', function(){
    h11 = $('#html11').html();
    console.log(h11);
    localStorage.setItem('ls11', h11);
});

if (hr==11) {
    $('#html11').addClass('present')
} else if (hr>11) {
    $('#html11').addClass('past')
}  else {   $('#html11').addClass('future') };





//1200
var h12 = localStorage.getItem('ls12');
$('#html12').html(h12);

var btn12 = $('#save12');
btn12.on('click', function(){
    h12 = $('#html12').html();
    console.log(h12);
    localStorage.setItem('ls12', h12);
});

if (hr==12) {
    $('#html12').addClass('present')
} else if (hr>12) {
    $('#html12').addClass('past')
}  else {   $('#html12').addClass('future') };





//1300
var h13 = localStorage.getItem('ls13');
$('#html13').html(h13);

var btn13 = $('#save13');
btn13.on('click', function(){
    h13 = $('#html13').html();
    console.log(h13);
    localStorage.setItem('ls13', h13);
});

if (hr==13) {
    $('#html13').addClass('present')
} else if (hr>13) {
    $('#html13').addClass('past')
}  else {   $('#html13').addClass('future') };





//1400
var h14 = localStorage.getItem('ls14');
$('#html14').html(h14);

var btn14 = $('#save14');
btn14.on('click', function(){
    h14 = $('#html14').html();
    console.log(h14);
    localStorage.setItem('ls14', h14);
});

if (hr==14) {
    $('#html14').addClass('present')
} else if (hr>14) {
    $('#html14').addClass('past')
}  else {   $('#html14').addClass('future') };





//1500
var h15 = localStorage.getItem('ls15');
$('#html15').html(h15);

var btn15 = $('#save15');
btn15.on('click', function(){
    h15 = $('#html15').html();
    console.log(h15);
    localStorage.setItem('ls15', h15);
});

if (hr==15) {
    $('#html15').addClass('present')
} else if (hr>15) {
    $('#html15').addClass('past')
}  else {   $('#html15').addClass('future') };





//1600
var h16 = localStorage.getItem('ls16');
$('#html16').html(h16);

var btn16 = $('#save16');
btn16.on('click', function(){
    h16 = $('#html16').html();
    console.log(h16);
    localStorage.setItem('ls16', h16);
});

if (hr==16) {
    $('#html16').addClass('present')
} else if (hr>16) {
    $('#html16').addClass('past')
}  else {   $('#html16').addClass('future') };
