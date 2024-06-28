import PrimaryButton from "../PrimaryButton";
import { DynamicConnectButton } from "@dynamic-labs/sdk-react-core";

export default function Hero() {
  return (
    <div className="mt-72 md:mt-96 pb-10 md:pb-20 mb-10 space-y-10">
      <h2 className="font-bold text-4xl md:text-6xl 2xl:text-[80px] leading-none">
        Financial <br /> Infrastructure to <br /> grow your venture
      </h2>
      <DynamicConnectButton buttonClassName="flex">
        <PrimaryButton>Create a Free Account</PrimaryButton>
      </DynamicConnectButton>
    </div>
  );
}
