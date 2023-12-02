import React from 'react'
import UserMenu from '../../components/Layout/UserMenu'
import Layout from '../../components/Layout/Layout'

const Doctorsapp = () => {
  return (
    <Layout>
    <div className="container-flui p-3">
      <div className="row">
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-9">
          <h1>Doctors-Appointment</h1>
          <form>
            {/* Search of Patient name or  mobileNumber  */}
          </form>
          {/* results of the search result will be displayed  */}
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Doctorsapp
