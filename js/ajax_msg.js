
(function ($) {

  /*
  Drupal.AjaxMsg = Drupal.AjaxMsg || {};
  Drupal.AjaxMsg.message_display=function(ajax, response, status) {
    alertify.log(response.message, response.type);
  }
  */
  Drupal.behaviors.ajax_msg = {
    attach: function(context) {
      for(var key in Drupal.settings.ajax_msg){
        var settings=Drupal.settings.ajax_msg[key];
        console.debug(settings.type);
       switch(settings.type){
         case 'error':
         case 'warning':
         alertify.log(settings.message, settings.type,0);
         break
        default:
          alertify.log(settings.message, settings.type,settings.delay);
       }
      }
      for(var key in Drupal.settings.ajax_msg){
        delete Drupal.settings.ajax_msg[key];
      }
      
      $('.alertify-confirm')
      .each(function(){
        $('.alertify-confirm-text',this).hide();

      })
      .click(function(){
        var message=$('.alertify-confirm-text',this).html();
        var url=$(this).attr('href');
        
        alertify.confirm(message);
        var button=$('#alertify-ok');
        
        var elementSettings = {};
        elementSettings.url = url;
        elementSettings.event = 'click';
        elementSettings.progress = {
          'type': 'throbber'
        }
        var base = '#alertify-ok';

        Drupal.ajax[base] = new Drupal.ajax(base, button, elementSettings);
        
        
        
        return false;
      });
      
      
    }
  };
/*
  $(function() {
    Drupal.ajax.prototype.commands.message_display = Drupal.AjaxMsg.message_display;
  });
  */
  
})(jQuery);
