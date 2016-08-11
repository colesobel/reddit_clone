angular.module('redditClone', ['angularMoment', 'ngAnimate'])

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
    }],
    showComments: false,
    showcommentForm: false
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
    }],
    showComments: false,
    showcommentForm: false
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
    }],
    showComments: false,
    showcommentForm: false
  }]

  $scope.sortingBy = 'votes'


  $scope.addPost = function () {
    $scope.showPostForm = !$scope.showPostForm
  }

  $scope.post = {}
  $scope.comment = {}

  $scope.submitPost = function (formName) {
    if ($scope.post.title.length > 1 && $scope.post.author.length > 1 && $scope.post.description.length > 4) {
      console.log('should be posting');
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
    }
  }

  $scope.upVote = function (title) {
    for (var i = 0; i < $scope.posts.length; i++) {
      if ($scope.posts[i].title == title) {
        $scope.posts[i].votes ++
      }
    }
  }
  $scope.downVote = function (title) {
    for (var i = 0; i < $scope.posts.length; i++) {
      if ($scope.posts[i].title == title) {
        $scope.posts[i].votes --
      }
    }
  }

  $scope.showPostComments = function (title) {
    for (var i = 0; i < $scope.posts.length; i++) {
      if ($scope.posts[i].title == title) {
        $scope.posts[i].showComments = !$scope.posts[i].showComments
      }
    }
  }

  $scope.submitComment = function (title, form) {
    for (var i = 0; i < $scope.posts.length; i++) {
      if ($scope.posts[i].title == title) {
        $scope.posts[i].comments.push({
          author: $scope.comment.author,
          comment: $scope.comment.comment
        })
        $scope.posts[i].showCommentForm = false
        $scope.posts[i].showComments = true
      }
    }
    form.$setPristine()
    $scope.comment = {}
  }

  $scope.addComment = function (title) {
    for (var i = 0; i < $scope.posts.length; i++) {
      if ($scope.posts[i].title == title)  {
        if ($scope.posts[i].showCommentForm === true) {
          $scope.posts[i].showCommentForm = false
        } else {
          $scope.posts[i].showComments = false
          $scope.posts[i].showCommentForm = true
        }

      }
    }
  }

  $scope.changeSort = function (sorter) {
    $scope.sortingBy = sorter
  }

})
