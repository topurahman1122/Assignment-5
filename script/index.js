const cartArray = [];

function display(cartProduct) {
    console.log(cartProduct);
    const tableBody = document.getElementById("card-products");

    for (let i = 0; i < cartProduct.length; i++) {
        //console.log(cartArray[i].productName);
        const name = cartArray[i].productName;

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
      </tr>
      `;
        tableBody.appendChild(tr);
    }
}

function addToCard(element) {
    //console.log(element.parentNode.parentNode.children)
    //console.log(element.parentNode.parentNode.children[0].innerText)
    //console.log(element.parentNode.parentNode.children[1].children)

    const productName = element.parentNode.parentNode.children[0].innerText;
    //console.log(productName)

    const productobj = {
        productName: productName,
    }
    cartArray.push(productobj);

    //console.log(cartArray)
    //console.log(cartArray.length);
    document.getElementById("total-added-product").innerText = cartArray.length;

    display(cartArray);
}