
  function openModal(id) {
    document.getElementById(id).style.display = "block";
  }

  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }

let slider = tns({
  container: '.andi-slider',
  items: 1,
  slideBy: '1',
  gutter: "15",
  mouseDrag: true,
  nav: true,
  loop: true,
  controlsContainer: '#controls',
  prevButton: '.previous',
  nextButton: '.next',
  pagination: false,
  autoplayButton: true,
  autoplay: false,
  responsive: {
      640: {
      items: 1
      },
      768: {
      items: 2
      },
      1400: {
      items: 3
      }
  }
  });