import React from 'react';
import { Link } from 'react-router-dom'
// Components
import InvoiceCard from './InvoiceCard'
import'./invoiceList.scss'

const InvoiceList = ({invoices}) => {

  const linkStyle = {
    width: "10vw",
    height: "10vh",
    border: " 3px solid rgba(53, 53, 53, 0.5",
    color: "rgba(60, 110, 113, 1",
    position: "absolute",
    top: "0",
    left: "0",
    fontSize: "2vw",
    display: "flex",
    alignItems: "center"
  }

  return (
    <div className="invoice-list">
      <Link 
      to="/profile"
      style={linkStyle}
      div className="return">Return To Profile
    </Link>
      <h1>Invoice List</h1>
      {invoices?.map((invoice) => {
        return (
          <Link key={invoice._id} to={`/invoices/${invoice._id}`}>
            <InvoiceCard 
              invoice={invoice}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default InvoiceList