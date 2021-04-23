import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <header className="sticky top-0 flex items-center justify-between h-16 px-2 bg-gray-100 shadow-md opacity-75">
            <div className="flex items-center space-x-2">
                <a target="_blank" rel="noreferrer" href="https://astorayestas.tk">
                    <svg className="w-10 h-10 shadow-md" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f)">
                            <rect x="4" y="4" width="20" height="20" fill="#F9FAFB" />
                            <rect x="4.5" y="4.5" width="19" height="19" stroke="#E5E7EB" />
                        </g>
                        <g filter="url(#filter1_b)">
                            <path
                                d="M15.541 16.2422H12.459L11.873 18H10.0039L13.1797 9.46875H14.8086L18.002 18H16.1328L15.541 16.2422ZM12.9336 14.8184H15.0664L13.9941 11.625L12.9336 14.8184Z"
                                fill="#4B5563" />
                            <path
                                d="M15.541 16.2422H12.459L11.873 18H10.0039L13.1797 9.46875H14.8086L18.002 18H16.1328L15.541 16.2422ZM12.9336 14.8184H15.0664L13.9941 11.625L12.9336 14.8184Z"
                                fill="url(#paint0_linear)" />
                        </g>
                        <defs>
                            <filter id="filter0_f" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
                            </filter>
                            <filter id="filter1_b" x="6.00391" y="5.46875" width="15.998" height="16.5312"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear" x1="14" y1="9" x2="14" y2="18" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#E5E7EB" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </a>
            </div>
        </header>)
}

export default Header