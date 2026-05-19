import { useState } from 'react'

/* ── Design tokens from Figma (file: cXocOMh9TE9ILgfaayfihI) ── */
const T = {
  bgScreen:    '#F4F5F7',   /* Screen + Content bg                  */
  white:       '#FFFFFF',   /* Nav bars, card, inputs               */
  brandDark:   '#1A2B4A',   /* Logo, primary button, active nav tab */
  textHeading: '#1A1A2E',   /* Page heading, input labels           */
  textMuted:   '#6B7280',   /* Placeholder, secondary text, inactive nav */
  border:      '#E0E2E6',   /* Input borders, bottom nav top border */
  linkBlue:    '#2B7DE9',   /* "Sign in" link                       */
}

/* ── SVG icons for the bottom navigation bar ── */
function IconHome({ active }) {
  const color = active ? T.brandDark : T.textMuted
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 9.5L11 3L19 9.5V19C19 19.5523 18.5523 20 18 20H14V14H8V20H4C3.44772 20 3 19.5523 3 19V9.5Z"
        fill={active ? T.brandDark : 'none'}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconSearch() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="6.5" stroke={T.textMuted} strokeWidth="1.5" />
      <line x1="15.2929" y1="15" x2="19" y2="18.7071" stroke={T.textMuted} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconActivity() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline
        points="3,12 7,7 11,14 15,9 19,12"
        stroke={T.textMuted}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function IconProfile() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="8" r="3.5" stroke={T.textMuted} strokeWidth="1.5" />
      <path
        d="M4 19C4 15.134 7.13401 12 11 12C14.866 12 18 15.134 18 19"
        stroke={T.textMuted}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ── Form field ── */
function FormField({ label, type = 'text', placeholder }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      <label style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        fontWeight: 500,
        lineHeight: '1',
        color: T.textHeading,
      }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: '100%',
          height: '40px',
          backgroundColor: T.white,
          border: `1px solid ${T.border}`,
          borderRadius: '8px',
          paddingLeft: '14px',
          paddingRight: '14px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: 400,
          color: T.textHeading,
          outline: 'none',
        }}
        onFocus={e => { e.target.style.borderColor = T.brandDark }}
        onBlur={e => { e.target.style.borderColor = T.border }}
      />
    </div>
  )
}

/* ── Bottom nav item ── */
function NavItem({ icon, label, active }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
    }}>
      {icon}
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '11px',
        fontWeight: active ? 600 : 400,
        color: active ? T.brandDark : T.textMuted,
        lineHeight: '1',
      }}>
        {label}
      </span>
    </div>
  )
}

/* ── Main screen ── */
export default function App() {
  const [activeNav] = useState('Home')

  return (
    /* Outer centring wrapper (grey desktop background) */
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>

      {/* Mobile frame: 375 × 812 */}
      <div style={{
        width: '375px',
        height: '812px',
        backgroundColor: T.bgScreen,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
        borderRadius: '40px',
        position: 'relative',
      }}>

        {/* ── Top Nav: 375 × 56px ── */}
        <div style={{
          width: '100%',
          height: '56px',
          backgroundColor: T.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            color: T.brandDark,
            lineHeight: '22px',
          }}>
            Taskly
          </span>
        </div>

        {/* ── Content area: flex:1, padding 24/20 ── */}
        <div style={{
          flex: 1,
          backgroundColor: T.bgScreen,
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          overflowY: 'auto',
        }}>

          {/* Page heading */}
          <h1 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '29px',
            letterSpacing: '0',
            color: T.textHeading,
            margin: 0,
          }}>
            Create your account
          </h1>

          {/* Form Card */}
          <div style={{
            backgroundColor: T.white,
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>

            {/* Full name */}
            <FormField label="Full name" type="text" placeholder="Jane Cooper" />

            {/* Email */}
            <FormField label="Email" type="email" placeholder="jane@example.com" />

            {/* Password */}
            <FormField label="Password" type="password" placeholder="••••••••" />

            {/* Spacer (8px via the 16px gap already; Figma has an extra 8px empty frame) */}
            <div style={{ height: '0px' }} />

            {/* Primary button */}
            <button
              style={{
                width: '100%',
                height: '40px',
                backgroundColor: T.brandDark,
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: T.white,
              }}
              onMouseDown={e => { e.currentTarget.style.opacity = '0.88' }}
              onMouseUp={e => { e.currentTarget.style.opacity = '1' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              Get started
            </button>

            {/* Sign-in link row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              height: '16px',
            }}>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 400,
                color: T.textMuted,
              }}>
                Already have an account?
              </span>
              <a
                href="#"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: T.linkBlue,
                  textDecoration: 'none',
                }}
              >
                Sign in
              </a>
            </div>

          </div>{/* /Form Card */}
        </div>{/* /Content */}

        {/* ── Bottom Nav Bar: 375 × 63px ── */}
        <div style={{
          width: '100%',
          height: '63px',
          backgroundColor: T.white,
          borderTop: `1px solid ${T.border}`,
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingTop: '12px',
          paddingBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <NavItem icon={<IconHome active />}    label="Home"     active />
          <NavItem icon={<IconSearch />}         label="Search"            />
          <NavItem icon={<IconActivity />}       label="Activity"          />
          <NavItem icon={<IconProfile />}        label="Profile"           />
        </div>

      </div>{/* /Mobile frame */}
    </div>
  )
}
