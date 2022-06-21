import Image from 'next/image';
import Link from 'next/link';
// import Text from 'next/text';
import styles from '../styles/Home.module.css'

export default function Section() {
    return ( 
    <div>
        <Link href="/panier"><a class="text-16">Panier vide </a></Link>
        <Link href="/research"><a class="text-16">Rechercher </a></Link>
        <Link href="/cuvee_exclusive_1"><a class="text-16">Cuvée 1 </a></Link>
        <Link href="/cuvee_exclusive_2"><a class="text-16">Cuvée 2 </a></Link>
        <Link href="/cuvee_exclusive_3"><a class="text-16">Cuvée 3 </a></Link>
        <Link href="/cuvee_exclusive_4"><a class="text-16">Cuvée 4 </a></Link>
        <Link href="/filter"><a class="text-16">Filter </a></Link>

        <div class="bg-black2 text-yellow min-h-screen width-screen ">

            <div class="inline-block mt-20 ml-12 w-45">
                <Image src="/Cadre2.png" alt="Bouteille de rouge" width={500} height={525} />
            </div>


            <div class="inline-block w-45">
                <h1 class="text-72 w-75">UN PLAISIR {"\n"}
                GUSTATIF ET {"\n"}
                VISUEL</h1>

                {/* <Text class="text-40 mb-20 ">
                    UN PLAISIR{"\n"}
                    GUSTATIF
                </Text> */}

                <div>
                    <Image class="inline-block px-1 py-1 rounded-round border-solid border-2 border-white" src="/valid.svg" alt="valid" width={30} height={30}/>
                    <h3 class="ml-2 text-14 inline-block">Vin naturel et biodynamiques issus de l’agriculture biologique</h3>
                </div>

                <div class="mt-2">
                    <Image class="inline-block px-1 py-1 rounded-round border-solid border-2 border-white" src="/valid.svg" alt="valid" width={30} height={30}/>
                    <h3 class="text-14 inline-block ml-2">En collaboration avec des artistes et vignerons de tout horizon</h3>
                </div>

                <div class="mt-2">   
                    <Image class="inline-block px-1 py-1 rounded-round border-solid border-2 border-white" src="/valid.svg" alt="valid" width={30} height={30}/>
                    <h3 class="ml-2 text-14 inline-block">Vin exclusif et de collection, en quantité limitée</h3>
                </div>

                <button class="mt-4 text-center bg-red text-white text-14 px-5 py-2_5 rounded-2_5">DÉCOUVRIR NOTRE GALERIE D'ART </button>

            </div>
              
        </div>

          <div class="bg-yellow text-yellow min-h-screen width-screen">
                  
          <h1 class="ml-40 mt-10 w-65 text-black2 text-72 text-center">POUR<Image class="px-1" src="/firstsection4.png" alt="bouteille de vin" width={140} height={75}/>
          CRÉÉR DES EXPERIENCES 
          <Image class="px-2" src="/secondsection4.png" alt="bouteille de vin" width={170} height={85}/> IL FAUT 
          <Image class="px-2" src="/thirdsection4.png" alt="bouteille de vin" width={180} height={85}/>DES HISTOIRES À RACONTER
          <Image class="px-2" src="/foursection4.png" alt="bouteille de vin" width={180} height={85}/></h1>

          <div class="ml-40">
            <button class="ml-30 mt-4 text-center bg-red text-white text-14 px-5 py-3 rounded-2_5">DÉCOUVRIR NOTRE HISTOIRE</button>
            
            <button class="ml-4 bg-white px-3 py-3 rounded-round text-red inline-block"><Image class="text-center" src="/Polygone1.svg" alt="valid" width={12} height={12}/></button>

            <h3 CLASS="text-8 text-red underline underline-offset-2 inline-block ml-2">VOIR LA VIDÉO</h3>
          </div>

          
        </div>

        <div class="bg-yellow min-h-screen width-screen">
            
            <button class="ml-40 mt-4 text-center bg-green text-white text-12 px-2 py-1 rounded-2_5">LA CAVE EXCLUSIVE</button>


            <h1 class="mt-2  ml-40 text-56 text-black2 w-32 text-center ">NOS BOUTEILLES À L'UNITÉ</h1>

            <h4 class="ml-40 text-center w-30 text-black2 text-14">Il vous est possible de commander une bouteille à l'unité afin de pouvoir découvrir des cuvées différentes ou ré-apprécier des vins qui vous ont marqué.</h4>

            
            <div class="ml-40">
                <button class="ml-30 mt-4 text-center bg-red text-white text-14 px-4 py-2 rounded-2_5">VOIR TOUTE LA CAVE EXCLUSIVE</button>
            
            </div> 
        </div>
      </div>
    );
}   
