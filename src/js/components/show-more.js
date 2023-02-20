const $triggers = document.querySelectorAll('[data-show-more]');

if ($triggers.length > 0) {
  $triggers.forEach(($trigger) => {
    const lessText = $trigger.dataset.less;
    const moreText = $trigger.dataset.more;

    $trigger.addEventListener('click', function () {
      const $parent = $trigger.closest('[data-show-more-parent]');
      if ($parent.classList.contains('is-more')) {
        $parent.classList.remove('is-more');
        $trigger.textContent = moreText;
      } else {
        if (moreText && lessText) {
          $parent.classList.add('is-more');
          $trigger.textContent = lessText;
        } else {
          $trigger.classList.add('is-hidden');
          $parent.classList.add('is-more');
        }
      }
    });
  });
}
