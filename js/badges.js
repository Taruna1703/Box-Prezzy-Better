$('.heart').on('click',function() {
    $(this).find("i").toggleClass("far fas");
});

$('.shoppingCart').on('click',function() {
    $(this).find("i").toggleClass("add-cart selected-cart");
});


var mcs=[{
    'name': 'Badge1',
    'image': '1.jpg',
    'price':'Rs.199'
},
{
    'name': 'Badge2',
    'image': '2.jpg',
    'price':'Rs.199'
},
{
    'name': 'Badge3',
    'image': '3.jpg',
    'price':'Rs.199'
},
{
    'name': 'Badge4',
    'image': '4.jpg',
    'price':'Rs.199'
},
{
    'name': 'Badge5',
    'image': '5.jpg',
    'price':'Rs.199'
},
{
    'name': 'Badge6',
    'image': '6.jpg',
    'price':'Rs.199'
},
{
    'name': 'Badge7',
    'image': '7.jpg',
    'price':'Rs.199'
},
{
    'name': 'Badge8',
    'image': '8.jpg',
    'price':'Rs.199'
},
{
    'name': 'Badge9',
    'image': '9.jpg',
    'price':'Rs.199'
},{
    'name': 'Badge10',
    'image': '10.jpg',
    'price':'Rs.199'
},{
    'name': 'Badge11',
    'image': '11.jpg',
    'price':'Rs.199'
},{
    'name': 'Badge12',
    'image': '12.jpg',
    'price':'Rs.199'
},{
    'name': 'Badge13',
    'image': '13.jpg',
    'price':'Rs.199'
},{
    'name': 'Badge14',
    'image': '14.jpg',
    'price':'Rs.199'
},{
    'name': 'Badge15',
    'image': '15.jpg',
    'price':'Rs.199'
},{
    'name': 'Badge16',
    'image': '13.jpg',
    'price':'Rs.199'
},{
    'name': 'Badge17',
    'image': '14.jpg',
    'price':'Rs.199'
},{
    'name': 'Badge18',
    'image': '15.jpg',
    'price':'Rs.199'
}]
window.onload = function() {
    for(var i =0; i<18;i++) {
        var obj = mcs[i];
        var name = '#b' + (i+1);
        var mc = $(name);
        mc.find('.mc-name').text(obj.name);
        mc.find('.mc-price').text(obj.price);
        mc.find('.mc-image').attr('src','badges/'+ obj.image)
      }      
}
$('.fa-heart').on('click',function() {

    $('.fas').toggleClass('hidden');
    $('.fa').toggleClass('hidden');
    
  });
