import { 
  SETPEOPLE,
  FILTERBYNAME,
  SETSELECTEDGENDER,
  SETSELECTEDNATIONALITY,
  CLEARFORM,
} from '../../variables/forContacts';
import { NATIONALITIES } from '../../constants/nationalities';


export const actionCreators = {
   setData: (items) => ({
    type: SETPEOPLE,
    peopleData: items,
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
  clearForm: (item) => ({
    type: CLEARFORM,
    active: true,
  })
}

export const filterPeople = ({people}) => {
  debugger;

  const {peopleData, searchValue, selectedNationality, selectedGender} = people;

  let persons = [];
  console.log(people);
  if(peopleData){
    persons = [...peopleData];
  };

  if(searchValue){
    persons = persons.filter(item=> item.name.includes(searchValue.toLowerCase()))
  };

  if(selectedNationality && selectedNationality.length){
    persons = persons.filter(item=> selectedNationality.includes(item.nat.name))
  };

  if(selectedGender){
    persons = persons.filter(person=> person.gender === selectedGender)
  }
 
  return persons;
}

const contactsInitialState = () => ({
  peopleData: [],
  searchValue: '',
  selectedNationality: '',
  selectedGender: '',
});

export const peopleReducer = (state = contactsInitialState, action) => {
  debugger;
  switch (action.type) {
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
        selectedNationality: action.selectedNationality,
      };
    case  CLEARFORM:
      return {
        ...state,
        searchValue: '',
        selectedNationality: '',
        selectedGender: '',
        peopleData: action.peopleData,
      };
  
    default:
      return state;
  }
};
