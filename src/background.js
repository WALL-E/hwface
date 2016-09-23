// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    code: 
        'var Date = new Date(); ' + 
        'var year = Date.getFullYear(); ' +
        'var month = Date.getMonth(); ' +
        'var day = Date.getDate(); ' +
        'month = month + 1; month = month.toString().length === 1 && "0"+month || month; ' +
        'day = day.toString().length === 1 && "0"+day || day; ' +
        'document.getElementById("startdate").setAttribute("value", year + "-" + month + "-" + day);' + 
        'document.getElementById("enddate").setAttribute("value", year + "-" + month + "-" + day);' +
        'document.getElementById("button").click();' +
        'console.log("I love JS x10"); ' +
        ''
  });
});
