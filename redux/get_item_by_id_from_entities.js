const specificId = 5;

const adapter = createEntityAdapter();

const {
  selectEntities
} = adapter.getSelectors(state => state.someField)

// then inside your component
const items = useSelector(selectEntities)[specificId];
