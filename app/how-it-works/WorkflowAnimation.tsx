'use client';

import { useState, useEffect, useCallback } from 'react';

const STEPS = [
  {
    id: 'add-tenant',
    label: 'Add Tenant',
    number: '01',
    content: {
      title: 'Add Tenant',
      body: (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 p-3 bg-[#f4f3f2] rounded-xl">
            <div className="w-8 h-8 rounded-full bg-[#e9e8e7] flex items-center justify-center text-xs font-semibold text-[#42493e]">RS</div>
            <div>
              <p className="text-sm font-semibold text-[#1a1c1c]">Rahul Sharma</p>
              <p className="text-xs text-[#72796e]">Sunrise PG, Room 204, Bed B</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 bg-[#f4f3f2] rounded-xl">
              <p className="text-[9px] text-[#72796e] uppercase tracking-wider mb-1">Rent Plan</p>
              <p className="text-xs font-semibold text-[#1a1c1c]">&#8377;7,500 / mo</p>
            </div>
            <div className="p-3 bg-[#f4f3f2] rounded-xl">
              <p className="text-[9px] text-[#72796e] uppercase tracking-wider mb-1">Deposit</p>
              <p className="text-xs font-semibold text-[#1a1c1c]">&#8377;15,000</p>
            </div>
          </div>
          <div className="p-3 bg-[#f4f3f2] rounded-xl">
            <p className="text-[9px] text-[#72796e] uppercase tracking-wider mb-1">Status</p>
            <span className="badge-paid text-[10px]">Active</span>
          </div>
        </div>
      ),
    },
  },
  {
    id: 'generate-bill',
    label: 'Generate Bill',
    number: '02',
    content: {
      title: 'September 2026 Bill',
      body: (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#72796e] mb-1">Rahul Sharma &middot; Room 204, Bed B</p>
          {[
            { label: 'Rent', amount: '&#8377;7,500' },
            { label: 'Electricity (128 units)', amount: '&#8377;640' },
            { label: 'Maintenance', amount: '&#8377;300' },
          ].map((line) => (
            <div key={line.label} className="flex justify-between py-2 border-b border-[rgba(24,24,27,0.06)] text-xs">
              <span className="text-[#42493e]" dangerouslySetInnerHTML={{ __html: line.label }} />
              <span className="font-medium text-[#1a1c1c]" dangerouslySetInnerHTML={{ __html: line.amount }} />
            </div>
          ))}
          <div className="flex justify-between pt-3 text-sm font-bold text-[#1a1c1c]">
            <span>Total</span>
            <span>&#8377;8,440</span>
          </div>
          <div className="mt-2 pt-2 border-t border-[rgba(24,24,27,0.06)]">
            <span className="badge-pending text-[10px]">Pending</span>
          </div>
        </div>
      ),
    },
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp Sent',
    number: '03',
    content: {
      title: 'WhatsApp Sent',
      body: (
        <div className="bg-[#e5ddd5] rounded-2xl p-4 flex flex-col gap-2">
          <div className="bg-[#dcf8c6] rounded-xl rounded-tr-sm p-3">
            <p className="text-xs font-medium text-[#1a1c1c] mb-1">PGKhata</p>
            <p className="text-xs text-[#42493e] leading-relaxed">
              Hi Rahul, your September PG bill is ready.
            </p>
            <p className="text-xs font-bold text-[#1a1c1c] mt-2">Total: &#8377;8,440</p>
            <p className="text-[10px] text-[#72796e] mt-1 text-right">9:14 AM</p>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#154212]" />
            <span className="text-[10px] text-[#72796e]">Delivered to Rahul Sharma</span>
          </div>
        </div>
      ),
    },
  },
  {
    id: 'payment',
    label: 'Payment Status',
    number: '04',
    content: {
      title: 'Payment Status',
      body: (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between p-4 bg-[#154212] rounded-2xl">
            <div>
              <p className="text-xs text-[rgba(255,255,255,0.7)]">Rahul Sharma</p>
              <p className="text-lg font-bold text-white mt-0.5">&#8377;8,440</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.15)] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
          </div>
          <p className="text-xs text-center text-[#154212] font-semibold">Paid successfully</p>
          <div className="p-3 bg-[#f4f3f2] rounded-xl text-xs text-[#42493e]">
            <div className="flex justify-between mb-1">
              <span>Room 204, Bed B</span>
              <span>Sep 2026</span>
            </div>
            <div className="flex justify-between text-[#72796e]">
              <span>Via UPI</span>
              <span>Sep 14, 9:18 AM</span>
            </div>
          </div>
        </div>
      ),
    },
  },
];

const STEP_DURATION = 4000;

export function WorkflowAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [visible, setVisible] = useState(true);

  const goToStep = useCallback((idx: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrentStep(idx);
      setVisible(true);
    }, 280);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setTimeout(() => {
      const next = (currentStep + 1) % STEPS.length;
      goToStep(next);
    }, STEP_DURATION);
    return () => clearTimeout(timer);
  }, [currentStep, isPlaying, goToStep]);

  const step = STEPS[currentStep];

  return (
    <div className="browser-frame max-w-3xl mx-auto">
      <div className="browser-toolbar justify-between">
        <div className="flex gap-1.5">
          <div className="browser-dot" />
          <div className="browser-dot" />
          <div className="browser-dot" />
        </div>
        <button
          onClick={() => setIsPlaying((p) => !p)}
          className="text-[10px] text-[#72796e] hover:text-[#1a1c1c] transition-colors px-2 py-0.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27]"
          aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      <div className="bg-[#f4f3f2] p-3 sm:p-6">
        {/* Step tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 sm:mb-6">
          {STEPS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => { setIsPlaying(false); goToStep(idx); }}
              className={`
                flex flex-col items-center justify-center gap-1 min-h-12 p-2 sm:p-3 rounded-xl text-center transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27]
                ${currentStep === idx
                  ? 'bg-[#154212] text-white'
                  : 'bg-white border border-[rgba(24,24,27,0.08)] text-[#42493e] hover:bg-[#faf9f8]'}
              `}
              aria-pressed={currentStep === idx}
            >
              <span className="text-[9px] font-semibold opacity-60">{s.number}</span>
              <span className="text-[10px] font-semibold leading-tight">{s.label}</span>
            </button>
          ))}
        </div>

        {/* Step content */}
        <div
          className="bg-white rounded-2xl p-4 sm:p-5 border border-[rgba(24,24,27,0.08)] min-h-[200px] transition-opacity duration-280"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <p className="text-xs font-semibold text-[#42493e] uppercase tracking-wider mb-4">{step.content.title}</p>
          {step.content.body}
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-0.5 bg-[#e9e8e7] rounded-full overflow-hidden">
          <div
            className="h-full w-full origin-left bg-[#154212] rounded-full"
            style={{
              transform: `scaleX(${(currentStep + 1) / STEPS.length})`,
              transition: isPlaying ? `transform ${STEP_DURATION}ms linear` : 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
}
