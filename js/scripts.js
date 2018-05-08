$(function() {
  $('.thumbnail img').click(function(e) {
    e.preventDefault();
    var that = $(this);
    $('.thumbnail img').removeClass('selected');
    that.addClass('selected');

    var id = that.data("id");
    $('img.main-image').attr("src", "images/product-large-" + id + ".jpg")
  });


  $('.expand .title').click(function(e) {
    e.preventDefault();

    var that = $(this);

    that.parent().find('.text').slideToggle("slow", function() {
      if (that.parent().hasClass('collapsed')) {
        that.parent().find('.title a').html('<img src="images/arrow-expanded.png" /> EXPANDED');
      }
      else {
        that.parent().find('.title a').html('<img src="images/arrow-collapsed.png" /> COLLAPSED');
      }
      that.parent().toggleClass('collapsed');
    });

  });

  $('#exampleModal').on('shown.bs.modal', function () {
    var thumbnail = $('img.selected').parent().html();
    var quantity = $("#quantity option:selected").text();
    var title = $('h1').text();

    $('.modal-body').html(thumbnail + "<br />" + quantity + " " + title + " succesfully added to your shopping cart!");
  })
});
