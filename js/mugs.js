$('.heart').on('click',function() {
    $(this).find("i").toggleClass("far fas");
});

$('.shoppingCart').on('click',function() {
    $(this).find("i").toggleClass("add-cart selected-cart");
});


var mcs=[{
    'name': 'Mug1',
    'image': '1.jpg',
    'price':'Rs.299'
},
{
    'name': 'Mug2',
    'image': '2.jpg',
    'price':'Rs.299'
},
{
    'name': 'Mug3',
    'image': '3.jpg',
    'price':'Rs.299'
},
{
    'name': 'Mug4',
    'image': '4.jpg',
    'price':'Rs.299'
},
{
    'name': 'Mug5',
    'image': '5.jpg',
    'price':'Rs.299'
},
{
    'name': 'Mug6',
    'image': '6.jpg',
    'price':'Rs.299'
},
{
    'name': 'Mug7',
    'image': '7.jpg',
    'price':'Rs.299'
},
{
    'name': 'Mug8',
    'image': '8.jpg',
    'price':'Rs.299'
},
{
    'name': 'Mug9',
    'image': '9.jpg',
    'price':'Rs.299'
},{
    'name': 'Mug10',
    'image': '10.jpg',
    'price':'Rs.299'
},{
    'name': 'Mug11',
    'image': '11.jpg',
    'price':'Rs.299'
},{
    'name': 'Mug12',
    'image': '12.jpg',
    'price':'Rs.299'
},{
    'name': 'Mug13',
    'image': '13.jpg',
    'price':'Rs.299'
},{
    'name': 'Mug14',
    'image': '14.jpg',
    'price':'Rs.299'
},{
    'name': 'Mug15',
    'image': '15.jpg',
    'price':'Rs.299'
}]
window.onload = function() {
    for(var i =0; i<15;i++) {
        var obj = mcs[i];
        var name = '#m' + (i+1);
        var mc = $(name);
        mc.find('.mc-name').text(obj.name);
        mc.find('.mc-price').text(obj.price);
        mc.find('.mc-image').attr('src','mugs/'+ obj.image)
      }      
}
$('.fa-heart').on('click',function() {

    $('.fas').toggleClass('hidden');
    $('.fa').toggleClass('hidden');
    
  });
