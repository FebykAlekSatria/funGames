import CardGame from "../card/cardGame";

function Posts({ modalView }) {
  return (
    <section className="text-gray-600 body-font shadow-md mb-4">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap w-full mb-5">
          <div className="lg:w-1/2 w-full lg:mb-0">
            <h2 className="text-2xl font-medium title-font text-gray-900">Mainkan Game Bersama Teman</h2>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          <CardGame
            src='https://thumb.viva.co.id/media/frontend/thumbs3/2018/07/24/5b56e0739e3c8-ilustrasi-papan-permainan-ular-tangga_665_374.jpg'
            alt='image game'
            rule='multiple'
            title='Siapa Aku'
            desc='Tebak siapa aku bersama teman dan keluarga mu'
            link='/siapaaku'
          >
            <button className="float-right bg-blue-900 px-4 py-1 rounded-lg text-white" onClick={modalView}> Play</button>
          </CardGame>
          <CardGame
            src=''
            alt='image game'
            rule='solo'
            title='Ular tangga'
            desc='Tebak siapa aku bersama teman dan keluarga mu'
            link='/'
          >
            <button className="float-right bg-blue-900 px-4 py-1 rounded-lg text-white" onClick={modalView}> Play</button>
          </CardGame>
        </div>
      </div>
    </section>
  )
}

export default Posts
