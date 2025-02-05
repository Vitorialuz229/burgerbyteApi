// api/hamburgueres.js

export default function handler(req, res) {
  const hamburgueres = [
    {
      "id": 1,
      "name": "Hamburguer Smash",
      "description": "Smash suculento com carne 100% angus, queijo derretido, salada, cebola caramelizada e molho especial. Simples e irresistível! 🍔🔥",
      "price": 15.00,
      "image": "src/assets/hamb1.png"
    },
    {
      "id": 2,
      "name": "Hamburguer Duplo",
      "description": "Duas suculentas carnes 100% Bolvina, queijo cheddar derretido, bacon crocante, cebola caramelizada e molho especial. O hambúrguer perfeito para quem ama um sabor intenso e irresistível! 🍔🥓🧀",
      "price": 44.00,
      "image": "src/assets/hamb2.png"
    },
    {
      "id": 3,
      "name": "Hamburguer BBQ",
      "description": "Carne 100% bovina com queijo cheddar, bacon crocante e molho barbecue. Para os amantes do sabor defumado e picante! 🍔🥓🔥",
      "price": 28.00,
      "image": "src/assets/hamb3.png"
    },
    {
      "id": 4,
      "name": "Hamburguer Frango Crocante",
      "description": "Peito de frango empanado e crocante, alface, tomate, maionese e molho barbecue. Sabor de frango frito que vai te surpreender! 🍔🍗",
      "price": 22.00,
      "image": "src/assets/hamb4.png"
    },
    {
      "id": 5,
      "name": "Hamburguer Bacon e Cheddar",
      "description": "Carne 100% bovina com queijo cheddar cremoso, bacon crocante, alface e molho especial. O hambúrguer que combina crocância e cremosidade! 🍔🧀🥓",
      "price": 26.00,
      "image": "src/assets/hamb5.png"
    },
    {
      "id": 6,
      "name": "Hamburguer Clássico",
      "description": "Hambúrguer clássico com carne 100% bovina, queijo prato, alface, tomate e maionese. O sabor tradicional que nunca sai de moda! 🍔🧀🍅",
      "price": 20.00,
      "image": "src/assets/hamb6.png"
    },
    {
      "id": 7,
      "name": "Hamburguer Caramelizado",
      "description": "Carne suculenta com cebola caramelizada, queijo cheddar, alface e maionese. Uma explosão de sabor em cada mordida! 🍔🧀🧅",
      "price": 25.00,
      "image": "src/assets/hamb7.png"
    },
    {
      "id": 8,
      "name": "Hamburguer Vegano",
      "description": "Hambúrguer à base de proteína vegetal, com alface fresca, tomate, cebola roxa, maionese vegana e picles crocante. Sabor e frescor em cada mordida! 🍔🌱",
      "price": 18.00,
      "image": "src/assets/hamb8.png"
    }
  ];
  
  res.status(200).json(hamburgueres);
}
