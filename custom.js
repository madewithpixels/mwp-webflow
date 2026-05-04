// Apply random translation to back layer images for parallax effect
  document.querySelectorAll('.image-layer.back .image-wrapper').forEach(function(el) {
    var tx = (Math.random() - 0.5) * 15;  // ±2% horizontal
    var ty = (Math.random() - 0.5) * 10;  // ±2% vertical
    el.style.transform = 'translate(' + tx + '%, ' + ty + '%)';
  });
