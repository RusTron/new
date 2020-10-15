import { 
  SETPEOPLE,
  FILTERBYNAME,
  SETSELECTEDGENDER,
  SETSELECTEDNATIONALITY,
  CLEARFORM,
  CLEARDATA,
  SETERROR,
} from '../../variables/forContacts';

export const actionCreators = {
  setData: (items) => ({
    type: SETPEOPLE,
    peopleData: items,
  }),
  setError: (value)=>({
      type: SETERROR,
      error: value,
  }),
  filterByName: (item) => ({
    type: FILTERBYNAME,
   searchValue: item,
  }),
  selectGender: (item) => ({
    type: SETSELECTEDGENDER,
    selectedGender: item,
  }),
  selectNationality: (item) => ({
    type: SETSELECTEDNATIONALITY,
    selectedNationality: item,
  }),
  clearForm: () => ({
    type: CLEARFORM,
    clear: true,
  }),
  clearData: (value) => ({
    type: CLEARDATA,
    data: value,
  })
}

export const filterPeople = ({people}) => {

  const {peopleData, searchValue, selectedNationality, selectedGender, data} = people;

  let persons = [];

  if (data) {
    return persons;
  }
  if (peopleData) {
    persons = [...peopleData];
  };

  if (searchValue) {
    persons = persons.filter(item=> 
      item.name.toLowerCase().includes(searchValue.toLowerCase()))
  };

  if (selectedNationality && selectedNationality.length) {
    persons = persons.filter(item=> selectedNationality.includes(item.nationality.name))
  };

  if (selectedGender) {
    persons = persons.filter(person=> person.gender === selectedGender)
  }

  return persons;
}

const contactsInitialState = () => ({
  peopleData: [],
  searchValue: '',
  selectedNationality: [],
  selectedGender: '',
  clear: false,
  data: true,
  error: false,
});

const peopleReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case SETERROR:
      return {
        ...state,
        error: action.error,
      };
    case SETPEOPLE:
      return {
        ...state,
        peopleData: action.peopleData,
      };
    case FILTERBYNAME:
      return {
        ...state,
        searchValue: action.searchValue,
      };
    case  SETSELECTEDGENDER:
    return {
      ...state,
      selectedGender: action.selectedGender,
    };
    case  SETSELECTEDNATIONALITY:
      return {
        ...state,
        selectedNationality: [...action.selectedNationality],
      };
    case  CLEARFORM:
      return {
        ...state,
        searchValue: '',
        selectedNationality: '',
        selectedGender: '',
        clear: false,
      };
    case  CLEARDATA:
      return {
        ...state,
        data: action.data,
      }

    default:
      return state;
  }
};

export default peopleReducer;
