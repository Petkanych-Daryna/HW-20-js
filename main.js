const gallery = document.querySelector('.gallery');
  document.addEventListener('keydown', function (event) {
    const scrollAmount = 320;

    if (event.key === 'ArrowRight') {
      gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (event.key === 'ArrowLeft') {
      gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  });


// -----------------2-завдання---------------


const input = document.querySelector('#controls input');
  const renderBtn = document.querySelector('[data-action="render"]');
  const destroyBtn = document.querySelector('[data-action="destroy"]');
  const boxesContainer = document.getElementById('boxes');

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function createBoxes(amount) {
    destroyBoxes();
    const boxes = [];

    for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10;
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomColor();
      box.style.margin = '5px';
      box.style.display = 'inline-block';
      boxes.push(box);
    }

    boxesContainer.append(...boxes);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  renderBtn.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
    if (!isNaN(amount) && amount > 0) {
      createBoxes(amount);
    }
  });

  destroyBtn.addEventListener('click', destroyBoxes);