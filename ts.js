$('.heart').on('click',function() {
    $(this).find("i").toggleClass("far fas");
});

$('.shoppingCart').on('click',function() {
    $(this).find("i").toggleClass("add-cart selected-cart");
});


var ts=[{
    'name': 'T-Shirt1',
    'image': 't (1).jpg',
    'price':'Rs.499'
},
{
    'name': 'T-Shirt2',
    'image': 't (2).jpg',
    'price':'Rs.499'
},
{
    'name': 'T-Shirt3',
    'image': 't (3).jpg',
    'price':'Rs.499'
},
{
    'name': 'T-Shirt4',
    'image': 't (4).jpg',
    'price':'Rs.499'
},
{
    'name': 'T-Shirt5',
    'image': 't (5).jpg',
    'price':'Rs.499'
},
{
    'name': 'T-Shirt6',
    'image': 't (6).jpg',
    'price':'Rs.499'
},
{
    'name': 'T-Shirt7',
    'image': 't (7).jpg',
    'price':'Rs.499'
},
{
    'name': 'T-Shirt8',
    'image': 't (8).jpg',
    'price':'Rs.499'
},
{
    'name': 'T-Shirt9',
    'image': 't (9).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt10',
    'image': 't (10).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt11',
    'image': 't (11).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt12',
    'image': 't (12).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt13',
    'image': 't (13).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt14',
    'image': 't (14).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt15',
    'image': 't (15).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt16',
    'image': 't (16).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt17',
    'image': 't (17).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt18',
    'image': 't (18).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt19',
    'image': 't (19).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt20',
    'image': 't (20).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt21',
    'image': 't (21).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt22',
    'image': 't (22).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt23',
    'image': 't (23).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt24',
    'image': 't (24).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt25',
    'image': 't (25).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt26',
    'image': 't (26).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt27',
    'image': 't (27).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt28',
    'image': 't (28).jpg',
    'price':'Rs.499'
},{
    'name': 'T-Shirt29',
    'image': 't (29).jpg',
    'price':'Rs.499'
}]
window.onload = function() {
    for(var i =0; i<29;i++) {
        var obj = ts[i];
        var name = '#t' + (i+1);
        var mc = $(name);
        mc.find('.mc-name').text(obj.name);
        mc.find('.mc-price').text(obj.price);
        mc.find('.mc-image').attr('src','tshirts/'+ obj.image)
      }      
}
$('.fa-heart').on('click',function() {

    $('.fas').toggleClass('hidden');
    $('.fa').toggleClass('hidden');
    
  });
