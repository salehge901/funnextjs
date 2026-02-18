import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(53,255,100,0.18)_0%,rgba(53,255,100,0)_70%)]" />
        <div className="absolute bottom-[-160px] right-[-140px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,179,56,0.14)_0%,rgba(255,179,56,0)_70%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1120px]">
        <div className="grid overflow-hidden rounded-[18px] border border-[#2B2A42] bg-[#16152A] shadow-[0_14px_30px_rgba(0,0,0,0.4)] lg:grid-cols-2">
          <div className="border-b border-[#2B2A42] bg-[linear-gradient(145deg,#1E1D35_0%,#141326_100%)] p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#35FF64]">Create Account</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">Join VirtGold today</h1>
            <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-[#BDBADF]">
              Create your account to place orders faster, track services, and manage all activity in one dashboard.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[#D7D4F2]">
              <span className="rounded-full border border-[#3A3952] px-3 py-1">Secure signup</span>
              <span className="rounded-full border border-[#3A3952] px-3 py-1">Order history</span>
              <span className="rounded-full border border-[#3A3952] px-3 py-1">Fast support</span>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <form className="space-y-5" action="#" method="post">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-[#E9E7F7]">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className="h-12 w-full rounded-[10px] border border-[#2E2D45] bg-[#121122] px-4 text-[15px] text-white placeholder:text-[#7F7AAB] outline-none transition focus:border-[#4D62A8] focus:shadow-[0_0_0_3px_rgba(110,153,255,0.22)]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-[#E9E7F7]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="name@email.com"
                  className="h-12 w-full rounded-[10px] border border-[#2E2D45] bg-[#121122] px-4 text-[15px] text-white placeholder:text-[#7F7AAB] outline-none transition focus:border-[#4D62A8] focus:shadow-[0_0_0_3px_rgba(110,153,255,0.22)]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-[#E9E7F7]">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="Create a password"
                  className="h-12 w-full rounded-[10px] border border-[#2E2D45] bg-[#121122] px-4 text-[15px] text-white placeholder:text-[#7F7AAB] outline-none transition focus:border-[#4D62A8] focus:shadow-[0_0_0_3px_rgba(110,153,255,0.22)]"
                />
              </div>

              <label className="inline-flex select-none items-center gap-2 text-sm text-[#C8C4E7]">
                <input type="checkbox" name="terms" required className="h-4 w-4 rounded border-[#3D3B59] bg-[#1A1930] accent-[#35FF64]" />
                I agree to terms and privacy policy
              </label>

              <button
                type="submit"
                className="mt-1 inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-gradient-to-b from-[#DBFFA2] to-[#00FF4D] text-[15px] font-semibold text-[#19121A] shadow-[0_8px_16px_rgba(0,0,0,0.28)] transition hover:-translate-y-px hover:brightness-[1.03]"
              >
                Create account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#BDBADF]">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[#35FF64] transition hover:text-[#7EFF9F]">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
