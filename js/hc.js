$('.heart').on('click',function() {
    $(this).find("i").toggleClass("far fas");
});

$('.shoppingCart').on('click',function() {
    $(this).find("i").toggleClass("add-cart selected-cart");
});


var ebs=[{
    'name': 'Explosion Box1',
    'image': 'eb1 (2).JPG',
    'price':'Rs.499'
},
{
    'name': 'Explosion Box2',
    'image': 'eb2 (2).JPG',
    'price':'Rs.499'
},
{
    'name': 'Explosion Box3',
    'image': 'eb3 (2).JPG',
    'price':'Rs.499'
},
{
    'name': 'Explosion Box4',
    'image': 'eb4 (1).JPG',
    'price':'Rs.499'
},
{
    'name': 'Explosion Box5',
    'image': 'eb5 (2).JPG',
    'price':'Rs.499'
}]
window.onload = function() {
    for(var i =0; i<29;i++) {
        var obj = ebs[i];
        var name = '#eb' + (i+1);
        var mc = $(name);
        mc.find('.mc-name').text(obj.name);
        mc.find('.mc-price').text(obj.price);
        mc.find('.mc-image').attr('src','handicrafts/'+ obj.image)
      }      
}
$('.fa-heart').on('click',function() {

    $('.fas').toggleClass('hidden');
    $('.fa').toggleClass('hidden');
    
  });
