$('.heart').on('click',function() {
    $(this).find("i").toggleClass("far fas");
});

$('.shoppingCart').on('click',function() {
    $(this).find("i").toggleClass("add-cart selected-cart");
});


var mcs=[{
    'name': 'Butter-ballon',
    'image': '1.jpg',
    'price':'Rs.348'
},
{
    'name': 'Meri jaan',
    'image': '2.jpg',
    'price':'Rs.348'
},
{
    'name': 'Not Nice',
    'image': '3.jpg',
    'price':'Rs.348'
},
{
    'name': 'Floral Bed',
    'image': '4.jpg',
    'price':'Rs.348'
},
{
    'name': 'Smilling Minion',
    'image': '5.jpg',
    'price':'Rs.348'
},
{
    'name': 'Minion Stripes',
    'image': '6.jpg',
    'price':'Rs.348'
},
{
    'name': '1-3 Marble',
    'image': '7.jpg',
    'price':'Rs.348'
},
{
    'name': 'Better  Day',
    'image': '8.jpg',
    'price':'Rs.348'
},
{
    'name': 'Sided Garden',
    'image': '9.jpg',
    'price':'Rs.348'
},
{
    'name': 'The doctor',
    'image': '10.jpg',
    'price':'Rs.348'
},
{
    'name': 'Adidas MU',
    'image': '11.jpg',
    'price':'Rs.348'
},
{
    'name': 'Active Puppy',
    'image': '12.jpg',
    'price':'Rs.348'
},
{
    'name': 'Afrojack',
    'image': '13.jpg',
    'price':'Rs.348'
},
{
    'name': 'Angry Birds',
    'image': '14.jpg',
    'price':'Rs.348'
},
{
    'name': 'Angry Pugs',
    'image': '15.jpg',
    'price':'Rs.348'
},
{
    'name': 'Aqua Shaded',
    'image': '16.jpg',
    'price':'Rs.348'
},
{
    'name': 'Anchored Heart',
    'image': '17.jpg',
    'price':'Rs.348'
},
{
    'name': 'Anti-Social',
    'image': '18.jpg',
    'price':'Rs.348'
},
{
    'name': 'Arrow-22',
    'image': '19.jpg',
    'price':'Rs.348'
},
{
    'name': 'Arrow-11',
    'image': '20.jpg',
    'price':'Rs.348'
}
]
window.onload = function() {
    for(var i =0; i<20;i++) {
        var obj = mcs[i];
        var name = '#mc' + (i+1);
        var mc = $(name);
        mc.find('.mc-name').text(obj.name);
        mc.find('.mc-price').text(obj.price);
        mc.find('.mc-image').attr('src','images-mc/' + obj.image)
      }      
}
$('.fa-heart').on('click',function() {

    $('.fas').toggleClass('hidden');
    $('.fa').toggleClass('hidden');
    
  });


