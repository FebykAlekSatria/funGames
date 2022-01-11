import { useEffect, useState } from 'react';
import Layout from '../src/components/layout';
import Axios from 'axios'

function Events() {
  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((res) => {
      console.log(res.data)
    })
  }, [])
  const [idRoom, setIdRoom] = useState('')

  const createIdRoom = () => {
    console.log('ini di klik')
    const data = { room_id: idRoom }
    Axios.post('http://localhost:3001/api/insert/', data).then((res) => {
      // alert('sukses')s
      console.log(res)
      console.log(res.data);
    })
  }
  return (
    <Layout>
      <input name="idRoom" placeholder='masukkan id' onChange={(e) => { setIdRoom(e.target.value) }} />
      <button onClick={createIdRoom}>create room</button>
      {console.log(idRoom)}
    </Layout>
  )
}

export default Events
