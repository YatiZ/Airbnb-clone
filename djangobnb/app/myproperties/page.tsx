import React from 'react'
import PropertyList from '../components/property/PropertyList'

const MyPropertiesPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        <h1 className="my-6 text-2xl">My properties</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <PropertyList/>
        </div>
    </main>
  )
}

export default MyPropertiesPage