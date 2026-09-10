import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#faf9f8',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              backgroundColor: '#154212',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 24,
            }}
          >
            <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
              <text x="18" y="68" fontSize="52" fontWeight="bold" fill="#faf9f8" fontFamily="serif">
                PG
              </text>
              <line x1="15" y1="78" x2="85" y2="78" stroke="#faf9f8" strokeWidth="2" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: '#154212',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              PGKhata
            </span>
            <span
              style={{
                fontSize: 28,
                color: '#4a6b4a',
                marginTop: 8,
              }}
            >
              Rent Collection Without the Chaos
            </span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 32,
            marginTop: 20,
          }}
        >
          {['Manage Tenants', 'Generate Bills', 'Send via WhatsApp', 'Track Payments'].map(
            (step) => (
              <div
                key={step}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 22,
                  color: '#1a1c1c',
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: '#154212',
                  }}
                />
                {step}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
