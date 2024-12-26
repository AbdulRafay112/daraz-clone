import React from 'react'

const page = ({params}:{params:{student:string}}) => {
  return (
    <div>
      student details
      <h1>student name: {params.student}</h1>
    </div>
  )
}

export default page
