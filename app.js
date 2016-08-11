angular.module('redditClone', ['angularMoment'])

.controller('redditController', function ($scope) {
  $scope.posts = []


  $scope.addPost = function () {
    $scope.showPostForm = true
  }

  $scope.post = {}

  $scope.submitPost = function (formName) {
    $scope.posts.push({
      title: $scope.post.title,
      author: $scope.post.author,
      img: $scope.post.url,
      description: $scope.post.description,
      votes: 0,
      date: new Date().getTime(),
      comments: []
    })

    formName.$setPristine()
    $scope.post = {}
    $scope.showPostForm = false
    console.log($scope.posts);
  }

  $scope.upVote = function (index) {
    $scope.posts[index].votes ++
  }
  $scope.downVote = function (index) {
    $scope.posts[index].votes --
  }

  $scope.submitComment = function (index) {
    $scope.posts[index].comments.push()
  }

  $scope.addComment = function () {
    $scope.showCommentForm = true
  }



})
