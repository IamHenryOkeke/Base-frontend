import ServiceCard from "./ServiceCard";
import Image1 from "../../assets/image1.svg"
import Image2 from "../../assets/image2.svg"
import Image3 from "../../assets/image3.svg"
import Image4 from "../../assets/image4.svg"

export default function Services() {
  return (
    <section className="py-10 lg:py-20">
      <div className="lg:space-y-2 mx-auto font-bold text-center lg:w-[55%]">
        <h1 className="text-lg lg:text-2xl">Our Services</h1>
        <p className="text-2xl lg:text-4xl 2xl:text-5xl lg:leading-[1.1]">We provide the following exclusive services listed below</p>
      </div>
      <div className="mx-auto my-5 lg:my-10 2xl:w-[90%] grid lg:grid-cols-2 gap-5 lg:gap-16">
        <ServiceCard title="Fiat-Crypto-Fiat" description="Providing a platform where users can transact either traditional fiat currencies (like USD, EUR, etc.) and cryptocurrencies (such as Bitcoin, Ethereum, etc.) at the same time." imageUrl={Image4} />
        <ServiceCard title="Multiple Account Creation" description="Allowing users to create and manage multiple accounts on the platform, which could be beneficial for different types of transactions." imageUrl={Image2} />
        <ServiceCard title="Dynamic Integration" description="Integrating the Dynamic cryptocurrency project into your platform, potentially leveraging its privacy features like CoinJoin and other functionalities for enhanced transaction security and anonymity." imageUrl={Image1} />
        <ServiceCard title="Use of Attestations" description="Implementing advanced security measures such as email attestation, two-factor authentication (2FA), and encryption to protect user transactions and data." imageUrl={Image3} />
      </div>
    </section>
  )
}
