import React, { useMemo, useContext } from 'react'
import ProfileContext from '../../contexts/ProfileContext'
import ranking from '../../utils/ranking.json'

const Result = ({ answers, time }) => {
    const { profile } = useContext(ProfileContext)
    // const compare = (a, b) => a - b;
    // const rank = useMemo(() => ranking.sort(compare))
    const accumulator = (acc, num) => (acc + num * 5);
    const total = useMemo(() => answers.reduce(accumulator, 0), [answers])
    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen'>
            <div className='flex items-center p-4 rounded-md shadow-md bg-gradient-to-br from-purple-100 to-purple-300'>
                <p className='text-purple-500 md:text-2xl'>Congrats {profile.user} your score is {total} with a time of {time} s</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path d="M40.0001 70.4762C56.8316 70.4762 70.4763 56.8315 70.4763 40C70.4763 23.1685 56.8316 9.5238 40.0001 9.5238C23.1686 9.5238 9.52393 23.1685 9.52393 40C9.52393 56.8315 23.1686 70.4762 40.0001 70.4762Z" fill="url(#paint0_radial)" />
                    <path opacity="0.5" d="M40.0001 70.4762C56.8316 70.4762 70.4763 56.8315 70.4763 40C70.4763 23.1685 56.8316 9.5238 40.0001 9.5238C23.1686 9.5238 9.52393 23.1685 9.52393 40C9.52393 56.8315 23.1686 70.4762 40.0001 70.4762Z" fill="url(#paint1_radial)" />
                    <path d="M33.2953 24.2093C33.2953 22.9903 31.981 22.2284 29.6953 22.2284C27.7715 22.2284 23.5239 23.2951 20.6096 27.0474C20.0763 27.7332 20.8953 28.1141 21.4286 27.676C23.2191 26.1522 28.0382 24.1903 31.7905 24.6093C33.2953 24.7617 33.2953 24.2093 33.2953 24.2093Z" fill="url(#paint2_linear)" />
                    <path d="M46.7048 24.2093C46.7048 22.9903 48.0191 22.2284 50.3048 22.2284C52.2286 22.2284 56.4763 23.2951 59.3906 27.0474C59.9239 27.7332 59.1048 28.1141 58.5715 27.676C56.781 26.1522 51.962 24.1903 48.2096 24.6093C46.7048 24.7617 46.7048 24.2093 46.7048 24.2093Z" fill="url(#paint3_linear)" />
                    <path opacity="0.5" d="M15.2954 46.0382C15.2954 46.0382 12.6478 43.0477 11.7907 34.7048C11.7335 34.0763 10.8954 33.5239 10.2859 33.2191C10.6478 31.6382 11.124 30.1144 11.7145 28.6287C12.3621 28.5144 13.2764 28.362 14.5145 28.2287C19.0478 27.7144 26.5145 27.6953 29.9811 28.7429C34.8002 30.1906 36.5335 32.2096 39.4668 32.2096V33.7906C36.0383 33.7906 38.8954 39.7144 34.1716 44.9715C30.4002 49.181 17.6764 49.2572 15.2954 46.0382Z" fill="url(#paint4_radial)" />
                    <path opacity="0.5" d="M64.7049 46.0382C64.7049 46.0382 67.3525 43.0477 68.2097 34.7048C68.2668 34.0763 69.1049 33.5239 69.7144 33.2191C69.3525 31.6382 68.8763 30.1144 68.2858 28.6287C67.6382 28.5144 66.7239 28.362 65.4858 28.2287C60.9525 27.7144 53.4858 27.6953 50.0192 28.7429C45.2001 30.1906 43.4668 32.2096 40.5334 32.2096V33.7906C43.962 33.7906 41.1049 39.7144 45.8287 44.9715C49.6001 49.181 62.3239 49.2572 64.7049 46.0382Z" fill="url(#paint5_radial)" />
                    <path d="M53.0288 32.8191C53.0288 32.8191 58.3431 33.3524 59.8288 37.3715C59.924 37.6191 59.9812 37.8857 59.9621 38.1524C59.9621 38.6857 59.4669 39.2572 58.5145 38.7429C52.6859 35.5238 49.3145 37.0476 46.8002 38.0953C45.8288 38.5143 44.9526 37.5238 45.2574 36.6476C45.3335 36.4 45.4097 36.1334 45.5431 35.9048C47.7145 32.2476 53.0288 32.8191 53.0288 32.8191Z" fill="url(#paint6_radial)" />
                    <path d="M52.9145 34.0762C52.9145 34.0762 57.2383 34.5143 59.943 37.8286C59.924 37.6762 59.8859 37.5238 59.8287 37.3715C58.343 33.3524 53.0287 32.8191 53.0287 32.8191C53.0287 32.8191 47.7144 32.2476 45.543 35.9048C45.4668 36.0381 45.3906 36.1905 45.3525 36.3429C48.5716 33.6191 52.9145 34.0762 52.9145 34.0762Z" fill="url(#paint7_linear)" />
                    <path d="M26.9716 32.8191C26.9716 32.8191 21.6574 33.3524 20.1717 37.3715C20.0764 37.6191 20.0193 37.8857 20.0383 38.1524C20.0383 38.6857 20.5336 39.2572 21.4859 38.7429C27.3145 35.5238 30.6859 37.0476 33.2002 38.0953C34.1716 38.5143 35.0478 37.5238 34.7431 36.6476C34.6669 36.4 34.5907 36.1334 34.4574 35.9048C32.2859 32.2476 26.9716 32.8191 26.9716 32.8191Z" fill="url(#paint8_radial)" />
                    <path d="M27.0857 34.0762C27.0857 34.0762 22.7619 34.5143 20.0571 37.8286C20.0762 37.6762 20.1143 37.5238 20.1714 37.3715C21.6571 33.3524 26.9714 32.8191 26.9714 32.8191C26.9714 32.8191 32.2857 32.2476 34.4571 35.9048C34.5333 36.0381 34.6095 36.1905 34.6476 36.3429C31.4286 33.6191 27.0857 34.0762 27.0857 34.0762Z" fill="url(#paint9_linear)" />
                    <path d="M53.4669 50.4381C53.2193 50.4 52.9526 50.4762 52.7812 50.6476C49.505 53.7143 44.4574 55.3714 40.6479 55.3714H40.0002H39.3526C35.5431 55.3714 30.4955 53.7143 27.2193 50.6476C27.0288 50.4762 26.7812 50.4 26.5336 50.4381C26.2669 50.4952 26.1336 50.7809 26.2669 51.0095C29.0669 55.8476 34.2288 58.8381 39.8479 58.8381H40.0193H40.1907C45.8098 58.8381 50.9717 55.8476 53.7717 51.0095C53.8669 50.7809 53.7336 50.4952 53.4669 50.4381Z" fill="#643800" />
                    <path d="M53.4669 50.4381C53.2193 50.4 52.9526 50.4762 52.7812 50.6476C49.505 53.7143 44.4574 55.3714 40.6479 55.3714H40.0002H39.3526C35.5431 55.3714 30.4955 53.7143 27.2193 50.6476C27.0288 50.4762 26.7812 50.4 26.5336 50.4381C26.2669 50.4952 26.1336 50.7809 26.2669 51.0095C26.286 51.0667 26.324 51.1047 26.3621 51.1428C26.6288 50.9905 26.9145 50.8381 27.2002 51.1619C30.305 54.6476 34.9145 56.7428 39.8479 56.7428H40.0193H40.1907C45.1622 56.7428 49.7907 54.6285 52.8955 51.0857C53.1812 50.7619 53.4479 50.9143 53.6955 51.0857C53.7145 51.0476 53.7336 51.0286 53.7526 50.9905C53.8669 50.7809 53.7336 50.4952 53.4669 50.4381Z" fill="url(#paint10_linear)" />
                    <path d="M25.2762 28.2096C21.3905 27.9238 16.8381 27.5619 15.9429 30.5905C15.0477 33.6191 15.6381 38.1905 17.7143 41.6C19.7905 45.0096 28.0191 44.8191 30.9905 43.0096C34.9524 40.6096 35.2953 36.5524 35.4096 34.0953C35.5429 30.8381 31.2572 28.6286 25.2762 28.2096Z" fill="url(#paint11_linear)" />
                    <path d="M54.6476 28.2096C58.5333 27.9238 63.0857 27.5619 63.9809 30.5905C64.8762 33.6191 64.2857 38.1905 62.2095 41.6C60.1333 45.0096 51.9047 44.8191 48.9333 43.0096C44.9714 40.6096 44.6285 36.5524 44.5143 34.0953C44.3809 30.8381 48.6666 28.6286 54.6476 28.2096Z" fill="url(#paint12_linear)" />
                    <path d="M69.2191 27.1239C69.2191 27.1239 68.2477 26.7429 64.9144 26.362C60.381 25.8477 52.9144 25.8286 49.4477 26.8763C44.6287 28.3239 42.8953 30.3429 39.962 30.3429C37.0286 30.3429 35.2953 28.3239 30.4572 26.8572C27.0096 25.8096 19.5429 25.8286 14.9906 26.3429C11.6763 26.7239 10.6858 27.1048 10.6858 27.1048C10.6858 27.4286 10.6858 27.8096 10.7048 28.2286C10.7048 28.2286 12.762 28.5715 12.781 28.762C12.781 28.8572 10.762 29.0477 10.762 29.0477C10.8001 29.3905 10.8572 29.7524 10.9334 30.1334L11.7334 30.5143C12.362 30.8001 12.781 31.4096 12.8382 32.0953C13.6953 40.4382 16.3429 43.8096 16.3429 43.8096C18.7239 47.0096 29.9239 48.0953 33.6953 43.8858C38.4191 38.6096 36.5144 33.8477 39.9429 33.8477C43.3715 33.8477 41.4667 38.6286 46.1906 43.8858C49.962 48.0953 61.162 47.0096 63.5429 43.8096C63.5429 43.8096 66.1906 40.4382 67.0477 32.0953C67.1239 31.4096 67.5429 30.8001 68.1525 30.5143L68.9525 30.1334C69.0286 29.7524 69.0858 29.3905 69.1239 29.0477C69.1239 29.0477 67.2382 28.8572 67.2572 28.762C67.2763 28.5715 69.2001 28.2286 69.2001 28.2286C69.2382 27.8096 69.2382 27.4286 69.2191 27.1239ZM30.9906 42.9905C28.0191 44.8001 19.8096 44.9905 17.7144 41.581C15.6382 38.1905 15.0477 33.6001 15.9429 30.5715C16.8382 27.5429 21.3906 27.9239 25.2763 28.1905C31.2572 28.6286 35.5429 30.8382 35.4096 34.0762C35.2953 36.5334 34.9525 40.5905 30.9906 42.9905ZM62.1906 41.581C60.1144 44.9715 51.8858 44.8001 48.9144 42.9905C44.9525 40.5905 44.6096 36.5334 44.4953 34.0762C44.362 30.8382 48.6477 28.6286 54.6286 28.1905C58.5144 27.9048 63.0667 27.5429 63.962 30.5715C64.8572 33.6191 64.2858 38.1905 62.1906 41.581Z" fill="url(#paint13_linear)" />
                    <path d="M25.2762 28.2096C21.3905 27.9238 16.8381 27.5619 15.9429 30.5905C15.0477 33.6191 15.6381 38.1905 17.7143 41.6C19.7905 45.0096 28.0191 44.8191 30.9905 43.0096C34.9524 40.6096 35.2953 36.5524 35.4096 34.0953C35.5429 30.8381 31.2572 28.6286 25.2762 28.2096Z" fill="url(#paint14_linear)" />
                    <path d="M30.9906 42.9908C28.0191 44.8003 19.8096 44.9908 17.7144 41.5812C15.962 38.7241 15.2763 35.0288 15.6382 32.1336C15.6382 32.1527 15.6191 32.1527 15.6191 32.1717C15.2953 35.2955 15.8668 38.9717 17.581 42.0003C19.6953 45.7336 28.0572 45.5241 31.0858 43.5431C34.1906 41.505 34.9906 38.6098 35.2382 36.0574C34.9334 38.3812 34.0001 41.1622 30.9906 42.9908Z" fill="url(#paint15_linear)" />
                    <path opacity="0.75" d="M41.8477 33.8475C41.9048 32.8571 42.1334 31.8666 42.5334 30.9714L43.162 29.5428C42.1143 30.019 41.1239 30.3428 39.962 30.3428C38.8001 30.3428 37.8096 30.019 36.762 29.5428L37.3905 30.9714C37.7905 31.8856 38.0191 32.8571 38.0762 33.8475L38.1334 34.7618C38.5143 34.1714 39.0477 33.8285 39.962 33.8285C40.8763 33.8285 41.4096 34.1714 41.7905 34.7618L41.8477 33.8475Z" fill="url(#paint16_radial)" />
                    <path opacity="0.75" d="M15.943 30.9906C16.8383 27.9621 21.3907 28.343 25.2764 28.6097C31.0478 29.0287 35.2383 31.0859 35.4097 34.1525C35.4097 34.1335 35.4097 34.0954 35.4097 34.0763C35.543 30.8382 31.2573 28.6287 25.2764 28.1906C21.3907 27.9049 16.8383 27.543 15.943 30.5716C15.6573 31.5621 15.524 32.7049 15.543 33.924C15.5621 32.8573 15.6954 31.8668 15.943 30.9906Z" fill="black" />
                    <path d="M10.7048 28.2288C10.7239 28.4764 10.7429 28.7622 10.781 29.0479H13.8096C14.2667 29.0479 14.6286 28.686 14.6286 28.2288H10.7048Z" fill="url(#paint17_linear)" />
                    <path d="M54.6476 28.2096C58.5333 27.9238 63.0857 27.5619 63.9809 30.5905C64.8762 33.6191 64.2857 38.1905 62.2095 41.6C60.1333 45.0096 51.9047 44.8191 48.9333 43.0096C44.9714 40.6096 44.6285 36.5524 44.5143 34.0953C44.3809 30.8381 48.6666 28.6286 54.6476 28.2096Z" fill="url(#paint18_linear)" />
                    <path d="M48.9144 42.9908C51.8858 44.8003 60.0953 44.9908 62.1906 41.5812C63.9429 38.7241 64.6286 35.0288 64.2667 32.1336C64.2667 32.1527 64.2858 32.1527 64.2858 32.1717C64.6096 35.2955 64.0382 38.9717 62.3239 42.0003C60.2096 45.7336 51.8477 45.5241 48.8191 43.5431C45.7144 41.505 44.9144 38.6098 44.6667 36.0574C44.9906 38.3812 45.9048 41.1622 48.9144 42.9908Z" fill="url(#paint19_linear)" />
                    <path opacity="0.75" d="M63.9619 30.9906C63.0666 27.9621 58.5143 28.343 54.6285 28.6097C48.8571 29.0287 44.6666 31.0859 44.4952 34.1525C44.4952 34.1335 44.4952 34.0954 44.4952 34.0763C44.3619 30.8382 48.6476 28.6287 54.6285 28.1906C58.5143 27.9049 63.0666 27.543 63.9619 30.5716C64.2476 31.5621 64.3809 32.7049 64.3619 33.924C64.3619 32.8573 64.2285 31.8668 63.9619 30.9906Z" fill="black" />
                    <path d="M69.2192 28.2288C69.2002 28.4764 69.1811 28.7622 69.143 29.0479H66.1145C65.6573 29.0479 65.2954 28.686 65.2954 28.2288H69.2192Z" fill="url(#paint20_linear)" />
                    <path opacity="0.5" d="M54.6478 28.2096C58.5335 27.9238 63.0859 27.5619 63.9812 30.5905C64.8764 33.6191 64.2859 38.1905 62.2097 41.6C60.1335 45.0096 51.905 44.8191 48.9335 43.0096C44.9716 40.6096 44.6288 36.5524 44.5145 34.0953C44.3812 30.8381 48.6669 28.6286 54.6478 28.2096Z" fill="url(#paint21_radial)" />
                    <path opacity="0.5" d="M25.2954 28.8951C21.562 28.6284 17.2001 28.2665 16.343 31.1808C15.4858 34.0951 16.0573 38.4761 18.0573 41.7523C20.0573 45.0284 27.943 44.838 30.8001 43.1046C34.5906 40.7999 34.9335 36.8951 35.0287 34.5523C35.143 31.4284 31.0097 29.3142 25.2954 28.8951Z" fill="url(#paint22_radial)" />
                    <path d="M37.4667 30.9715L36.8382 29.5429C35.2382 28.8191 33.4477 27.7334 30.5334 26.8572C27.0858 25.8096 19.6191 25.8286 15.0667 26.3429C11.7524 26.7239 10.762 27.1048 10.762 27.1048C10.762 27.4286 10.762 27.8096 10.781 28.2286C17.8667 27.6191 26.4382 26.2096 36.5334 30.8572C36.8001 30.9905 37.1429 31.0286 37.4858 31.0096C37.4858 30.9905 37.4667 30.9715 37.4667 30.9715Z" fill="url(#paint23_radial)" />
                    <path d="M42.6096 30.9715L43.2382 29.5429C44.8382 28.8191 46.6287 27.7334 49.543 26.8572C52.9906 25.8096 60.4572 25.8286 65.0096 26.3429C68.3239 26.7239 69.3144 27.1048 69.3144 27.1048C69.3334 27.4286 69.3525 27.7905 69.3334 28.2096C62.2477 27.6001 53.6763 26.1905 43.581 30.8382C43.3144 30.9715 42.9715 31.0096 42.6287 30.9905C42.6096 30.9905 42.6096 30.9715 42.6096 30.9715Z" fill="url(#paint24_radial)" />
                    <defs>
                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.0039 27.649) scale(36.7656)">
                            <stop stopColor="#FFE030" />
                            <stop offset="1" stopColor="#FFB92E" />
                        </radialGradient>
                        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.0039 27.649) scale(28.9251)">
                            <stop stopColor="#FFEA5F" />
                            <stop offset="1" stopColor="#FFBC47" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint2_linear" x1="26.8688" y1="26.252" x2="26.8688" y2="23.0407" gradientUnits="userSpaceOnUse">
                            <stop offset="0.00132565" stopColor="#3C2200" />
                            <stop offset="1" stopColor="#7A4400" />
                        </linearGradient>
                        <linearGradient id="paint3_linear" x1="53.1313" y1="26.252" x2="53.1313" y2="23.0407" gradientUnits="userSpaceOnUse">
                            <stop offset="0.00132565" stopColor="#3C2200" />
                            <stop offset="1" stopColor="#7A4400" />
                        </linearGradient>
                        <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.3475 33.7982) rotate(180) scale(30.7625)">
                            <stop stopColor="#7A4400" stopOpacity="0.5" />
                            <stop offset="0.5833" stopColor="#894D00" stopOpacity="0.2069" />
                            <stop offset="0.995" stopColor="#975500" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(66.6528 33.7982) scale(30.7625)">
                            <stop stopColor="#7A4400" stopOpacity="0.5" />
                            <stop offset="0.5833" stopColor="#894D00" stopOpacity="0.2069" />
                            <stop offset="0.995" stopColor="#975500" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52.7407 35.8197) rotate(5.86799) scale(5.74415 2.77136)">
                            <stop offset="0.00132565" stopColor="#7A4400" />
                            <stop offset="1" stopColor="#643800" />
                        </radialGradient>
                        <linearGradient id="paint7_linear" x1="53.2141" y1="31.1412" x2="52.8558" y2="34.8351" gradientUnits="userSpaceOnUse">
                            <stop offset="0.00132565" stopColor="#3C2200" />
                            <stop offset="1" stopColor="#512D00" />
                        </linearGradient>
                        <radialGradient id="paint8_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.3022 35.819) rotate(174.132) scale(5.74414 2.77136)">
                            <stop offset="0.00132565" stopColor="#7A4400" />
                            <stop offset="1" stopColor="#643800" />
                        </radialGradient>
                        <linearGradient id="paint9_linear" x1="26.8086" y1="31.1434" x2="27.1669" y2="34.8373" gradientUnits="userSpaceOnUse">
                            <stop offset="0.00132565" stopColor="#3C2200" />
                            <stop offset="1" stopColor="#512D00" />
                        </linearGradient>
                        <linearGradient id="paint10_linear" x1="40.0002" y1="52.5923" x2="40.0002" y2="57.142" gradientUnits="userSpaceOnUse">
                            <stop offset="0.00132565" stopColor="#3C2200" />
                            <stop offset="1" stopColor="#512D00" />
                        </linearGradient>
                        <linearGradient id="paint11_linear" x1="25.4769" y1="61.7836" x2="25.4769" y2="33.5917" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#8800C7" />
                            <stop offset="1" stopColor="#7000A3" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint12_linear" x1="54.4411" y1="61.7836" x2="54.4411" y2="33.5917" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#8800C7" />
                            <stop offset="1" stopColor="#7000A3" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint13_linear" x1="39.959" y1="37.0063" x2="39.959" y2="15.8689" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#242424" />
                            <stop offset="1" stopColor="#8EA5A8" />
                        </linearGradient>
                        <linearGradient id="paint14_linear" x1="14.8432" y1="18.0924" x2="36.1977" y2="53.0362" gradientUnits="userSpaceOnUse">
                            <stop />
                            <stop offset="1" stopOpacity="0.5" />
                        </linearGradient>
                        <linearGradient id="paint15_linear" x1="25.3883" y1="36.4956" x2="25.3883" y2="52.6509" gradientUnits="userSpaceOnUse">
                            <stop />
                            <stop offset="1" stopColor="#8EA5A8" />
                        </linearGradient>
                        <radialGradient id="paint16_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.9231 31.5428) scale(3.59946 2.19967)">
                            <stop offset="0.0158651" stopColor="#8EA5A8" stopOpacity="0.25" />
                            <stop offset="1" stopColor="#8EA5A8" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint17_linear" x1="14.796" y1="28.6281" x2="11.0579" y2="28.6281" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#FFBF00" />
                        </linearGradient>
                        <linearGradient id="paint18_linear" x1="43.1706" y1="17.1471" x2="67.2838" y2="54.0322" gradientUnits="userSpaceOnUse">
                            <stop />
                            <stop offset="1" stopOpacity="0.5" />
                        </linearGradient>
                        <linearGradient id="paint19_linear" x1="54.5298" y1="36.4956" x2="54.5298" y2="52.6509" gradientUnits="userSpaceOnUse">
                            <stop />
                            <stop offset="1" stopColor="#8EA5A8" />
                        </linearGradient>
                        <linearGradient id="paint20_linear" x1="65.1221" y1="28.6281" x2="68.8603" y2="28.6281" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#FFBF00" />
                        </linearGradient>
                        <radialGradient id="paint21_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(54.7762 32.9444) rotate(180) scale(10.5203 3.6627)">
                            <stop stopColor="white" stopOpacity="0.24" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint22_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.7705 33.4542) scale(10.0886 3.51211)">
                            <stop stopColor="white" stopOpacity="0.24" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint23_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.9563 61.2459) scale(60.1324 35.7548)">
                            <stop offset="0.9647" stopColor="#8EA5A8" stopOpacity="0" />
                            <stop offset="1" stopColor="#8EA5A8" />
                        </radialGradient>
                        <radialGradient id="paint24_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.1241 61.246) rotate(180) scale(60.1324 35.7547)">
                            <stop offset="0.9647" stopColor="#8EA5A8" stopOpacity="0" />
                            <stop offset="1" stopColor="#8EA5A8" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div>
                <ol className='flex items-end mt-4 space-x-4'>
                    {
                        ranking.map((item, index) => (
                            <ul className={`flex flex-col items-center p-${8 - (index)} text-xl text-purple-500 rounded-sm shadow-md bg-gradient-to-br from-purple-100 to-purple-300`}>
                                <div>
                                    {item.user}
                                </div>
                                <div>
                                    {item.score}
                                </div>
                                <div>
                                    {item.time}
                                </div>
                            </ul>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default Result;
