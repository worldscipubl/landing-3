const CustomSelect = () => {
  /* Look for any elements with the class "custom-select": */
  const customSelectList = document.querySelectorAll('.custom-select');
  customSelectList.forEach((customSelect) => {
    const originSelect = customSelect.querySelector('select');

    /* For each element, create a new DIV that will act as the selected item: */
    const surrogateSelector = document.createElement('div');
    surrogateSelector.setAttribute('class', 'select-selected 1');
    surrogateSelector.innerHTML = originSelect.options[originSelect.selectedIndex].innerHTML;
    customSelect.appendChild(surrogateSelector);

    /* For each element, create a new DIV that will contain the option list: */
    const surrogateSelectorOptions = document.createElement('div');
    surrogateSelectorOptions.setAttribute('class', 'select-items select-hide');

    for (const originSelectOption of originSelect.options) {
      /* For each option in the original select element, create a new DIV that will act as an option item: */
      const surrogateOption = document.createElement('div');
      surrogateOption.innerHTML = originSelectOption.innerHTML;

      surrogateOption.addEventListener('click', function (e) {
        /* When an item is clicked, update the original select box, and the selected item: */
        const { currentTarget } = e;
        let y,
          k,
          yl;

        const surrogateSelectedOption = currentTarget.parentNode.previousSibling;

        for (let selected_i = 0; selected_i < originSelect.length; selected_i++) {
          if (originSelect.options[selected_i].innerHTML === currentTarget.innerHTML) {
            originSelect.selectedIndex = selected_i;
            surrogateSelectedOption.innerHTML = currentTarget.innerHTML;
            y = currentTarget.parentNode.getElementsByClassName('same-as-selected');
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute('class');
            }
            currentTarget.setAttribute('class', 'same-as-selected');
            break;
          }
        }
        surrogateSelectedOption.click();
      });
      surrogateSelectorOptions.appendChild(surrogateOption);
    }

    customSelect.appendChild(surrogateSelectorOptions);

    surrogateSelector.addEventListener('click', function (e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle('select-hide');
      this.classList.toggle('select-arrow-active');
    });
  });

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    let x,
      y,
      current_i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName('select-items');
    y = document.getElementsByClassName('select-selected');
    xl = x.length;
    yl = y.length;
    for (current_i = 0; current_i < yl; current_i++) {
      if (elmnt == y[current_i]) {
        arrNo.push(current_i);
      } else {
        y[current_i].classList.remove('select-arrow-active');
      }
    }
    for (current_i = 0; current_i < xl; current_i++) {
      if (arrNo.indexOf(current_i)) {
        x[current_i].classList.add('select-hide');
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener('click', closeAllSelect);
};

export default CustomSelect;
