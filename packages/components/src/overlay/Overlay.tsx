import React from 'react';
import './Overlay.scss';

interface OverlayProps {
  onClick: () => void;
}

function Overlay({ onClick, ...props }: OverlayProps) {
  return <div className="overlay" onClick={onClick} />;
}

export default Overlay;
