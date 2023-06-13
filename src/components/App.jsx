
const modals = [
    {
        id: 1,
        title: 'Welcome 1',
        subTitle: 'Welcome!',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti eveniet in odio magnam. Obcaecati, ullam culpa ipsam sequi nisi eos, corrupti animi repellat aliquam, deleniti facere quidem itaque eligendi?'},
    {
        id: 2,
        title: 'Are you sure?',
        subTitle: '',        
        text: 'Please accept cookies before using this website!'},
    {
        id: 3,
        title: 'Modal 3',
        subTitle: 'Modal 3!',        
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti eveniet in odio magnam. Obcaecati, ullam culpa ipsam sequi nisi eos, corrupti animi repellat aliquam, deleniti facere quidem itaque eligendi?'},
    {
        id: 4,
        title: 'Modal 4',
        subTitle: 'Modal 4!',        
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti eveniet in odio magnam. Obcaecati, ullam culpa ipsam sequi nisi eos, corrupti animi repellat aliquam, deleniti facere quidem itaque eligendi?'},
    {
        id: 5,
        title: 'Modal 5',
        subTitle: 'Modal 5!',        
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti eveniet in odio magnam. Obcaecati, ullam culpa ipsam sequi nisi eos, corrupti animi repellat aliquam, deleniti facere quidem itaque eligendi?'},
]

const App = ({store,setStore}) => {
    return (
       <div id="app">
            <h1>Modal</h1>
            <div className="main">
                {
                    modals.map((modal,index) => {
                        return <button 
                        key={`modal-${index}`}
                        onClick={() => {
                            setStore({
                                showModal:true,
                                title: modal.title,
                                subTitle: modal.subTitle,
                                text: modal.text
                            })
                        }}
                        >MODAL {modal.id}</button>
                    })
                }
            </div>
      </div>    
    )
}

export default App;