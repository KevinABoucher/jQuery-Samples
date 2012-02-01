(function($){
 $.fn.modified = function(options) {
    
   var defaults = {  
     onModified: function(id, previousVal, newVal) { 
     	alert('The value for ' + id + ' has changed from ' + previousVal + " to " + newVal ); }  
   };  
    
   var options = $.extend(defaults, options);  
  
   this.each(function() {
     $(this).data('originalValue', $(this).val());
   });
  
  return this.change(function() {
   var newValue = $(this).val();
   var originalValue = $(this).data('originalValue');
   
   if(newValue != originalValue)
     options.onModified($(this).attr("id"), originalValue, newValue);
   
  });
 };
})(jQuery);
