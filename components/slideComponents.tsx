import React from "react";
import './slides.css';

const getCurrentSlideNumber = () => {
  if (typeof window !== 'undefined') {
    return Number(window.location.pathname.slice(1));
  }

  return 0;
}

const TOTAL_SLIDE_COUNT = 23;

function SlideContainer({ children, variant, isFullWidth = false }: { children: React.ReactNode; variant?: 'heading'; isFullWidth?: boolean }) {
  const currentSlideNumber = getCurrentSlideNumber();

  return (
    <div className={`slide-container variant-${variant}`}>
      <progress value={currentSlideNumber} max={TOTAL_SLIDE_COUNT} />
      <div className={`slide-center-container ${isFullWidth ? 'is-fullwidth' : ''}`}>
        {children}
      </div>
    </div>
  );
}

function Heading({ children, size }: { children: React.ReactNode; size?: 'medium' }) {
  return <h1 className={`slide-heading size-${size}`}>{children}</h1>;
}

function SubHeading({children}) {
  return <p className="slide-subheading">{children}</p>;
}

function Profile() {
  return (
    <div className="flex center">
      <div className="profile-image-container"><img src="https://res.cloudinary.com/saurabhdaware/image/upload/v1685863737/profile-picture_nnng5k.jpg" height="80px" width="80px" alt="Profile Picture of Saurabh Daware" /></div>
      <div className="flex-1 profile-name">
        <SubHeading>
          Saurabh Daware
        </SubHeading>
        <p className="title">Senior Frontend Engineer @Razorpay</p>
      </div>
    </div>
  )
}

function ThankYou() {
  return (
    <div>
      <Heading>Thank You!</Heading>
      <div className="flex center">
        <div className="profile-image-container"><img src="https://res.cloudinary.com/saurabhdaware/image/upload/v1685863737/profile-picture_nnng5k.jpg" height="100px" width="100px" alt="Profile Picture of Saurabh Daware" /></div>
        <div className="flex-1 thankyou-name">
          <SubHeading>
            <b>Saurabh Daware</b>
          </SubHeading>
          <div>
            <p style={{ marginBottom: '4px' }}>twitter.com/saurabhdawaree</p>
            <p>github.com/saurabhdaware</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const TitleSlotContainer = ({ children }) => <div style={{ width: '1000px', textAlign: 'center' }}>{children}</div>

export {
  SlideContainer,
  Heading,
  SubHeading,
  Profile,
  ThankYou,
  TitleSlotContainer
}