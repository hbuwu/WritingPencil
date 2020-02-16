var quill = new Quill('#editor', {
  theme: 'snow'
});

let length = 21;
let picture = document.querySelector(".pic")

quill.on('text-change', function(delta, oldDelta, source) {
  length = quill.getLength() - 1;

  console.log(length);

  if (length >= 0 && length <= 19) {
    picture.style.backgroundImage = "url('src/1.png')";
  }
  else if (length >= 20 && length <= 39) {
    picture.style.backgroundImage = "url('src/2.png')";
  }

  else if (length >= 40 && length <= 59) {
    picture.style.backgroundImage = "url('src/3.png')";
  }

  else if (length >= 60 && length <= 79) {
    picture.style.backgroundImage = "url('src/4.png')";
  }

  else if (length >= 80 && length <= 99) {
    picture.style.backgroundImage = "url('src/5.png')";
  }

  else if (length >= 100) {
    picture.style.backgroundImage = "url('src/6.png')";
  }

  if (length >= 120) {
    quill.deleteText(120, quill.getLength());
  }
});
 

