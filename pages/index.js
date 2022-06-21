import Image from 'next/image';
import Link from 'next/link';
// import Text from 'next/text';
import styles from '../styles/Home.module.css'

export default function Section() {
    return ( 
      
        <div className={styles.body}>
            <div class="min-h-screen width-screen bg-red">
                <Image class="mt-2" src="/logo.svg" alt="site logo" width={140} height={85} />

                <h1 class="ml-40 text-yellow text-56 text-center mt-22 w-55">JE CERTIFIE QUE J’AI  L’ÂGE LÉGAL REQUIS POUR CONSOMMER DE L’ALCOOL. </h1>

                <div class="text-center mt-6">
               <Link href="/home"><a class="px-4 py-2 rounded-2_5 bg-yellow text-16 w-15 text-center text-red">ACCÉDER AU SITE</a></Link> 
                <button class="text-yellow text-16 ml-4">SORTIR</button>
                </div>

                <p class="text-16 text-center mt-14 text-yellow">
                    Vous devez avoir l’âge légal de votre pays, province ou territoire pour accéder à ce site.</p>
                <p class="text-yellow text-16 text-center">L’abus d’alcool est dangereux pour la santé, à consommer avec modération.</p>

            </div>
        </div>
    );
}   
