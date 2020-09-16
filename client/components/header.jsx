import React from 'react';

export default function Header(props) {
  return (
    <header className="header bg-dark row pt-3 pb-2 mb-4">
      <div className="col-1"></div>
      <h2 className="text-light"><i className="fas fa-dollar-sign" />Wicked Sales</h2>
      <div className="col-1"></div>
    </header>
  );
}
