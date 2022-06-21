import Image from 'next/image';
// import Text from 'next/text'

export default function Section() {
    return ( 
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
    );
}   
