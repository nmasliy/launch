(function () {
  const $triggers = document.querySelectorAll('.modal-table__spoiler');

  if ($triggers.length > 0) {
    $triggers.forEach(($trigger) => {
      let $sibling = $trigger.nextElementSibling;
      while ($sibling) {
        if ($sibling.classList.contains('modal-table__spoiler')) {
          break;
        }
        if ($trigger.classList.contains('is-active')) {
          $sibling.classList.remove('is-hidden');
        } else {
          $sibling.classList.add('is-hidden');
        }
        $sibling = $sibling.nextElementSibling;
      }

      $trigger.addEventListener('click', function () {
        $trigger.classList.toggle('is-active');
        let $sibling = $trigger.nextElementSibling;
        while ($sibling) {
          if ($sibling.classList.contains('modal-table__spoiler')) {
            break;
          }
          if ($trigger.classList.contains('is-active')) {
            $sibling.classList.remove('is-hidden');
          } else {
            $sibling.classList.add('is-hidden');
          }
          $sibling = $sibling.nextElementSibling;
        }
      });
    });
  }
})();
