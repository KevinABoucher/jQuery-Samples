(function($){
 $.fn.modified = function(options) {
    
   var defaults = {  
     onModified: function(v) { alert(v + ' has changed') }  
   };  
    
   var options = $.extend(defaults, options);  
  
   var originalvalue = this.val();
   var newValue = this.val();
  
  return this.change(function() {
   obj = $(this);
   newValue = obj.val();
   
   if(newValue != originalvalue)
     options. onModified(obj.attr("id"));
   
  });
 };
})(jQuery);
