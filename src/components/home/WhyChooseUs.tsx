const featureDescription =
  'We are committed to providing top-notch security, ensuring your personal information stays safe so you can enjoy gaming worry-free.';

type WhyFeature = {
  title: string;
  iconSrc?: string;
  iconClassName?: string;
  supportIcon?: boolean;
};

const features: WhyFeature[] = [
  {
    title: 'Security & Safety',
    iconSrc: '/figma/embedded/homepage/why/icon-security.svg',
    iconClassName: 'h-[74px] w-[74px]',
  },
  {
    title: 'Ultra Fast',
    iconSrc: '/figma/embedded/homepage/why/icon-speed.svg',
    iconClassName: 'h-[74px] w-[74px]',
  },
  {
    title: 'Customer Support',
    supportIcon: true,
  },
];

function SupportIcon() {
  return (
    <div className='relative h-[74px] w-[74px]'>
      <img
        src='/figma/embedded/homepage/why/support-bg.svg'
        alt=''
        className='h-[74px] w-[74px] select-none'
        draggable={false}
      />
      <img
        src='/figma/embedded/homepage/why/icon-support.svg'
        alt=''
        className='pointer-events-none absolute left-1/2 top-1/2 h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 select-none'
        draggable={false}
      />
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className='relative z-[30] mx-auto mt-[18px] max-w-[1440px] bg-[#0D0C1D] px-[60px] pb-[86px]'>
      <div className='relative left-1/2 w-screen -translate-x-1/2'>
        <div className='pointer-events-none absolute inset-x-[6.5vw] top-1/2 h-px -translate-y-1/2 bg-[#2B2A42]' />
        <div className='relative mx-auto grid h-[188px] w-[188px] place-items-center'>
          <img
            src='/figma/embedded/homepage/image-19.svg'
            alt=''
            className='h-[188px] w-[188px] select-none object-contain mix-blend-lighten'
            draggable={false}
          />
        </div>
      </div>

      <h2 className='mt-[30px] text-center text-[56px] font-semibold leading-[64px] tracking-[-0.02em] text-white'>
        Why Choose Us
      </h2>

      <div className='relative mx-auto mt-[124px] max-w-[1320px]'>
        <div className='pointer-events-none absolute z-[35] -bottom-[150px] -top-[82px] left-[31.1%] hidden w-px -translate-x-1/2 bg-[#2B2A42] md:block' />
        <div className='pointer-events-none absolute z-[35] -bottom-[150px] -top-[82px] left-[68.9%] hidden w-px -translate-x-1/2 bg-[#2B2A42] md:block' />

        <div className='grid grid-cols-1 gap-y-[76px] md:grid-cols-3 md:gap-x-[177px]'>
          {features.map((feature) => (
            <article key={feature.title} className='mx-auto w-full max-w-[322px] text-center'>
              <div className='grid h-[74px] place-items-center'>
                {feature.supportIcon ? (
                  <SupportIcon />
                ) : (
                  <img
                    src={feature.iconSrc}
                    alt=''
                    className={feature.iconClassName + ' select-none'}
                    draggable={false}
                  />
                )}
              </div>

              <h3 className='mt-[36px] text-[24px] font-semibold leading-none text-white'>{feature.title}</h3>

              <p className='mx-auto mt-[36px] max-w-[322px] text-center text-[16px] font-normal leading-[24px] tracking-[0] text-[#BDBADF]'>
                {featureDescription}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
