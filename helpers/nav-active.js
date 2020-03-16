module.exports = function(options) {
    // options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
    var part = options.fn(this).split("&")
   
    if (part[0].trim() == part[1].trim()) {
      return '<li class="active">';
    } else {
      return '<li>';
    }
}