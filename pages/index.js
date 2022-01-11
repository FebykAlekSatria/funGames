// import Head from 'next/head'
import Layout from '../src/components/layout';
import Posts from '../src/components/home/posts';
import { useEffect, useState } from 'react';
import ModalUser from '../src/components/modal/modalUser';

export default function Home() {
  const [modal, setmodal] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {

      localStorage.removeItem('idMember')
      localStorage.removeItem('idRoom')
    }
  }, [])

  const viewModal = () => {
    setmodal(modal ? false : true);
  }
  return (
    <>
      {modal ? <ModalUser close={viewModal} /> : null}
      <Layout pages='Home'>
        <Posts
          modalView={viewModal} />
      </Layout>
    </>
  )
}
