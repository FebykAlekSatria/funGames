import Layout from '../src/components/layout';
import Image from 'next/image'
import profil from '../src/img/profil.png'
import facebook from '../src/img/facebook.svg'
import instagram from '../src/img/instagram.svg'
import linked from '../src/img/in.svg'
import github from '../src/img/github.svg'

function About() {
  return (
    <Layout pages="MENGENAL">
      <div className="container px-5 py-10 mx-auto items-center bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-wrap">
          <div className="lg:w-4/12 md:w-1/2 border-gray-200 border-r-2">
            <Image src={profil} alt='Developer' width={300} height={300} />
          </div>
          <div className="lg:w-7/12 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ml-4 ">
            <div className="">
              <p><b className="text-sm text-indigo-500 font-bold">funGAMES</b> dikembangkan dengan teknologi yang sangat baik dan efisien, frontend menggunakan
                framework <b className="text-sm text-indigo-500 font-semibold">NEXT JS</b> yang pada dasarnya menerapkan library <b className="text-sm text-indigo-500 font-semibold">REACT JS</b> yang mana banyak digunakan oleh perusahaan-perusahaan besar,
                backend menggunakan <b className="text-sm text-indigo-500 font-semibold">FIREBASE</b> untuk membuat live chat agar game-game yang dikembangkan lebih menyenangkan
                bagi penggunanya, dan database menggunakan <b className="text-sm text-indigo-500 font-semibold">MYSQLI</b>.</p><br />
              <div className="w-full grid grid-cols-2 gap-3">
                <p className="font-bold"> Pengembang </p>
                <i > : Febyk alek satria</i>
                <p className="font-bold"> Pendidikan</p>
                <i> : Strata Satu (S1) Teknik Informatika Universitas Sriwijaya</i>
                <p className="font-bold"> Alamat</p>
                <i> : Bengkulu, Indonesia</i>
              </div>
              <br />
            </div>
            <div className="flex my-2 float-right">
              {/* <div className="items-center justify-center h-10 w-10 mx-1 ">
                <Image src={facebook} />
              </div> */}
              <div className="items-center justify-center h-10 w-10 mx-1">
                <Image src={instagram} />
              </div>
              <div className="items-center justify-center h-10 w-10 mx-1">
                <Image src={linked} />
              </div>
              <div className="items-center justify-center h-10 w-10 mx-1">
                <Image src={github} />
              </div>

            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default About
