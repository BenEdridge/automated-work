// A simple user bookmarklet that automatically types LGTM (Looks good to me) on the the current PR
// Simply copy the below function into your browser bookmarks then open the PR and click the bookmark!

javascript:( function() {    let textArea = document.getElementById('new_comment_field');    textArea.value = 'LGTM';    let button = document.querySelector('.color-bg-secondary.ml-1').querySelector('.btn.btn-primary'); button.disabled = false; button.click()    } )();