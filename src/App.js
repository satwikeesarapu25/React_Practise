
import { useEffect } from 'react';
import './App.css';
import Usestate from './usestate';
import Useeffect from './useeffect';
import Usereducer from './usereducer';
import Form from './form';
// import Parent from './propsdrilling/parent';
// import Provider from './usecontext/provider';
// import Counter from './usecontext/consume';
import Counter1 from './usecontext/consume2';
import TextInput from './useref/dom';
import Mutable from './useref/mutablevalue';
import Memo from './usememo';
import Parent from './callback/parent';
import ParentComponent from './ctop/parent';
import FormComponent from './customhooks/FormComponent';
import FetchComponent from './customhooks/FetchComponent';
import Routing from './routing/routing';
import { BrowserRouter } from 'react-router-dom';
import Increment from './errorbounday/Increment';
import ErrorBoundary from './errorbounday/errorboundary';
import store from './redux/store';
import { Provider } from 'react-redux';
import Counter from './redux/counter';
function App() {
  return (
    // <Usestate/>
    <Useeffect/>
    // <Usereducer/>
    // <Form/>
  //  <Parent/>
  // <Provider>
  //   <Counter/>
  //   <Counter1/>
  // </Provider>
  // <TextInput/>
  // <Mutable/>
  // <Memo/>
  // <Parent/>
  // <ParentComponent/>
  // <FormComponent/>
  // <FetchComponent/>
  // <BrowserRouter>
  // <Routing/>
  // </BrowserRouter>
  // <Increment/>
// {/* <ErrorBoundary>
// <Increment/>
// </ErrorBoundary> */}
// {/* <Provider store={store}>
//   <Counter/>

// </Provider> */}


  )
}


export default App;
