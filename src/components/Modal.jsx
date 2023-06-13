const Modal = ({store, setStore}) => {
    return (
        <div className="modal"
            style={{
                display: store.showModal? 'block' : 'none'
            }}>
                <div className="background"></div>
                <div className="modal-container">
                            <div className="header">
                                {
                                    store.title
                                }
                                <button
                                    onClick={() => setStore({showModal: false})}
                                >x</button>
                            </div>
                            <div className="body">
                                <h2 style={{textAlign: 'left'}}>
                                    {
                                        store.subTitle
                                    }
                                </h2>
                                <p>
                                    {
                                        store.text
                                    }
                                </p>
                            </div>
                </div>     
        </div>
    )      
}

export default Modal;