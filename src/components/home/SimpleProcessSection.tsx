'use client';

import { useState } from 'react';

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

const steps: ProcessStep[] = [
  {
    step: 'Step 1',
    title: 'Create Account',
    description:
      'We are committed to providing top-notch security, ensuring your personal information stays',
  },
  {
    step: 'Step 2',
    title: 'Create Account',
    description:
      'We are committed to providing top-notch security, ensuring your personal information stays',
  },
  {
    step: 'Step 3',
    title: 'Create Account',
    description:
      'We are committed to providing top-notch security, ensuring your personal information stays',
  },
];

function StepChip({ label }: { label: string }) {
  return (
    <div className='grid h-[35px] w-[85px] place-items-center rounded-[4px] bg-[#141226]'>
      <span className='text-[14px] font-normal leading-[24px] text-[#BDBADF]'>{label}</span>
    </div>
  );
}

type StepCardProps = {
  step: string;
  title: string;
  description: string;
  expanded: boolean;
  onToggle: () => void;
  compact?: boolean;
};

function StepCard({ step, title, description, expanded, onToggle, compact = false }: StepCardProps) {
  if (compact) {
    return (
      <button
        type='button'
        aria-expanded={expanded}
        onClick={onToggle}
        className={[
          'relative w-full overflow-hidden rounded-[10px] px-[20px] pr-[104px] text-left transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          expanded
            ? 'bg-[#19182D] pb-[18px] pt-[18px]'
            : 'bg-[rgba(25,24,45,0.5)] py-[18px] hover:bg-[rgba(25,24,45,0.62)]',
        ].join(' ')}
      >
        <h3 className='text-[18px] font-semibold leading-[24px] text-white'>{title}</h3>
        <p
          className={[
            'mt-[8px] overflow-hidden text-[15px] leading-[22px] text-[#BDBADF] transition-all duration-300 ease-out',
            expanded ? 'max-h-[90px] translate-y-0 opacity-100' : 'max-h-0 -translate-y-[4px] opacity-0',
          ].join(' ')}
        >
          {description}
        </p>
        <div className='absolute right-[12px] top-[12px]'>
          <StepChip label={step} />
        </div>
      </button>
    );
  }

  return (
    <button
      type='button'
      aria-expanded={expanded}
      onClick={onToggle}
      className={[
        'relative w-[555px] overflow-hidden rounded-[10px] text-left transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
        expanded ? 'h-[126px] bg-[#19182D]' : 'h-[71px] bg-[rgba(25,24,45,0.5)] hover:bg-[rgba(25,24,45,0.62)]',
      ].join(' ')}
    >
      <h3 className='absolute left-[20px] top-[26px] w-[414px] text-[20px] font-semibold leading-none text-white'>{title}</h3>
      <p
        className={[
          'pointer-events-none absolute left-[20px] top-[58px] w-[414px] text-[16px] font-normal leading-[24px] text-[#BDBADF] transition-all duration-300 ease-out',
          expanded ? 'translate-y-0 opacity-100 delay-[40ms]' : 'translate-y-[8px] opacity-0 delay-0',
        ].join(' ')}
      >
        {description}
      </p>
      <div className='absolute right-[16px] top-[18px]'>
        <StepChip label={step} />
      </div>
    </button>
  );
}

export function SimpleProcessSection() {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set([0]));

  const toggleStep = (index: number) => {
    setExpandedIndices((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className='relative z-[20] mx-auto max-w-[1440px] px-[60px] pb-[135px]'>
      <div className='relative hidden h-[579px] lg:block'>
        <div className='absolute left-[101px] top-0 h-[579px] w-[455px] rounded-[14px] bg-[#131225]' />
        <div className='absolute left-[8px] top-[77px] h-[176px] w-[332px] rounded-[14px] bg-[#1F1E33]' />
        <div className='absolute left-[315px] top-[302px] h-[176px] w-[332px] rounded-[14px] bg-[#1F1E33]' />

        <div className='absolute left-[762px] top-[44px] w-[555px]'>
          <h2 className='w-[411px] text-[48px] font-semibold leading-[58px] tracking-[-0.02em] text-white'>Simple And Easy Process</h2>
          <div className='mt-[41px] flex flex-col gap-[16px]'>
            {steps.map((step, index) => (
              <StepCard
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                expanded={expandedIndices.has(index)}
                onToggle={() => toggleStep(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='lg:hidden'>
        <div className='relative mb-[28px] h-[220px] overflow-hidden rounded-[14px] bg-[#131225]'>
          <div className='absolute -left-[18px] top-[24px] h-[92px] w-[208px] rounded-[14px] bg-[#1F1E33]' />
          <div className='absolute -right-[22px] bottom-[22px] h-[92px] w-[208px] rounded-[14px] bg-[#1F1E33]' />
        </div>

        <h2 className='max-w-[411px] text-[40px] font-semibold leading-[48px] tracking-[-0.02em] text-white'>Simple And Easy Process</h2>
        <div className='mt-[24px] flex flex-col gap-[12px]'>
          {steps.map((step, index) => (
            <StepCard
              key={'mobile-' + step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              expanded={expandedIndices.has(index)}
              onToggle={() => toggleStep(index)}
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
}
