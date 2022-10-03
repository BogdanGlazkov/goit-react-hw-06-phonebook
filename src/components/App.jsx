import { useSelector, shallowEqual } from "react-redux";
import { ContactsList } from "./Contacts-list/Contacts-list";
import { Form } from "./Form";
import { Filter } from "./Filter";
import { Section } from './Section';

export const App = () => {
  const contacts = useSelector(state => state.contacts, shallowEqual);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts]);

  // const handleFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const handleDeleteBtn = idToDelete => {
  //   setContacts(prevState => prevState.filter(({ id }) => id !== idToDelete))
  // };

  // const handleFormSubmit = newContact => {
  //   if (contacts.some(({ name }) => name === newContact.name)) {
  //     alert(`${newContact.name} is already in contacts!`);
  //     return;
  //   }
  //   setContacts(prevState => [...prevState, newContact]);
  // };

  // const filteredContacts = useMemo(() => {
  //   return contacts.length
  //     ? contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
  //     : [];
  // }, [contacts, filter]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Section>
        <Form />
      </Section>
      <Section>
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <p>There are no contacts here. You can add a new one above.</p>
        )}
      </Section>
    </div>
  );
};
