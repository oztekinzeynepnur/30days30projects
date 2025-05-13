const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

draggables.forEach(kutu => {
  kutu.addEventListener('dragstart', () => {
    kutu.classList.add('dragging');
  });

  kutu.addEventListener('dragend', () => {
    kutu.classList.remove('dragging');
  });
});

dropzones.forEach(alan => {
  alan.addEventListener('dragover', (e) => {
    e.preventDefault();
    alan.classList.add('over');
  });

  alan.addEventListener('dragleave', () => {
    alan.classList.remove('over');
  });

  alan.addEventListener('drop', () => {
    const suruklenen = document.querySelector('.dragging');
    alan.appendChild(suruklenen);
    alan.classList.remove('over');
  });
});
