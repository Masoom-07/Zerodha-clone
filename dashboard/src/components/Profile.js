import React, { useState } from 'react';


export default function Profile() {
  const [open, setOpen] = useState(false);

const params = new URLSearchParams(window.location.search);
const nameFromUrl = params.get("name");

const user = {
  name: nameFromUrl || "USERID"
};
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    
    window.location.href = 'http://localhost:3000/login';
  };

  return (
    <div style={{ position: 'relative' }}>
      
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer',
          padding: '6px 10px',
          borderRadius: '10px'
        }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#f1d4f7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#b15ac7',
            fontWeight: '600'
          }}
        >
          {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
        </div>

        <span style={{ fontSize: '15px', color: '#222' }}>
          {user?.name || 'USERID'}
        </span>

        <span style={{ fontSize: '12px', color: '#666' }}>▼</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '58px',
            right: 0,
            width: '230px',
            background: '#fff',
            border: '1px solid #eee',
            borderRadius: '14px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
            overflow: 'hidden',
            zIndex: 1000
          }}
        >
          <div style={{ padding: '16px', borderBottom: '1px solid #f2f2f2' }}>
            <div style={{ fontWeight: '600', color: '#222' }}>
              {user?.name}
            </div>
            <div style={{ fontSize: '13px', color: '#666' }}>
              {user?.email || 'user@example.com'}
            </div>
          </div>

          <Item label="👤 My Profile" />
          <Item label="💼 Account" />
          <Item label="💳 Funds & Banking" />
          <Item label="⚙️ Settings" />
          <Item label="🛟 Support" />

          <div style={{ borderTop: '1px solid #f2f2f2' }} />

          <div
            onClick={handleLogout}
            style={{
              padding: '14px 16px',
              cursor: 'pointer',
              color: '#d9534f',
              fontWeight: '600'
            }}
          >
            🚪 Logout
          </div>
        </div>
      )}
    </div>
  );
}

function Item({ label }) {
  return (
    <div
      style={{
        padding: '14px 16px',
        cursor: 'pointer',
        color: '#333'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = '#f8f9fb')}
      onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
    >
      {label}
    </div>
  );
}