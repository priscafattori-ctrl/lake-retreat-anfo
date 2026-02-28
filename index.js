
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lake Retreat Anfo – Vista lago mozzafiato sul Lago d’Idro</title>
        <meta name="description" content="Appartamento vacanze Lago d’Idro perfetto per coppie e remote workers" />
      </Head>

      <main style={{fontFamily:"sans-serif"}}>

        <section style={{background:"#1E453E",color:"white",padding:"80px 20px",textAlign:"center"}}>
          <h1>Lake Retreat Anfo</h1>
          <h2>Vista lago mozzafiato sul Lago d’Idro</h2>
          <p>Perfetto per coppie e remote workers</p>
          <button style={{padding:"12px 20px",marginTop:"20px"}}>Verifica disponibilità</button>
        </section>

        <section style={{padding:"40px"}}>
          <h2>L'Appartamento</h2>
          <ul>
            <li>Vista lago panoramica – anche dal letto</li>
            <li>Appartamento modernissimo (2026)</li>
            <li>Natura e tranquillità</li>
          </ul>
        </section>

        <section style={{background:"#f5f5f5",padding:"40px"}}>
          <h2>Il tuo ufficio vista lago</h2>
          <ul>
            <li>WiFi veloce – simply essential</li>
            <li>Tavolo vista lago</li>
            <li>Seconda scrivania</li>
            <li>Nespresso + milk foamer</li>
            <li>Zero rumore (vicini a 300m)</li>
            <li>Workation perfetta</li>
          </ul>
        </section>

        <section style={{padding:"40px"}}>
          <h2>Anfo & Lago d’Idro</h2>
          <p>Meno turistico del Garda ma incredibilmente autentico.</p>
        </section>

        <section style={{background:"#f5f5f5",padding:"40px"}}>
          <h2>Cosa vedere</h2>
          <p>Rocca d’Anfo, Lago di Garda, Brescia, Verona, Trento, Bergamo</p>
        </section>

        <section style={{padding:"40px"}}>
          <h2>Attività</h2>
          <p>Kayak, trekking, bike, relax</p>
        </section>

        <section style={{background:"#f5f5f5",padding:"40px",textAlign:"center"}}>
          <h2>I vostri host</h2>
          <p>Prisca, Lukas e Skye – risposta entro 2h, check-in flessibile</p>
        </section>

        <section style={{padding:"40px",textAlign:"center"}}>
          <button style={{padding:"12px 20px",background:"#1E453E",color:"white"}}>
            Verifica disponibilità
          </button>
        </section>

      </main>
    </>
  )
}
