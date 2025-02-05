export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permite requisições de qualquer origem
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const bebidas = [
    {
      "id": 1,
      "name": "Coca-Cola",
      "price": 5.00,
      "description": "Refresco clássico, doce e gaseificado com sabor único. Ideal para acompanhar um hambúrguer! 🥤",
      "image": "/assets/refri1.png"
    },
    {
      "id": 2,
      "name": "Guaraná Antártica",
      "price": 5.00,
      "description": "Sabor refrescante e naturalmente brasileiro, o guaraná é perfeito para todos os momentos. 🥤",
      "image": "/assets/refri2.png"
    },
    {
      "id": 3,
      "name": "Fanta Guaraná",
      "price": 5.00,
      "description": "Uma mistura irresistível de guaraná com o sabor de laranja, refrescante e doce na medida certa! 🍊🥤",
      "image": "/assets/refri3.png"
    },
    {
      "id": 4,
      "name": "Coca-Cola Zero",
      "price": 5.00,
      "description": "A clássica Coca-Cola sem açúcar, para quem busca o sabor tradicional sem calorias. 🥤",
      "image": "/assets/refri4.png"
    },
    {
      "id": 5,
      "name": "Fanta",
      "price": 5.00,
      "description": "Sabor de laranja vibrante, ideal para acompanhar seu hambúrguer com muito frescor! 🍊🥤",
      "image": "/assets/refri5.png"
    },
    {
      "id": 6,
      "name": "Água com Gás",
      "price": 3.00,
      "description": "Água mineral com gás, perfeita para quem procura um toque refrescante e leve. 💧",
      "image": "/assets/aguaComGas.jpg"
    },
    {
      "id": 7,
      "name": "Água sem Gás",
      "price": 3.00,
      "description": "Água mineral pura e refrescante, ideal para hidratar sem aditivos. 💧",
      "image": "/assets/aguaMineral.png"
    },
    {
      "id": 8,
      "name": "Cerveja Beck's",
      "price": 16.00,
      "description": "Cerveja lager premium, refrescante e de sabor equilibrado. Para quem aprecia um bom chopp! 🍺",
      "image": "/assets/cerveja1.jpg"
    }
  ];

  res.status(200).json(bebidas);
}
