let slide = $("#webslides");

      document.addEventListener('swiped-up', function (e) {
          let max = Math.trunc(slide[0].scrollHeight);
          let offset = Math.trunc(slide[0].offsetHeight);
          let position = Math.trunc(slide.scrollTop());
      
          if ((max - offset == position)) {
              console.warn("next");
              window.ws.goNext();
          }
      });
      
      document.addEventListener('swiped-down', function (e) {
          let position = Math.trunc(slide.scrollTop());
      
          if (position == 0) {
              console.warn("back");
              window.ws.goPrev();
          }
      });