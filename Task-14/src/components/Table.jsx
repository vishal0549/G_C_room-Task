

const Table = ({ name, photo, gender, email, city }) => {
  return (
    <tbody className='table-container'>
        <tr>
          <td>
            <img src={ photo } alt="no-img" />
          </td>
          <td>{ name }</td>
          <td>{ gender }</td>
          <td>{ email }</td>
          <td>{ city }</td>
        </tr>
    </tbody>
  )
}

export default Table