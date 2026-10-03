import Image from "next/image";
import "../styles/landing.css";
import "../styles/theme.css";

export default function Home() {
  return (
    <main className="main">
      <div className="tittle">
        <div className="t1">
          <Image src="/vercel.svg" alt="Logo" width={100} height={100} />
          <h1 className="title">
            Stack Auditttttttttttttttttttttttt
          </h1>
        </div>
        <p className="tagline">
          Audit your stack for free and get a report
        </p>
      </div>
      <button className="buttonPrimary"><strong>Audit</strong></button>
    </main>
  );
}
