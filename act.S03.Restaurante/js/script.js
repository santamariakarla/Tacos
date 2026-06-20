// DATOS DEL MENÚ
const menuItems = [
    { 
    id: 1,
    name: "Tacos",
    category: "all",
    price: "$15", 
    image: "img/tacos.jpg" },

    { 
    id: 2,
    name: "Coca Cola",
    category: "bebidas",
    price: "$25", 
    image: "img/coca.jpg"},

    { 
    id: 3,
    name: "Boing de Mango",
    category: "bebidas",
    price: "$25", 
    image: "img/boing.jpg"},

    { 
    id: 4,
    name: "Agua de Horchata",
    category: "bebidas",
    price: "$30", 
    image: "img/horchata.jpg"},

     { 
    id: 5,
    name: "Cerveza",
    category: "bebidas",
    price: "$35", 
    image: "img/cerveza.jpg"},

    {
     id: 6,
     name: "De Pastor", 
     category: "tacos", 
     price: "$15", 
     image: "img/de pastor.jpg"},

      {
     id: 7,
     name: "De Bistec", 
     category: "tacos", 
     price: "$18", 
     image: "img/bistec.jpg"},

     {
     id: 8,
     name: "Campechanos", 
     category: "tacos", 
     price: "$20", 
     image: "img/campechanos.jpg"},

      {
     id: 9,
     name: "Torta de Pastor", 
     category: "especialidades", 
     price: "$65", 
     image: "img/torta.jpg"},

       {
     id: 10,
     name: "Burrito", 
     category: "especialidades", 
     price: "$50", 
     image: "img/burrito.jpg"},

         {
     id: 11,
     name: "Alambre", 
     category: "especialidades", 
     price: "$80", 
     image: "img/alambre.jpg"},


   
    // Agrega más platos aquí...
];

// FILTRADO DEL MENÚ
function displayMenuItems(category = 'all') {
    const menuContainer = document.querySelector('.menu-items');
    
    // Limpiar el contenedor
    menuContainer.innerHTML = '';
    
    // Filtrar elementos según la categoría
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Mostrar mensaje si no hay elementos
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items-message">
                <p>No hay elementos en esta categoría.</p>
            </div>
        `;
        return;
    }
    
    // Generar HTML para cada elemento del menú
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// Función para manejar los botones de filtrado
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener la categoría del botón
            const category = button.dataset.category;
            
            // Mostrar los elementos de la categoría seleccionada
            displayMenuItems(category);
        });
    });
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga todos los elementos al inicio
    setupFilterButtons(); // Configura los eventos de los botones de filtrado
});