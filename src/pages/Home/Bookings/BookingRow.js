import React from 'react'

const BookingRow = ({booking,handleDelete}) => {
    const {serviceName, price,customer ,brand,img,message,_id} = booking;

    
  return (
   
        <tr>
        <th>
          <label>
            <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
        <div className='mr-9'>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{customer}</div>
            </div>
        </td>
        <td>
          {brand}
          <br/>
          <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
        <td>{serviceName}</td>
        <th>
          <div className="btn btn-ghost btn-xs">{message}</div>
        </th>
      </tr>
    
  )
}

export default BookingRow