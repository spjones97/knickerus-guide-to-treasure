export const items = (items = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return items;
    case 'CREATE':
      return [ ...items, action.payload ];
    default:
      return items;
  };
};
