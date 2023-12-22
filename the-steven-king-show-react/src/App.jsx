import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    // This will calculate how many pixels the page is vertically
    const winScroll = document.documentElement.scrollTop;
    // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // This will calculate the final total of the percentage of how much the user has scrolled.
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener("scroll", onScroll);

    // 
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <div className='TheBody'>
    <div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{ height: `${scrollTop}%` }}
        ></div>
      </div>
    <div className='BodyContent'>
      <h1>Welcome to the Steven King Show</h1>
      
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quam lacus
        suspendisse faucibus interdum. Aliquam sem et tortor consequat id porta
        nibh. Posuere morbi leo urna molestie at. Fermentum dui faucibus in
        ornare quam viverra. Sagittis purus sit amet volutpat consequat mauris
        nunc congue nisi. At imperdiet dui accumsan sit. Tellus molestie nunc
        non blandit massa enim nec dui nunc. Quis commodo odio aenean sed
        adipiscing diam donec adipiscing. Ut morbi tincidunt augue interdum
        velit euismod in pellentesque. Duis convallis convallis tellus id. In
        hac habitasse platea dictumst vestibulum. Tincidunt lobortis feugiat
        vivamus at augue eget arcu. Fermentum odio eu feugiat pretium nibh ipsum
        consequat. Neque gravida in fermentum et sollicitudin. Etiam erat velit
        scelerisque in dictum non consectetur a. Fermentum et sollicitudin ac
        orci phasellus egestas. Nisl nunc mi ipsum faucibus vitae aliquet nec.
        Feugiat in fermentum posuere urna nec tincidunt. Viverra orci sagittis
        eu volutpat odio facilisis. Erat pellentesque adipiscing commodo elit
        at. Et pharetra pharetra massa massa ultricies. At urna condimentum
        mattis pellentesque id nibh tortor id. Ornare quam viverra orci sagittis
        eu volutpat odio. Platea dictumst vestibulum rhoncus est pellentesque
        elit ullamcorper dignissim cras. Semper viverra nam libero justo laoreet
        sit amet cursus sit. Non blandit massa enim nec dui nunc mattis enim.
        Feugiat in ante metus dictum at tempor commodo. Tincidunt vitae semper
        quis lectus nulla at volutpat. Etiam sit amet nisl purus in mollis.
        Maecenas pharetra convallis posuere morbi leo urna molestie at. At in
        tellus integer feugiat scelerisque varius morbi. Habitasse platea
        dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Posuere
        urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Orci
        dapibus ultrices in iaculis nunc sed augue. Adipiscing diam donec
        adipiscing tristique risus. Ultrices gravida dictum fusce ut placerat
        orci nulla. Pretium quam vulputate dignissim suspendisse in est. Nunc
        pulvinar sapien et ligula ullamcorper malesuada proin libero. Metus
        aliquam eleifend mi in nulla posuere sollicitudin aliquam. Ut sem nulla
        pharetra diam sit. Varius vel pharetra vel turpis nunc eget lorem dolor.
        Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Posuere
        ac ut consequat semper viverra nam libero. Sem integer vitae justo eget
        magna. Cursus vitae congue mauris rhoncus. Enim nunc faucibus a
        pellentesque sit. Nam aliquam sem et tortor consequat id porta nibh.
        Elit ut aliquam purus sit amet luctus. Tortor condimentum lacinia quis
        vel eros donec. Maecenas sed enim ut sem viverra aliquet. Cursus eget
        nunc scelerisque viverra mauris in aliquam sem. Non sodales neque
        sodales ut etiam sit. Non pulvinar neque laoreet suspendisse interdum
        consectetur. Urna molestie at elementum eu. Cras ornare arcu dui vivamus
        arcu felis bibendum. Sem et tortor consequat id porta nibh venenatis
        cras sed. Turpis egestas sed tempus urna et pharetra pharetra massa
        massa. Bibendum enim facilisis gravida neque. Volutpat ac tincidunt
        vitae semper quis lectus nulla at. Accumsan lacus vel facilisis volutpat
        est. Egestas pretium aenean pharetra magna ac placerat vestibulum
        lectus. Vestibulum mattis ullamcorper velit sed. Amet mattis vulputate
        enim nulla aliquet. Mattis nunc sed blandit libero volutpat sed cras.
        Vitae suscipit tellus mauris a diam maecenas sed enim. Sagittis orci a
        scelerisque purus semper. Sit amet volutpat consequat mauris nunc congue
        nisi vitae suscipit. Ultrices neque ornare aenean euismod. Sit amet
        nulla facilisi morbi tempus. Condimentum vitae sapien pellentesque
        habitant morbi tristique senectus et. Tristique sollicitudin nibh sit
        amet commodo nulla. Quis lectus nulla at volutpat diam ut. Volutpat est
        velit egestas dui id ornare arcu. Porttitor massa id neque aliquam. A
        iaculis at erat pellentesque adipiscing. Quisque sagittis purus sit amet
        volutpat consequat mauris. Aliquam ultrices sagittis orci a scelerisque
        purus semper. Augue mauris augue neque gravida in fermentum et. Volutpat
        sed cras ornare arcu. Ut venenatis tellus in metus vulputate eu. Neque
        volutpat ac tincidunt vitae semper quis lectus. Sapien pellentesque
        habitant morbi tristique senectus et. Egestas sed sed risus pretium quam
        vulputate dignissim. Tempor commodo ullamcorper a lacus vestibulum sed.
        Tellus cras adipiscing enim eu turpis egestas. Quis blandit turpis
        cursus in hac habitasse platea dictumst. Pellentesque sit amet porttitor
        eget. Ac ut consequat semper viverra. Tempor orci eu lobortis elementum
        nibh tellus molestie. Commodo nulla facilisi nullam vehicula ipsum a
        arcu. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu
        vitae. Faucibus turpis in eu mi bibendum neque egestas congue quisque.
        Tellus id interdum velit laoreet id donec. Mattis ullamcorper velit sed
        ullamcorper morbi tincidunt ornare. Nibh tortor id aliquet lectus proin
        nibh nisl. Elementum eu facilisis sed odio. Hac habitasse platea
        dictumst quisque sagittis purus. Gravida arcu ac tortor dignissim
        convallis aenean et. Penatibus et magnis dis parturient montes. Risus
        feugiat in ante metus dictum at tempor commodo. Eget lorem dolor sed
        viverra ipsum nunc aliquet. At ultrices mi tempus imperdiet. Potenti
        nullam ac tortor vitae purus faucibus ornare. Eget felis eget nunc
        lobortis mattis aliquam faucibus purus. Ullamcorper malesuada proin
        libero nunc consequat interdum varius sit amet. Diam quis enim lobortis
        scelerisque fermentum dui faucibus in. Turpis massa tincidunt dui ut
        ornare lectus sit. Nisi vitae suscipit tellus mauris a diam maecenas. At
        tempor commodo ullamcorper a lacus. Ornare arcu odio ut sem nulla
        pharetra diam sit. Adipiscing vitae proin sagittis nisl rhoncus mattis
        rhoncus urna. Maecenas sed enim ut sem viverra. Arcu dictum varius duis
        at consectetur lorem donec massa sapien. Consectetur a erat nam at.
        Iaculis at erat pellentesque adipiscing commodo. Nisi vitae suscipit
        tellus mauris a diam maecenas sed enim. In eu mi bibendum neque egestas
        congue quisque. Massa id neque aliquam vestibulum morbi blandit cursus
        risus. Curabitur vitae nunc sed velit dignissim sodales ut eu. Diam vel
        quam elementum pulvinar etiam. Viverra nam libero justo laoreet sit amet
        cursus sit. Vitae congue eu consequat ac felis donec et. Morbi tincidunt
        augue interdum velit euismod in pellentesque massa placerat. Fames ac
        turpis egestas sed tempus urna. Blandit libero volutpat sed cras ornare
        arcu dui vivamus arcu. Odio eu feugiat pretium nibh ipsum consequat
        nisl. Lectus arcu bibendum at varius vel pharetra. Sit amet facilisis
        magna etiam. Suspendisse sed nisi lacus sed viverra tellus in hac
        habitasse. Volutpat sed cras ornare arcu. Ac ut consequat semper viverra
        nam libero. Velit sed ullamcorper morbi tincidunt ornare massa eget
        egestas purus. Non pulvinar neque laoreet suspendisse interdum
        consectetur libero. Enim tortor at auctor urna nunc id cursus. Ornare
        aenean euismod elementum nisi quis eleifend. Pharetra vel turpis nunc
        eget lorem dolor. Scelerisque viverra mauris in aliquam sem. Justo
        laoreet sit amet cursus sit amet dictum sit. Auctor elit sed vulputate
        mi sit amet mauris commodo. A condimentum vitae sapien pellentesque
        habitant. Vel orci porta non pulvinar. Integer feugiat scelerisque
        varius morbi enim nunc faucibus a. At tellus at urna condimentum mattis
        pellentesque. Mattis ullamcorper velit sed ullamcorper morbi tincidunt.
        Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.
        Cras tincidunt lobortis feugiat vivamus. Egestas erat imperdiet sed
        euismod nisi. Cursus sit amet dictum sit amet justo donec enim diam. At
        auctor urna nunc id cursus metus. Eu scelerisque felis imperdiet proin
        fermentum leo. Amet porttitor eget dolor morbi non arcu risus quis.
        Dolor magna eget est lorem ipsum dolor sit. Sed arcu non odio euismod
        lacinia. Lorem mollis aliquam ut porttitor leo a diam sollicitudin
        tempor. Nunc aliquet bibendum enim facilisis. Lobortis mattis aliquam
        faucibus purus in. Accumsan in nisl nisi scelerisque eu. Vestibulum
        lectus mauris ultrices eros in cursus turpis. Mattis molestie a iaculis
        at erat pellentesque. Id diam maecenas ultricies mi eget mauris
        pharetra. Semper eget duis at tellus. Mauris nunc congue nisi vitae
        suscipit tellus mauris. Posuere ac ut consequat semper viverra nam. Diam
        maecenas ultricies mi eget mauris. Mattis enim ut tellus elementum
        sagittis. Aliquet lectus proin nibh nisl condimentum id venenatis.
        Rhoncus mattis rhoncus urna neque viverra justo. Mattis rhoncus urna
        neque viverra justo nec ultrices dui sapien. Feugiat nisl pretium fusce
        id. Nulla aliquet enim tortor at auctor. Velit aliquet sagittis id
        consectetur purus ut faucibus. Egestas congue quisque egestas diam in
        arcu. Nunc mattis enim ut tellus elementum. Sem et tortor consequat id
        porta nibh venenatis cras. Vitae auctor eu augue ut lectus. Vestibulum
        sed arcu non odio euismod lacinia at. Quam nulla porttitor massa id.
        Nullam non nisi est sit amet facilisis magna etiam. Malesuada bibendum
        arcu vitae elementum curabitur vitae nunc. In fermentum et sollicitudin
        ac. At tellus at urna condimentum. Turpis egestas pretium aenean
        pharetra magna ac placerat. Amet est placerat in egestas erat imperdiet
        sed. Sed augue lacus viverra vitae congue eu consequat ac felis. Nisi
        quis eleifend quam adipiscing vitae proin sagittis. Bibendum est
        ultricies integer quis auctor elit. Auctor eu augue ut lectus arcu
        bibendum at. Dictum at tempor commodo ullamcorper a lacus vestibulum sed
        arcu. Sem integer vitae justo eget magna fermentum. Ornare aenean
        euismod elementum nisi quis eleifend quam. Nec tincidunt praesent semper
        feugiat nibh sed pulvinar proin. Sit amet massa vitae tortor condimentum
        lacinia quis vel eros. Nullam ac tortor vitae purus faucibus ornare
        suspendisse sed. Sem fringilla ut morbi tincidunt augue interdum velit
        euismod. Pretium viverra suspendisse potenti nullam ac tortor vitae
        purus. Eget aliquet nibh praesent tristique magna sit amet purus. Libero
        nunc consequat interdum varius. Volutpat commodo sed egestas egestas
        fringilla. Massa id neque aliquam vestibulum morbi blandit. Nullam non
        nisi est sit amet facilisis magna etiam tempor. Malesuada fames ac
        turpis egestas integer eget aliquet nibh. Commodo elit at imperdiet dui
        accumsan sit. Sagittis vitae et leo duis ut diam quam nulla. Massa id
        neque aliquam vestibulum morbi. Duis convallis convallis tellus id
        interdum velit laoreet. Sagittis eu volutpat odio facilisis mauris sit
        amet massa. Tempus urna et pharetra pharetra massa massa. Sed euismod
        nisi porta lorem mollis. Egestas congue quisque egestas diam in arcu
        cursus euismod quis. Ipsum nunc aliquet bibendum enim facilisis gravida
        neque. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce.
        Cursus in hac habitasse platea dictumst quisque sagittis. Faucibus et
        molestie ac feugiat sed lectus vestibulum. Est placerat in egestas erat
        imperdiet sed euismod. Tristique et egestas quis ipsum suspendisse
        ultrices gravida dictum. Tortor at auctor urna nunc id cursus metus
        aliquam. Ultrices neque ornare aenean euismod. Consequat nisl vel
        pretium lectus quam id. Nunc sed blandit libero volutpat sed cras ornare
        arcu. Venenatis urna cursus eget nunc scelerisque. Ultrices mi tempus
        imperdiet nulla malesuada pellentesque elit eget. Commodo nulla facilisi
        nullam vehicula ipsum a arcu. Mollis nunc sed id semper risus in
        hendrerit. Tristique magna sit amet purus gravida quis. Faucibus
        pulvinar elementum integer enim neque volutpat ac tincidunt. Integer
        enim neque volutpat ac tincidunt vitae. Amet dictum sit amet justo donec
        enim diam vulputate ut. Vitae sapien pellentesque habitant morbi
        tristique. Ipsum dolor sit amet consectetur adipiscing elit duis
        tristique. Elementum eu facilisis sed odio morbi quis commodo odio. In
        hac habitasse platea dictumst. Habitasse platea dictumst vestibulum
        rhoncus est pellentesque elit ullamcorper dignissim. Morbi non arcu
        risus quis varius quam quisque. Id faucibus nisl tincidunt eget nullam
        non nisi est.</p>
        </div>
        </div>
    </>
  )
}

export default App
