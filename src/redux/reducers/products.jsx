var initialState = [
  {
    id: 1,
    name: "Frozen yoghurt",
    price: 30000000,
    image:
      "https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    status: true
  },
  {
    id: 2,
    name: "Frozen yoghurt",
    price: 30000000,
    image:
      "https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    status: false
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
