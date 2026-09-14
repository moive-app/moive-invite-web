import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

function InvitePage() {
  return (
    <main className="invite-page">
      <div className="invite-container">
        <img
          className="moive-logo"
          src="/images/moive-logo.svg"
          alt="MOIVE"
        />

        <section className="invite-copy">
          <h1>새로운 모임에 초대되었어요!</h1>
          <p>초대받은 모임을 지금 확인해보세요</p>
        </section>

        <img
          className="invite-character"
          src="/images/invite-character.png"
          alt=""
        />

        <section className="invite-actions">
          <button className="open-app-button" type="button">
            MOIVE 앱 열기
          </button>

          <button className="google-play-button" type="button">
            <img
              src="/images/googleplay-icon.svg"
              alt="Google Play"
              className='google-play-icon'
            />
            <span>Google Play에서 설치</span>
          </button>
        </section>

        <p className="footer-text">
          무료 다운로드 · Android 앱
        </p>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/invite/:inviteCode" element={<InvitePage />} />
        <Route path="*" element={<Navigate to="/invite/test" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App