function addMenuContent(div) {
  let parentDiv = document.getElementById(div);
  let menuHeader = document.createElement('h1');
  menuHeader.textContent = 'Our Menu';
  let menuText = document.createElement('p');
  menuText.innerHTML =
    '<ul><li>Caffè Americano - €7.00</li><li>Cappuccino - €10.00</li><li>Espresso - €8.00</li><li>Caffè Latte - €10.00</li><li>Iced Coffee - €8.00</li><li>Caramel Macchiato - €12.00</li></ul>';
  parentDiv.append(menuHeader, menuText);
}

export { addMenuContent };
