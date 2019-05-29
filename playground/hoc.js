import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>This is a non hoc stateless functional component.</h1>
        <p>the information is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>the information provided below is highly sensitive.Please do not share this with anyone.</p>
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) =>  (
        <div>
            {props.isAuthenticated?<WrappedComponent {...props} />:'Please login to see the info'}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo info='dynamic information'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='dynamicccc'/>, document.getElementById('app'));