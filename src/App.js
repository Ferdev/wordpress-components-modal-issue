import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Modal } from '@wordpress/components';

function __( text ) {
  return text;
}

function onClose() {

}

function remindMeLaterClicked() {

}

function closeForeverClicked() {

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Modal
          title={ __( 'Are you sure?', 'woocommerce-admin' ) }
          onRequestClose={ onClose }
          className="wc-admin-shipping-banner__dismiss-modal"
        >
          <p className="wc-admin-shipping-banner__dismiss-modal-help-text">
            { __(
              'With WooCommerce Shipping you can Print shipping labels from your WooCommerce dashboard at the lowest USPS rates.',
              'woocommerce-admin'
            ) }
          </p>
          <div className="wc-admin-shipping-banner__dismiss-modal-actions">
            <Button isDefault onClick={ remindMeLaterClicked }>
              { __( 'Remind me later', 'woocommerce-admin' ) }
            </Button>
            <Button isPrimary onClick={ closeForeverClicked }>
              { __( "I don't need this", 'woocommerce-admin' ) }
            </Button>
          </div>
        </Modal>
      </header>
    </div>
  );
}

export default App;
