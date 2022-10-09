let selectIndex = 3;
let isExpandCollapse = false;
const dropdown__select = document.querySelector('.dropdown__select');
const dropdown__select__panel = document.querySelector('.dropdown__select__panel')
const dropdown__select__trigger = document.querySelector('.dropdown__select__trigger');
const dropdown__select__trigger__text = document.querySelector('.dropdown__select__trigger > span');
const dropdown__select__panel__items = document.querySelectorAll('.dropdown__select__panel > li');
const dropdown__select__trigger__icon = document.querySelector('.dropdown__select__trigger > img');


function closePanel() {
  dropdown__select__panel.style.cssText = 'opacity: 0; transform: translateY(20px);';
  dropdown__select__trigger__icon.style.cssText = 'transform: rotate(0deg); transition: all 200ms linear;';
}

dropdown__select__trigger.addEventListener('click', () => {
  isExpandCollapse = !isExpandCollapse;

  if (isExpandCollapse) {
    dropdown__select__panel.style.cssText = 'opacity: 1; transform: translateY(0);';
    dropdown__select__trigger__icon.style.cssText = 'transform: rotate(180deg); transition: all 200ms linear;';
  } else {
    closePanel()
  }
})

for (let i = 0; i < dropdown__select__panel__items.length; i++) {
  dropdown__select__panel__items[i].addEventListener('click', () => {
    if (i !== selectIndex) {
      dropdown__select__panel__items[selectIndex].classList.remove('dropdown__select__panel__item--active');
      selectIndex = i;
      dropdown__select__trigger__text.innerHTML = dropdown__select__panel__items[i].innerHTML;
      dropdown__select__panel__items[i].classList.toggle('dropdown__select__panel__item--active');
    }

    isExpandCollapse = false;
    closePanel()
  })
}
