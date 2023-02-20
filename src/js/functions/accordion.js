export function initAccordion(triggerSelector, parentSelector) {
  const triggerNodes = document.querySelectorAll(triggerSelector);

  if (!triggerNodes.length > 0) return;

  const needInit = [...triggerNodes].every(
    (el) => !el.classList.contains('is-active')
  );

  if (needInit) {
    triggerNodes[0].parentNode.classList.add('is-active');
  }

  triggerNodes.forEach((el) => {
    el.addEventListener('click', function () {
      const parentNode = el.closest(parentSelector);
      const activeNode = document.querySelector(parentSelector + '.is-active');

      activeNode.classList.remove('is-active');
      parentNode.classList.add('is-active');
    });
  });
}
