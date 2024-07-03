"use strict";

// Using the following design pattern
// https://web.archive.org/web/20181005005954/https://appendto.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/


// Live
(function( webstop ) {

  // Public Method live();
  // Live allows you to perform an action when elements are added to the DOM tree.
  // This was developed to help add event listeners to DOM elements after they were added via AJAX or fetch.
  // It also works on DOM elements added via straight Javascript.
  //
  // NOTE: MutationObserver will execute the callback "perform" function immediately when live is instantiated.
  //       This can cause some unexpected behavior if you aren't aware for it and design for it in your supplied
  //       callback function (supplied to the perform parameter).
  //
  // Parameters:
  //   @parent: the parent DOM node to watch, blank or null defaults to document.body
  //   @perform: the function to execute in the callback
  webstop.live = function(perform, parent= 'body',) {
    // Private Properties
    let parents; // found DOM elements, based on parent selector
    const config = {
      childList: true,
      subtree: true
    };

    // Callback function to execute when mutation is observed

    let callback = function(mutationsList, observer) {
      let hasNodesAdded = false;
      for(let mutation of mutationsList) {
        if(mutation.type === 'childList') { // We're only interested in child nodes being added or removed
          hasNodesAdded = true;
        }
      }
      if(hasNodesAdded){
        perform();
      }
    };

    if (typeof parent === "string" && parent.trim().length > 0) {
      // hasParent = true;
    } else {
      parent ='body';
    }

    parents = document.querySelectorAll(parent);

    if (parents.length > 0) {
      parents.forEach((container) => {
        let observer = new MutationObserver(callback);
        observer.observe(container, config);
      });
    }
  }

})( window.webstop = window.webstop || {} );
