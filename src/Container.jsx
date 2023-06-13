import { useState } from 'react';
import Modal from "./components/Modal";
import App from "./components/App";
import './container.scss';
import './button.scss';
import './modal.scss';


function Container() {
  const [store, setStore] = useState({
      showModal: false,
      title: 'title',
      subTitle: 'sub title',
      text: 'text'
  })
  return (
    <>
      <App 
      store={store}
      setStore={setStore}/>
      <Modal store={store} setStore={setStore}/>
    </>
  );
}

export default Container;
