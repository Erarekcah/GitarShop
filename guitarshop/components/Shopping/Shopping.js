class Shopping {
  handleClear() {
    ROOT_SHOPPING.innerHTML = "";
  }
  ShoppingClearAndClose() {
    localStorage.clear();
    ROOT_SHOPPING.innerHTML = "";
    location.reload();
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
          <tr>
            <td class="shopping-element__name">✔️ ${name}</td>
            <td class="shopping-element__price">${price.toLocaleString()} <span class="price-usd">USD</span></td>
          </tr>
        `;
        sumCatalog += price;
      }
    });

    const html = `
    <div class="shopping-container">
      <div class="shopping__close" onclick="ShoppingPage.handleClear()"></div>
      <table>
      ${htmlCatalog}
      <tr>
      <td class="shopping-element__name">💳 Sum:</td>
      <td class="shopping-element__price sum">${sumCatalog.toLocaleString()} <span class="price-usd">USD</span></td>
      </tr>
      </table>
      <button class="shopping-button__clear" onclick="ShoppingPage.ShoppingClearAndClose()">Clear</button>
      </div>
    `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

const ShoppingPage = new Shopping();
