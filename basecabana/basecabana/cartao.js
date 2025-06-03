
// Abrir o modal
document.getElementById('open-modal').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    document.getElementById('modal').style.display = 'flex';
});

// Fechar o modal ao clicar no "X"
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Impedir que o formulário seja enviado (apenas para demonstração)
document.getElementById('add-card-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cartão adicionado com sucesso!');
    document.getElementById('modal').style.display = 'none';
});

// Abrir o modal de adicionar cartão
document.getElementById('open-modal').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    document.getElementById('modal').style.display = 'flex';
});

// Fechar o modal de adicionar cartão
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Fechar o modal de adicionar cartão ao clicar fora dele
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Impedir que o formulário de adicionar cartão seja enviado (apenas para demonstração)
document.getElementById('add-card-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cartão adicionado com sucesso!');
    document.getElementById('modal').style.display = 'none';
});



// Seleciona os elementos do DOM
const cartModal = document.getElementById('cart-modal'); // Modal do carrinho
const openCartModalBtn = document.getElementById('carrinho'); // Botão que abre o modal do carrinho
const closeCartModal = document.getElementById('close-cart-modal'); // Botão de fechar o modal do carrinho
const cartItemsContainer = document.getElementById('cart-items'); // Container dos itens do carrinho
const clearCartButton = document.getElementById('clear-cart'); // Botão para limpar o carrinho
const addToCartButton = document.getElementById('add-carrinho'); // Botão para adicionar ao carrinho
const cartCounter = document.querySelector('#carrinho i'); // Ícone do carrinho no nav

const addCardModal = document.getElementById('modal'); // Modal de adicionar cartão
const openAddCardModalBtn = document.querySelector('.btn2'); // Botão que abre o modal de adicionar cartão
const closeAddCardModal = document.getElementById('close-modal'); // Botão de fechar o modal de adicionar cartão

// Array para armazenar os itens do carrinho
let cartItems = [];

// Função para abrir o modal do carrinho
if (openCartModalBtn) {
    openCartModalBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do botão
        if (cartModal) {
            cartModal.style.display = 'block'; // Exibe o modal
            updateCartDisplay(); // Atualiza a exibição dos itens no carrinho
        }
    });
}

// Função para fechar o modal do carrinho
if (closeCartModal) {
    closeCartModal.addEventListener('click', () => {
        if (cartModal) {
            cartModal.style.display = 'none'; // Oculta o modal
        }
    });
}

// Função para adicionar item ao carrinho
if (addToCartButton) {
    addToCartButton.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do botão

        // Define o item a ser adicionado
        const item = {
            name: 'Nike SuperRep Go',
            price: 499.99,
            quantity: 1,
            image: 'shoe.png'
        };

        // Verifica se o item já está no carrinho
        const itemExists = cartItems.some(cartItem => cartItem.name === item.name);

        if (!itemExists) {
            cartItems.push(item); // Adiciona o item ao array
            updateCartDisplay(); // Atualiza a exibição dos itens no carrinho
            updateCartCounter(); // Atualiza o contador de itens no carrinho
        } else {
            alert('Este item já está no carrinho!'); // Alerta se o item já existir
        }
    });
}

// Função para limpar o carrinho
if (clearCartButton) {
    clearCartButton.addEventListener('click', () => {
        cartItems = []; // Limpa o array de itens
        updateCartDisplay(); // Atualiza a exibição dos itens no carrinho
        updateCartCounter(); // Atualiza o contador de itens no carrinho
    });
}

// Função para abrir o modal de adicionar cartão
if (openAddCardModalBtn) {
    openAddCardModalBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do botão
        if (addCardModal) {
            addCardModal.style.display = 'block'; // Exibe o modal
        }
    });
}

// Função para fechar o modal de adicionar cartão
if (closeAddCardModal) {
    closeAddCardModal.addEventListener('click', () => {
        if (addCardModal) {
            addCardModal.style.display = 'none'; // Oculta o modal
        }
    });
}

// Função para atualizar a exibição dos itens no carrinho
function updateCartDisplay() {
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = ''; // Limpa o conteúdo atual
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>Nenhum item no carrinho.</p>'; // Mensagem de carrinho vazio
        } else {
            cartItems.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>R$ ${item.price.toFixed(2)}</p>
                    </div>
                    <button onclick="removeItem(${index})">Remover</button>
                `;
                cartItemsContainer.appendChild(cartItem); // Adiciona o item ao container
            });
        }
    }
}

// Função para remover um item do carrinho
window.removeItem = function (index) {
    cartItems.splice(index, 1); // Remove o item do array
    updateCartDisplay(); // Atualiza a exibição dos itens no carrinho
    updateCartCounter(); // Atualiza o contador de itens no carrinho
};

// Função para atualizar o contador de itens no carrinho
function updateCartCounter() {
    if (cartCounter) {
        const cartCounterText = cartCounter.nextSibling; // Texto ao lado do ícone do carrinho
        if (cartCounterText) {
            cartCounterText.textContent = ` (${cartItems.length})`; // Atualiza o número de itens
        }
    }
}

// Fechar o modal se clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none'; // Oculta o modal do carrinho
    }
    if (event.target === addCardModal) {
        addCardModal.style.display = 'none'; // Oculta o modal de adicionar cartão
    }
});

