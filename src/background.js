// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    code:
        'var date = new Date((new Date).getTime() - 7 * 24 * 3600 * 1000); ' +
        'var year = date.getFullYear(); ' +
        'var month = date.getMonth(); ' +
        'var day = date.getDate(); ' +
        'month = month + 1; month = month.toString().length === 1 && "0"+month || month; ' +
        'day = day.toString().length === 1 && "0"+day || day; ' +
        'document.getElementById("startdate").setAttribute("value", year + "-" + month + "-" + day);' +
        '' +
        'date = new Date(); ' +
        'year = date.getFullYear(); ' +
        'month = date.getMonth(); ' +
        'day = date.getDate(); ' +
        'month = month + 1; month = month.toString().length === 1 && "0"+month || month; ' +
        'day = day.toString().length === 1 && "0"+day || day; ' +
        'document.getElementById("enddate").setAttribute("value", year + "-" + month + "-" + day);' +
        '' +
        'document.getElementById("button").click();' +
        'console.log("I love JS x10"); ' +
        ''
  });
});
