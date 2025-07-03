const buildFormData = {
  repairTypes: [
    { id: 1, repairName: "Косметический", repairPrice: 3000 },
    { id: 2, repairName: "Капитальный", repairPrice: 12000 },
    { id: 3, repairName: "Под ключ", repairPrice: 15000 },
    { id: 4, repairName: "Дизайнерский", repairPrice: 20000 }
  ],
  propertyTypes: [
    { id: 1, propertyname: "Новостройка", propertyPrice: 0 },
    { id: 2, propertyname: "Вторичное жилье", propertyPrice: 0 }
  ],
  roomCounts: [
    { id: 1, propertyname: "1", propertyPrice: 1000 },
    { id: 2, propertyname: "2", propertyPrice: 2000 },
    { id: 3, propertyname: "3", propertyPrice: 3000 },
    { id: 4, propertyname: "4+", propertyPrice: 4000 }
  ]
};

export default buildFormData;