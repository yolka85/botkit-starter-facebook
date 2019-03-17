module.exports = function(controller) {
  controller.on('facebook_postback', function(bot, message) {
    if(message.text == 'show_main_menu'){
      bot.reply(message,
        {
        "text": "Main menu",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"My purchases",
            "payload":"my_purchases_payload",
          },
          {
            "content_type":"text",
            "title":"Shop",
            "payload":"shop_payload",
          },
          {
            "content_type":"text",
            "title":"Favorites",
            "payload":"favorites_payload",
          },
          {
            "content_type":"text",
            "title":"To invite a friend",
            "payload":"invite_payload",
          },
        ]
      })
    }
    else{
      bot.reply(message, 'This button is under construction');
    }
  });
  controller.on('message_received', function(bot, message) {
    console.log(message.quick_reply.payload);
    bot.reply(message, 'This button is under construction');
  });
};
