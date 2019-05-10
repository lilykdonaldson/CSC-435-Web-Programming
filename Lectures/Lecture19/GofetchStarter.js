"use strict";
(function() {

  //write your solution here
  window.onload = function(){
    $("fetch").onlick = goFetch;
    fetchit.
  }
 
  function goFetch(){ 
    let url = "hello.txt";
    fetch(url, {credentials: 'include'}); //   include credentials for cloud9  
    .then(checkStatus);
    .then(handleResponse);
    .catch(handleError); 
  } 

  /* ============================ Helper Functions ============================ */
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 || response.status == 0) {
      return response.text();
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

  function $(id) {
    return document.getElementById(id);
  }
})();