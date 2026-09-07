'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  FileText,
  MessageCircleMore,
  UserPlus,
  WalletCards,
} from 'lucide-react';

const STEPS = [
  { label: 'Tenant', detail: 'Add tenant', icon: UserPlus },
  { label: 'Bill', detail: 'Itemized bill', icon: FileText },
  { label: 'WhatsApp', detail: 'Send directly', icon: MessageCircleMore },
  { label: 'Payment', detail: 'Track status', icon: WalletCards },
] as const;

const TENANTS = [
  { initials: 'AS', name: 'Aman Singh', unit: 'A-101 · Bed 1', rent: '₹7,500' },
  { initials: 'PM', name: 'Pooja Mehta', unit: 'A-102 · Bed 1', rent: '₹7,500' },
  { initials: 'RV', name: 'Rahul Verma', unit: 'B-201 · Bed 2', rent: '₹8,000' },
  { initials: 'SJ', name: 'Sneha Jain', unit: 'B-202 · Bed 1', rent: '₹7,500' },
] as const;

const PAYMENTS = [
  { name: 'Aman Singh', amount: '₹8,440', status: 'Paid' },
  { name: 'Pooja Mehta', amount: '₹7,850', status: 'Paid' },
  { name: 'Rahul Verma', amount: '₹8,910', status: 'Pending' },
  { name: 'Sneha Jain', amount: '₹7,500', status: 'Overdue' },
] as const;

