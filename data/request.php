<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');
/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "17250130-bmWsFc2zXTOF2YGT5PY2eywjSqOKdirIuDmu49qyK",
    'oauth_access_token_secret' => "wL3sTNjJ21QZSuzTEOTEtgsbuJCuUrUfyfCx4THi7lMvE",
    'consumer_key' => "53xMZshNP7r0MY5tTybtHbzL0",
    'consumer_secret' => "pGJQYAq0Y1Hc4WVt3DdVZOxMLCOWrF95DIlnSU83bWcbffxFq5"
);

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=%40pabloiglesias%20%3A%29&count=20';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();

// output as JSON
// echo json_encode($twitter);             


/** Saca los tuits del usuario 
$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json'; 
$getfield = '?screen_name=pilarccasi&count=5'; 


Saca el ID de los followers 
$url = 'https://api.twitter.com/1.1/followers/ids.json';
$getfield = '?screen_name=pilarccasi'; 

Saca los tuits con una @ determinada. Buscar luego en "text"
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=%40pabloiglesias&count=10';




?>


