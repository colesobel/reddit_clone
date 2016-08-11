angular.module('redditClone', ['angularMoment'])

.controller('redditController', function ($scope) {
  $scope.posts = [{
    title: 'Galvanize',
    author: 'Cole Sobel',
    img: 'http://www.rrengineers.com/wp-content/uploads/Galvanize-2-street-view-450x300.jpg',
    description: 'Supa Cool',
    votes: 0,
    date: new Date().getTime(),
    comments: [{
      author: 'Cole Sobel',
      comment: 'Hey, I go there!'
    }]
  },
  {
    title: 'Denver',
    author: 'Lucifer',
    img: 'http://denveryoungprofessionals.com/wp-content/uploads/2015/01/denver-skyline.jpg',
    description: 'Denver Yo',
    votes: 5,
    date: new Date().getTime(),
    comments: [{
      author: 'Cole Sobel',
      comment: 'Hey, I live here!'
    }]
  },
  {
    title: 'A Ninja!',
    author: 'A Different Ninja',
    img: 'http://xcp.ninja/images/ninja-icon.png',
    description: 'A baby ninja',
    votes: 50,
    date: new Date().getTime(),
    comments: [{
      author: 'Cole Sobel',
      comment: 'Look, a ninja!'
    }]
  }]

  $scope.sortingBy = 'votes'


  $scope.addPost = function () {
    $scope.showPostForm = true
  }

  $scope.post = {}
  $scope.comment = {}

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

  $scope.upVote = function (title) {
    for (var i = 0; i < $scope.posts[i].title.length; i++) {
      if ($scope.posts[i].title == title) {
        $scope.posts[i].votes ++
      }
    }
  }
  $scope.downVote = function (title) {
    for (var i = 0; i < $scope.posts[i].title.length; i++) {
      if ($scope.posts[i].title == title) {
        $scope.posts[i].votes --
      }
    }
  }

  $scope.showPostComments = function () {
    $scope.showComments = !$scope.showComments
  }

  $scope.submitComment = function (title, form) {
    for (var i = 0; i < $scope.posts.length; i++) {
      if ($scope.posts[i].title == title) {
        $scope.posts[i].comments.push({
          author: $scope.comment.author,
          comment: $scope.comment.comment
        })
      }
    }
    form.$setPristine()
    $scope.comment = {}
    $scope.showCommentForm = false
    $scope.showComments = true
  }

  $scope.addComment = function () {
    $scope.showCommentForm = true
    $scope.showComments = false
  }

  $scope.changeSort = function (sorter) {
    $scope.sortingBy = sorter
  }

})