function Status({ status }: { status: (typeof PAYMENTS)[number]['status'] }) {
  const styles = {
    Paid: 'bg-[#e5f5df] text-[#154212]',
    Pending: 'bg-[#fef3c7] text-[#9a4f04]',
    Overdue: 'bg-[#fee2e2] text-[#b91c1c]',
  }[status];

  return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles}`}>{status}</span>;
}

export function CollectionFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => {
      setActiveStep((step) => (step + 1) % STEPS.length);
    }, 2600);
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_32px_72px_rgba(26,28,28,0.12),0_8px_24px_rgba(26,28,28,0.06)]">
      <div className="flex items-center justify-between border-b border-[rgba(24,24,27,0.08)] px-4 py-3 sm:px-6">
        <div>
          <p className="text-xs font-semibold text-[#1a1c1c]">May collection run</p>
          <p className="mt-0.5 text-xs text-[#72796e]">Illustrative product workflow</p>
        </div>
        <div className="hidden items-center gap-1 sm:flex" role="group" aria-label="Preview a workflow step">
          {STEPS.map((step, index) => (
            <button
              key={step.label}
              type="button"
              onClick={() => setActiveStep(index)}
              aria-pressed={activeStep === index}
              className={`relative h-11 min-w-24 whitespace-nowrap rounded-full px-4 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27] md:min-w-28 ${
                activeStep === index ? 'text-white' : 'text-[#72796e] hover:text-[#1a1c1c]'
              }`}
            >
              {activeStep === index && (
                <motion.span
                  layoutId="active-workflow-step"
                  className="absolute inset-0 -z-0 rounded-full bg-[#154212]"
                  transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="relative z-10">{index + 1}. {step.label}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-[#154212] sm:hidden">
          Step {activeStep + 1} of 4
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.05fr_1.22fr_.68fr_1.05fr]">
        <FlowPanel index={0} activeStep={activeStep} label="Add a tenant" icon={UserPlus}>
          <div className="divide-y divide-[rgba(24,24,27,0.07)]">
            {TENANTS.map((tenant, index) => (
              <div
                key={tenant.name}
                className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3.5 sm:px-5 ${
                  index === 2 ? 'bg-[#eef8ea]' : ''
                }`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4f3f2] text-xs font-semibold text-[#42493e]">
                  {tenant.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-[#1a1c1c]">{tenant.name}</p>
                  <p className="mt-0.5 truncate text-xs text-[#72796e]">{tenant.unit}</p>
                </div>
                <p className="text-xs font-medium tabular-nums text-[#1a1c1c]">{tenant.rent}</p>
              </div>
            ))}
          </div>
        </FlowPanel>

        <FlowPanel index={1} activeStep={activeStep} label="Create the bill" icon={FileText} emphasized>
          <div className="mx-4 mb-5 bg-[#fffefa] p-5 shadow-[0_16px_36px_rgba(26,28,28,0.12)] sm:mx-5 sm:p-6">
            <div className="flex items-start justify-between gap-4 border-b border-dashed border-[#c2c9bb] pb-4">
              <div>
                <p className="heading-serif text-xl text-[#1a1c1c]">May 2025 bill</p>
                <p className="mt-1 text-xs text-[#72796e]">Rahul Verma · B-201 / Bed 2</p>
              </div>
              <span className="text-xs font-medium text-[#72796e]">#MAY-025</span>
            </div>
            <dl className="divide-y divide-[rgba(24,24,27,0.06)] py-2 text-xs">
              {[
                ['Monthly rent', '₹7,500'],
                ['Electricity · 110 units', '₹1,100'],
                ['Wi-Fi', '₹200'],
                ['Water', '₹110'],
              ].map(([label, amount]) => (
                <div key={label} className="flex justify-between gap-4 py-2.5">
                  <dt className="text-[#42493e]">{label}</dt>
                  <dd className="font-medium tabular-nums text-[#1a1c1c]">{amount}</dd>
                </div>
              ))}
            </dl>
            <div className="flex items-end justify-between border-t border-[#1a1c1c] pt-3">
              <span className="text-xs font-semibold text-[#1a1c1c]">Total</span>
              <span className="text-lg font-bold tabular-nums text-[#154212]">₹8,910</span>
            </div>
          </div>
        </FlowPanel>

        <FlowPanel index={2} activeStep={activeStep} label="Send on WhatsApp" icon={MessageCircleMore}>
          <div className="flex min-h-64 flex-col items-center justify-center px-5 pb-7 text-center lg:min-h-[330px]">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e5f5df] text-[#154212]">
              <MessageCircleMore aria-hidden="true" size={27} strokeWidth={1.8} />
            </span>
            <p className="mt-5 text-xs font-semibold text-[#1a1c1c]">Bill ready to send</p>
            <p className="mt-1 text-xs leading-relaxed text-[#72796e]">Rahul receives the itemized bill without installing an app.</p>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#154212]">
              <Check aria-hidden="true" size={13} />
              Sent at 10:32 AM
            </div>
          </div>
        </FlowPanel>

        <FlowPanel index={3} activeStep={activeStep} label="Track the payment" icon={WalletCards} last>
          <div className="grid grid-cols-3 divide-x divide-[rgba(24,24,27,0.07)] border-b border-[rgba(24,24,27,0.07)] px-2 py-4 text-center">
            {[
              ['Collected', '₹16,290', 'text-[#154212]'],
              ['Pending', '₹8,910', 'text-[#9a4f04]'],
              ['Overdue', '₹7,500', 'text-[#b91c1c]'],
            ].map(([label, value, color]) => (
              <div key={label} className="px-1">
                <p className="text-xs text-[#72796e]">{label}</p>
                <p className={`mt-1 text-xs font-bold tabular-nums ${color}`}>{value}</p>
              </div>
            ))}
          </div>
          <div className="divide-y divide-[rgba(24,24,27,0.07)]">
            {PAYMENTS.map((payment) => (
              <div key={payment.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-3.5 sm:px-5">
                <p className="truncate text-xs font-medium text-[#1a1c1c]">{payment.name}</p>
                <Status status={payment.status} />
                <p className="text-xs tabular-nums text-[#42493e]">{payment.amount}</p>
              </div>
            ))}
          </div>
        </FlowPanel>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-[rgba(24,24,27,0.08)] bg-[#f4f3f2] px-4 py-3 text-xs font-medium text-[#42493e]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#154212]" />
        One monthly loop. Every tenant accounted for.
      </div>
    </div>
  );
}

function FlowPanel({
  index,
  activeStep,
  label,
  icon: Icon,
  emphasized = false,
  last = false,
  children,
}: {
  index: number;
  activeStep: number;
  label: string;
  icon: typeof UserPlus;
  emphasized?: boolean;
  last?: boolean;
  children: ReactNode;
}) {
  const active = index === activeStep;

  return (
    <motion.section
      animate={{ backgroundColor: active ? '#fbfdf9' : emphasized ? '#fffefa' : '#ffffff' }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`${last ? '' : 'border-b lg:border-r lg:border-b-0'} border-[rgba(24,24,27,0.08)]`}
      aria-label={`Step ${index + 1}: ${label}`}
    >
      <div className="flex items-center justify-between border-b border-[rgba(24,24,27,0.08)] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold ${active ? 'bg-[#154212] text-white' : 'bg-[#eef8ea] text-[#154212]'}`}>
            {index + 1}
          </span>
          <div>
            <p className="text-xs font-semibold text-[#1a1c1c]">{label}</p>
            <p className="mt-0.5 text-xs text-[#72796e]">{STEPS[index].detail}</p>
          </div>
        </div>
        <Icon aria-hidden="true" className="text-[#154212]" size={16} strokeWidth={1.8} />
      </div>
      <div className="relative">
        {children}
        {active && index < STEPS.length - 1 && (
          <motion.span
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute -right-3 top-1/2 z-20 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#154212] text-white shadow-sm lg:flex"
            aria-hidden="true"
          >
            <ArrowRight size={13} />
          </motion.span>
        )}
      </div>
    </motion.section>
  );
}
