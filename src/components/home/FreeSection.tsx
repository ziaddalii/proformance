import { connect } from "http2";
import { Button } from "../ui/button";
import ConnectBg from "@/assets/images/connect.png";
import Image from "next/image";
function FreeSection() {
  return (
    <section className="container py-20">
      <header className="text-center max-w-4xl mx-auto">
        <h2 className="mb-4 text-5xl font-bold">Enjoy Our Services for Free</h2>
        <p className="mb-4">
          Experience the full power of Proformance without any cost
        </p>
        <p className="text-slate-400">
          At Proformance, we believe in empowering businesses of all sizes to
          achieve their best. That&apos;s why we&apos;re offering our
          comprehensive management and collaboration tool absolutely free.
        </p>
      </header>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-8">
        <div className="col-span-1 space-y-4 p-8 bg-gradient-to-tr from-blue-700 to-purple-500 rounded-xl">
          <h2 className="font-bold text-2xl">No Hidden Fees</h2>
          <p className="max-w-sm">
            Access all features without worrying about any hidden charges or
            subscriptions.
          </p>
        </div>
        <div className="col-span-1 space-y-4 p-8 bg-gradient-to-tr from-teal-400 to-blue-700 rounded-xl">
          <h2 className="font-bold text-2xl">Unlimited Users</h2>
          <p className="max-w-sm">
            Bring your entire team onboard, whether it&apos;s a small startup or
            a large enterprise.
          </p>
        </div>
        <div className="col-span-1 space-y-4 p-8 bg-gradient-to-br from-red-600 to-pink-500 rounded-xl">
          <h2 className="font-bold text-2xl">Full Functionality</h2>
          <p className="max-w-sm">
            Enjoy the full range of our services, from task management to
            real-time collaboration, without any limitations.
          </p>
        </div>
        <div className="md:col-span-3 grid md:grid-cols-2 grid-cols-1 col-span-1 bg-gradient-to-r from-blue-700 to-purple-500 rounded-xl">
          <div className="col-span-1 md:px-8 px-4 py-24 space-y-4">
            <h2 className="font-bold md:text-5xl text-3xl max-w-lg">
              Join Proformance Now
            </h2>
            <p className="max-w-md">
              Start using Proformance today and see the difference it makes for
              your team&apos;s productivity and collaboration.
            </p>
            <Button className="rounded-full text-lg px-12 py-6 text-blue-700">
              Start Now
            </Button>
          </div>
          <div className="opacity-50 hidden md:block">
            <Image className="object-cover h-full w-full" width={1000} height={1000} src={ConnectBg.src} alt="connect background" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeSection;
