import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FaqPart = () => {
    return (
        <Accordion className='text-center mb-5'>
            <h3 className='mb-3'>React Interview Qustion and Solution</h3>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What is React?</Accordion.Header>
                <Accordion.Body>
                    React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What are the major features of React?</Accordion.Header>
                <Accordion.Body>
                    <h5>The major features of React are:</h5>
                    <li>It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive</li>
                    <li>Supports server-side rendering</li>
                    <li>Follows Unidirectional data flow or data binding.</li>
                    <li>Uses reusable/composable UI components to develop the view.</li>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>When to use a Class Component over a Function Component?</Accordion.Header>
                <Accordion.Body>
                    If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component. *So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries *
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>What are Pure Components?</Accordion.Header>
                <Accordion.Body>
                    React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>What is the difference between state and props?</Accordion.Header>
                <Accordion.Body>
                    Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>What is the use of refs?</Accordion.Header>
                <Accordion.Body>
                    The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default FaqPart;