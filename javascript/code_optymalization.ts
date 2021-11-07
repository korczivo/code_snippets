// smooth without if statement
const handleFilter = ({ target }: MouseEvent, actionType: ActionType) => {
  const isSameOrder = actionType === ActionType.orderBy && filter.orderBy === target.name;

  setFilter({
    ...filter,
    [actionType]: target.name,
    ...(isSameOrder && { orderBy: null }),
  });
};

// little bit messy and with code duplication
const handleFilter2 = ({ target }: MouseEvent, actionType: ActionType) => {
  setFilter({
    ...filter,
    [actionType]: target.name,
  });

  if (actionType === ActionType.orderBy && filter.orderBy === target.name) {
    setFilter({
      ...filter,
      orderBy: null,
    });
  }
};
