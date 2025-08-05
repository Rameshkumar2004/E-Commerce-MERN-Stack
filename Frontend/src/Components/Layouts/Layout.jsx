import React from 'react'
import Footer from './Footer';
import Header from './Header';

function Layout(props) {
  return (
    <div>
      <Header></Header>
      {/* <h1>Layout</h1> */}
      <main style={{minHeight:'90vh'}}>
        {props.children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
