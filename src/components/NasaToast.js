import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      
    
      <div className="p-3 bg-secondary my-2 rounded">
        <Toast  style={{ margin: "0 auto"}}>
          <ToastHeader>
            Title:
          </ToastHeader>
          <ToastBody>{props.title}</ToastBody>
        </Toast>
      </div>
      <div className="p-3 my-2 rounded" style={{ background: 'black' }}>
        <Toast  style={{ margin: "0 auto"}}>
          <ToastHeader>
            Copyright:
          </ToastHeader>
          <ToastBody>
            {props.copyright}
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 my-2 rounded" style={{ background: 'pink' }}>
        <Toast style={{ margin: "0 auto"}}>
          <ToastHeader>
            About this photo:
          </ToastHeader>
          <ToastBody >
            {props.explanation}
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 my-2 rounded" style={{ background: 'indigo' }}>
        <Toast  style={{ margin: "0 auto"}}>
          <ToastHeader>
            Date:
          </ToastHeader>
          <ToastBody>
            {props.date}
          </ToastBody>
        </Toast>
      </div>
     
    </div>
    
  );
};

export default Example;