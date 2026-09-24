import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Doorear — Logistics OS for courier & 3PL networks'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(145deg, #0B1F33 0%, #0F766E 55%, #0B1F33 100%)',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: '#F7F8FA',
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#C45C26',
            }}
          />
          Smart Access. Smooth Delivery.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}>
            Doorear
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: 'rgba(247,248,250,0.9)',
              maxWidth: 820,
              lineHeight: 1.25,
            }}>
            Logistics OS for courier &amp; 3PL networks in India
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'rgba(247,248,250,0.75)',
            fontSize: 24,
          }}>
          <span>Bookings · Hubs · MIS · GST accounts</span>
          <span>doorear.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
