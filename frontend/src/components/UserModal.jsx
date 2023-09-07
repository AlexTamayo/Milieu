import { useContext, useEffect, useRef } from 'react';
import '../styles/UserModal.scss';

import { DataContext  } from '../context/dataProviderContext';


function UserModal({ children, userDivRef }) {
  const { isUserModalOpen, toggleUserModal } = useContext(DataContext);

  const modalRef = useRef(null);


  // This useEffect checks if there was a click outside of the modal and the user div that opened the menu.
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target) && 
      (!userDivRef.current || (userDivRef.current && !userDivRef.current.contains(event.target)))) {
        toggleUserModal();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userDivRef]);


  if (!isUserModalOpen) return null;

  return (
      <div ref={modalRef} className="user-modal" >
        {children}
      </div>
  );
}

export default UserModal;