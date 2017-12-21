$(document).ready(function () {
  var twitter_user = 'claudinacr'

  $.getJSON(
    'http://search.twitter.com/search.json?callback=?&rpp=5&q=from:' + twitter_user,
    function (data) {
      $.each(data.results, function (i, tweet) {

        if (tweet.text !== undefined) {
          //Creamos un nuevo objeto de tipo fecha para obtener sus datos
          var date_tweet = new Date(tweet.created_at);
          var tweet_html;
          tweet_html = '<div>'
          //Agregamos el texto y un enlace
          tweet_html += '<p><b>' + tweet.text + '</b></p><a href="http://www.twitter.com/';
          tweet_html += twitter_user + '/status/' + tweet.id_str + '">';
          //Agregamos la fecha
          tweet_html += date_tweet.getDate() + '/' + date_tweet.getMonth() + '/' + date_tweet.getFullYear() + '<\/a>';
          tweet_html += '<\/div>';
          //Añadimos el texto al contenedor que tenemos
          $('.tweets').append(tweet_html);
        }
      });
    }
  );
});