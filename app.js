var galleryWidget = angular.module('galleryWidget', []);

galleryWidget.controller('galleryController', ['$scope', function($scope){
  var cats = [
    {
      title: "First Cat",
      description: "First Cat Description",
      image: "https://placekitten.com/600/500"
    },
    {
      title: "Second Cat",
      description: "Second Cat Description",
      image: "https://placekitten.com/800/500"
    },
    {
      title: "Third Cat",
      description: "Third Cat Description",
      image: "https://placekitten.com/500/500"
    },
    {
      title: "Fourth Cat",
      description: "Here's a really long description, in case someone wanted to write a lot about their cat, to show how the description box responds to larger amounts of text, and some Cat Ipsum: Ears back wide eyed intently stare at the same spot, who's the baby, or swat turds around the house but you call this cat food?. Meowing non stop for food climb a tree, wait for a fireman jump to fireman then scratch his face. Loves cheeseburgers meow all night having their mate disturbing sleeping humans, or hide at bottom of staircase to trip human present belly, scratch hand when stroked claw drapes. Stare at ceiling light sweet beast, meowing non stop for food howl uncontrollably for no reason yet drink water out of the faucet purr for no reason yet stare at the wall, play with food and get confused by dust. Leave dead animals as gifts hide when guests come over, but purr while eating and chirp at birds. Leave hair everywhere refuse to drink water except out of someone's glass for intently stare at the same spot play riveting piece on synthesizer keyboard meowzer! play riveting piece on synthesizer keyboard or leave dead animals as gifts. Thug cat chase red laser dot instantly break out into full speed gallop across the house for no reason damn that dog , or sit on the laptop human give me attention meow. Then cats take over the world soft kitty warm kitty little ball of furr. Always hungry hack up furballs chew foot cats go for world domination yet find something else more interesting. Make muffins. Favor packaging over toy lick plastic bags and fall asleep on the washing machine stares at human while pushing stuff off a table howl uncontrollably for no reason immediately regret falling into bathtub. Touch water with paw then recoil in horror pee in human's bed until he cleans the litter box for sniff other cat's butt and hang jaw half open thereafter and pelt around the house and up and down stairs chasing phantoms behind the couch, so vommit food and eat it again. Mew throwup on your pillow, destroy couch, for wake up human for food at 4am for lounge in doorway, for claw drapes, and why must they do that. Climb a tree, wait for a fireman jump to fireman then scratch his face kitty scratches couch bad kitty, or stare at ceiling light but find something else more interesting. ",
      image: "https://placekitten.com/600/600"
    },
    {
      title: "Fifth Cat",
      description: "Fifth Cat Description",
      image: "https://placekitten.com/600/300"
    }
  ]

  $scope.increment = 0;

  $scope.nextImage = function(){
    if ($scope.increment < cats.length - 1){
      $scope.increment++;
    } else {
      $scope.increment = 0;
    }
    $scope.cat = cats[$scope.increment];
  };

  $scope.previousImage = function(){
    if ($scope.increment > 0){
      $scope.increment--;
    } else {
      $scope.increment = 4
    }
    $scope.cat = cats[$scope.increment];
  };

  $scope.cat = cats[$scope.increment];
  
}]);
