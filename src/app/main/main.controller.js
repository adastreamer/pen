(function() {
  'use strict';

  angular
    .module('pen')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;
    var pinOffset = 7;
    vm.username = '@adastreamer';

    vm.pins = [];

    vm.addPin = function(event){
      var bounds = event.target.getBoundingClientRect();
      var x = event.clientX - bounds.left - pinOffset;
      var y = event.clientY - bounds.top - pinOffset;

      var pin = {
        x: x,
        y: y,
        comments: []
      };

      vm.pins.push(pin);
      vm.selectPin(pin);
      vm.newmessage = "";
    };

    vm.removePin = function(pin){
      if (!confirm("Are you sure?!")) return;
      vm.pins = vm.pins.filter(function(p){
        return p != pin;
      });
    };

    vm.clearSelectedPin = function(){
      vm.selectedPin = null;
    };

    vm.selectPin = function(pin){
      vm.selectedPin = pin;
      vm.scrollCommentsToBottom();
    };


    vm.newmessage = "";
    vm.addCommentToPin = function(pin, message, username){
      if (!message){
        return;
      }
      pin.comments.push({
        message: message,
        username: username
      });
      vm.newmessage = "";
      vm.scrollCommentsToBottom();
    };

    vm.removeCommentFromPin = function(pin, comment){
      if (!confirm("Are you sure?!")) return;
      pin.comments = pin.comments.filter(function(c){
        return c != comment;
      });
    };

    vm.scrollCommentsToBottom = function(){
      setTimeout(function(){
        var commentsLists = document.getElementsByClassName("comments-list");
        for (var i = 0; i < commentsLists.length; i++){
          commentsLists[i].scrollTop = commentsLists[i].scrollHeight;
        }        
      })
    };


    vm.startEdit = function(comment){
      comment.newMessage = comment.message;
      comment.isInEditMode = true;
    };
    vm.cancelEdit = function(comment){
      comment.newMessage = "";
      comment.isInEditMode = false;
    };
    vm.saveEdit = function(comment){
      comment.message = comment.newMessage;
      comment.newMessage = "";
      comment.isInEditMode = false;
    };
  }
})();
