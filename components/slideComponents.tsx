import React from "react";
import './slides.css';

function SlideContainer({ children, variant, slideNum }: { children: React.ReactNode; variant?: 'heading'; slideNum: number }) {
  return (
    <div className={`slide-container variant-${variant}`}>
      <progress value={slideNum} max="20" />
      <div className="slide-center-container">
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

export {
  SlideContainer,
  Heading,
  SubHeading,
  Profile
}