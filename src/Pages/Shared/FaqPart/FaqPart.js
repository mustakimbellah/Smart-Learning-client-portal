import React from 'react';


const FaqPart = () => {
    return (
        <div>
            <div className='bg-primary'>
                <h5>What is React?</h5>
                <p>Ans: React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.</p>
            </div>
            <br />
            <div>
                <h5>What are the major features of React?</h5>
                <p>The major features of React are:</p>
                <li>It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive</li>
                <li>Supports server-side rendering</li>
                <li>Follows Unidirectional data flow or data binding.</li>
                <li>Uses reusable/composable UI components to develop the view.</li>
            </div>
            <br />
            <div className='bg-primary'>
                <h5 >When to use a Class Component over a Function Component?</h5>
                <p>Ans: If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component. *So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries *</p>
            </div>
            <br />
            <div>
                <h5>What are Pure Components?</h5>
                <p>Ans: React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.</p>
            </div>
            <br />
        </div>
    );
};

export default FaqPart;