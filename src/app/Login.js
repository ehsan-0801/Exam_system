"use client";
import React, { useState } from 'react';;
import Image from 'next/image';

const Login = () => {
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleEmailFocus = () => {
        setEmailFocused(true);
    };

    const handleEmailBlur = () => {
        if (!emailValue) {
            setEmailFocused(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    };

    const handlePasswordFocus = () => {
        setPasswordFocused(true);
    };

    const handlePasswordBlur = () => {
        if (!passwordValue) {
            setPasswordFocused(false);
        }
    };

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };
    return (
        <div className="min-h-screen flex">
            <div className="flex-1 flex items-center justify-center bg-white">
                <div className="w-[435px] p-8 bg-white shadow-md rounded-lg">
                    <Image src="/image 5.png" alt="Illustration" width={ 100 } height={ 100 } className='mb-32 mx-auto' />
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 text-left">Login</h2>
                        <h5 className='text-left mt-4'>Please login to continue to your account.</h5>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div>
                            <div className='relative'>
                                <label
                                    htmlFor="email"
                                    className={ `absolute transition-all duration-300 ${emailFocused || emailValue ? 'text-md text-black bg-white -top-2 left-2 z-20' : 'top-3 left-3 text-gray-700'}` }
                                >
                                    Email
                                </label>
                                <input
                                    onFocus={ handleEmailFocus }
                                    onBlur={ handleEmailBlur }
                                    onChange={ handleEmailChange }
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className={ `p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none ${emailFocused || emailValue ? 'p-3' : ''}` }
                                />
                            </div>
                            <div className='relative mt-6'>
                                <label
                                    htmlFor="password"
                                    className={ `absolute transition-all duration-300 ${passwordFocused || passwordValue ? 'text-md text-black bg-white -top-2 left-2 z-20' : 'top-3 left-3 text-gray-700'}` }
                                >
                                    Password
                                </label>
                                <input
                                    onFocus={ handlePasswordFocus }
                                    onBlur={ handlePasswordBlur }
                                    onChange={ handlePasswordChange }
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    required
                                    className={ `p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none ${passwordFocused || passwordValue ? 'p-3' : ''}` }
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label htmlFor="keepLoggedIn" className="flex items-center">
                                <input
                                    id="keepLoggedIn"
                                    name="keepLoggedIn"
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-sm text-gray-600">Keep me logged in</span>
                            </label>
                            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                        </div>
                        <div>
                            <a href='/adminPanel/Dashboard' type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Sign in
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex-1 hidden md:flex items-center justify-center bg-white">
                <div>
                    <Image src="/sagc 1.png" alt="Illustration" width={ 100 } height={ 100 } className='mb-8 mx-auto' />

                    <div className="flex items-center justify-center">
                        <svg width="300" height="300" viewBox="0 0 434 468" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_231_2596)">
                                <g opacity="0.3">
                                    <path d="M393.161 250.229C393.108 168.56 405.414 146.939 361.101 77.9432C316.789 8.94754 208.014 -6.33143 125.789 44.8441C43.563 96.0195 21.4121 161.833 21.4121 161.833C21.4121 161.833 -8.42194 238.698 33.5042 316.118C71.8455 386.929 147.351 427.171 212.851 460.281H380.309C390.208 451.995 398.865 441.884 405.906 430.064C440.01 372.792 393.225 331.909 393.172 250.24L393.161 250.229Z" fill="#FBB5E8" />
                                </g>
                                <path d="M195.376 26.9064C196.821 32.6186 196.114 22.1017 198.95 9.23573C201.786 -3.63021 206.644 1.5909 206.644 1.5909" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M194.488 13.7627L203.37 10.1218" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M210.721 5.76562C210.721 5.76562 205.414 16.731 213.418 21.3863" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M218.255 2.67993C218.255 2.67993 227.019 7.53803 221.529 18.0657" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M212.252 9.4707L218.533 14.0512" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M217.174 7.46338L212.263 15.2684" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.7783 284.973C25.7783 284.973 10.872 284.748 10.8506 297.593" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M24.5479 293.055C24.2376 291.166 17.7421 288.827 16.6292 293.717C15.5056 298.607 23.5634 295.682 26.0567 293.376C26.0567 293.376 21.4339 297.86 22.8893 299.131" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.4784 300.561C25.4784 300.561 23.5201 303.017 21.3906 301.853" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M38.5018 291.956L27.3193 303.337C27.3193 303.337 32.9052 297.646 36.2011 299.451C40.2674 301.682 34.9919 307.758 30.6473 303.401" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M44.1516 295.052C44.1516 295.052 47.1051 308.612 31.8135 309.092" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M243.787 64.7141L249.17 65.6003L249.255 77.8256L261.058 56.3325L279.699 59.3862" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M263.113 65.7498L271.31 80.1852" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M273.407 67.4368L258.736 78.1246" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M170.09 86.4741C168.71 84.723 160.759 85.9722 162.375 91.5991C163.98 97.2259 170.561 89.7199 171.813 85.9722C171.813 85.9722 169.619 93.1473 171.813 93.6171" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M176.179 80.6978L174.402 87.04C174.402 87.04 175.291 83.8689 176.842 83.8689C178.758 83.8689 178.062 87.1147 175.622 86.3993" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M326.067 158.353L322.321 171.859L330.518 180.796" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M330.754 163.841L340.139 171.667" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M337.217 161.908L333.161 171.848" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M343.809 170.567C343.809 170.567 343.895 173.386 342.675 173.749" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M344.996 160.723L350.646 164.919" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M352.755 157.274L347.169 177.347" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M353.022 150.302L362.097 160.552L358.234 171.763" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M103.124 414.796L116.243 375.803L132.166 393.538L103.124 414.796Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M128.271 396.388L124.911 392.555L128.485 389.459" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.513 195.723C32.3327 192.904 35.5711 185.103 32.7463 178.299C29.9216 171.494 22.1032 168.263 15.2836 171.081C8.46395 173.9 5.22549 181.701 8.05027 188.505C10.8751 195.31 18.6934 198.541 25.513 195.723Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M35.2269 186.519C43.4181 186.519 50.0584 179.893 50.0584 171.72C50.0584 163.547 43.4181 156.922 35.2269 156.922C27.0358 156.922 20.3955 163.547 20.3955 171.72C20.3955 179.893 27.0358 186.519 35.2269 186.519Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.0282 170.322L21.2197 176.589" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.5858 171.101L23.0283 180.134" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28.2602 172.617L25.585 182.835" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M31.2466 175.617L29.3418 185.312" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M32.9368 178.778L31.2461 185.985" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.61898 166.318C6.45258 165.955 3.25302 168.987 5.73562 171.026C8.21823 173.066 8.84958 167.631 8.23963 165.549C8.23963 165.549 9.49164 169.468 10.6259 168.998" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M24.8682 149.192L29.1164 156.965C29.1164 156.965 26.9869 153.078 28.4851 151.615C30.3363 149.822 32.7226 153.601 29.6943 155.203" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M103.081 148.263L109.127 153.975" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M109.127 146.779L104.055 154.317" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M115.066 148.946L121.112 146.704" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M124.012 140.404L127.693 143.65" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M130.518 136.507L125.853 152.448" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M394.777 133.293L394.531 121.1H403.766C403.766 121.1 398.651 123.908 400.995 130.475C403.338 137.041 407.148 133.283 407.148 133.283" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M379.132 341.294L389.64 334.077L403.562 335.048L404.429 352.655L394.209 359.937L381.614 359.018L379.132 341.294Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M381.614 359.018L391.78 351.715L404.429 352.655" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M391.78 351.715L389.64 334.077" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M379.132 341.294L393.022 342.896L403.562 335.048" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M393.021 342.896L394.209 359.937" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M381.048 209.133L380.599 232.601L401.209 223.259L381.048 209.133Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M381.048 209.133L390.861 227.807" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M389.288 224.807L391.685 223.665L393.279 226.846" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M201.455 206.912L209.962 216.02" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M210.037 205.684L202.878 215.464" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M213.515 200.911C213.515 200.911 215.495 200.143 215.912 202.193C216.33 204.243 212.959 206.912 212.959 206.912H217.764" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M68.8281 70.4478C69.7056 59.5465 76.1368 50.4068 85.147 45.6128" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M92.4984 103.002C84.5262 101.102 77.8382 96.1688 73.6113 89.5811" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M130.637 75.3699C129.278 92.3999 114.329 105.106 97.2607 103.75" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M102.204 42.0786C117.003 43.2531 128.539 54.6136 130.454 68.7074" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M113.109 96.7242C108.539 99.2867 103.178 100.568 97.5601 100.12C82.504 98.9237 71.268 85.7695 72.4665 70.7361" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M74.2109 63.0913C78.4485 52.1045 89.556 44.7266 101.916 45.7089C116.972 46.9047 128.208 60.059 127.009 75.0924C126.517 81.2744 123.992 86.8052 120.15 91.0974" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M97.0469 53.2683L99.7328 72.9142L114.875 68.2163" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M335.666 111.095C326.741 111.181 318.352 105.661 315.216 96.7881C312.263 88.4172 314.831 79.4484 321.016 73.8323" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M355.783 96.5852C353.729 102.575 349.042 107.604 342.6 109.878" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M328.336 69.4761C339.518 65.5469 351.771 71.4087 355.709 82.5663" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M346.067 74.0247C349.32 76.2135 351.931 79.4273 353.333 83.4099C356.811 93.2542 351.621 104.038 341.765 107.508C334.371 110.103 326.442 107.85 321.466 102.404" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M317.603 95.9555C314.125 86.1112 319.315 75.3273 329.17 71.8572C332.873 70.5546 336.704 70.4692 340.235 71.3981" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M328.239 78.0071L335.462 89.6772L328.871 98.2189" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M183.787 408.838C183.787 402.923 186.783 397.702 191.353 394.616" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M213.482 420.668C210.346 423.957 205.916 426.007 201.004 426.007C193.439 426.007 187.008 421.138 184.707 414.369" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M201.005 391.659C210.507 391.659 218.223 399.346 218.223 408.838" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M201.005 423.989C192.615 423.989 185.82 417.209 185.82 408.838" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M189.181 399.335C191.963 395.897 196.233 393.687 201.005 393.687C209.395 393.687 216.19 400.467 216.19 408.838C216.19 414.529 213.044 419.494 208.389 422.078" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M198.651 419.142L201.005 408.838L197.709 400.425" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M0.535156 460.644H433.461" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M220.192 235.495L213.14 369.461L123.809 364.784L124.547 350.583L130.86 230.807L187.115 233.754L220.192 235.495Z" fill="white" />
                                <mask id="mask0_231_2596" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="123" y="230" width="98" height="140">
                                    <path d="M220.192 235.495L213.14 369.461L123.809 364.784L124.547 350.583L130.86 230.807L187.115 233.754L220.192 235.495Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_231_2596)">
                                    <path opacity="0.2" d="M192.316 313.982L172.187 315.637L178.051 340.931L124.547 350.583L130.86 230.807L187.115 233.754L192.316 313.982Z" fill="black" />
                                </g>
                                <path d="M220.192 235.495L213.14 369.461L123.809 364.784L124.547 350.583L130.86 230.807L187.115 233.754L220.192 235.495Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M137.163 239.968L160.405 241.196" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M136.928 244.431L152.733 245.254" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M142.043 255.237L208.913 258.739" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M141.808 259.689L208.678 263.191" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M141.529 264.889L198.565 267.878" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M147.001 269.916L141.562 269.631L141.276 275.058L146.715 275.343L147.001 269.916Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M156.847 270.432L151.408 270.146L151.122 275.573L156.561 275.859L156.847 270.432Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M166.705 270.958L161.266 270.673L160.98 276.1L166.419 276.385L166.705 270.958Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M176.562 271.474L171.123 271.189L170.837 276.616L176.276 276.901L176.562 271.474Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M138.48 255.044C138.437 255.792 137.795 256.368 137.046 256.336C136.297 256.294 135.719 255.653 135.751 254.906C135.794 254.158 136.436 253.582 137.185 253.624C137.934 253.667 138.512 254.308 138.469 255.055L138.48 255.044Z" fill="#1A2E35" />
                                <path d="M140.673 281.214L207.543 284.716" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M140.438 285.667L207.307 289.169" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M140.159 290.866L197.206 293.856" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M145.615 295.903L140.176 295.618L139.89 301.045L145.329 301.33L145.615 295.903Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M155.472 296.408L150.033 296.123L149.747 301.55L155.186 301.835L155.472 296.408Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M165.341 296.935L159.901 296.65L159.615 302.077L165.055 302.362L165.341 296.935Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M175.198 297.451L169.759 297.166L169.473 302.593L174.912 302.878L175.198 297.451Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M137.11 281.022C137.067 281.769 136.425 282.346 135.676 282.303C134.927 282.261 134.349 281.62 134.381 280.873C134.424 280.125 135.066 279.549 135.815 279.581C136.564 279.623 137.142 280.264 137.11 281.011V281.022Z" fill="#1A2E35" />
                                <path d="M139.304 307.192L206.184 310.694" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M139.068 311.644L205.949 315.146" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M138.801 316.844L195.837 319.833" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M144.261 321.869L138.821 321.584L138.535 327.011L143.975 327.297L144.261 321.869Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M154.118 322.385L148.679 322.1L148.393 327.527L153.832 327.813L154.118 322.385Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M163.975 322.912L158.536 322.626L158.25 328.054L163.689 328.339L163.975 322.912Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M173.833 323.427L168.394 323.142L168.108 328.569L173.547 328.855L173.833 323.427Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M135.74 306.999C135.697 307.747 135.055 308.323 134.306 308.291C133.557 308.249 132.979 307.608 133.011 306.861C133.054 306.113 133.696 305.537 134.445 305.579C135.194 305.622 135.772 306.263 135.74 307.01V306.999Z" fill="#1A2E35" />
                                <path d="M137.901 333.906L204.771 337.419" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M137.666 338.369L204.536 341.871" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M137.388 343.558L194.423 346.547" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M142.845 348.601L137.405 348.316L137.119 353.743L142.559 354.028L142.845 348.601Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M152.702 349.117L147.263 348.832L146.977 354.259L152.416 354.544L152.702 349.117Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M162.56 349.622L157.121 349.337L156.835 354.764L162.274 355.049L162.56 349.622Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M172.428 350.149L166.988 349.864L166.702 355.291L172.142 355.576L172.428 350.149Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M134.338 333.724C134.296 334.472 133.654 335.048 132.904 335.016C132.155 334.984 131.578 334.333 131.61 333.585C131.652 332.838 132.295 332.261 133.044 332.294C133.793 332.326 134.371 332.977 134.338 333.724Z" fill="#1A2E35" />
                                <path d="M143.413 271.893L144.119 273.11L147.009 269.918" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M161.775 298.575L162.482 299.792L165.382 296.6" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M170.989 325.994L171.696 327.211L174.595 324.019" stroke="#EC0788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M149.159 350.466L149.865 351.683L152.765 348.48" stroke="#EC0788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M160.834 331.546L74.6384 355.452L38.6406 226.184L74.3281 216.287L124.836 202.289L157.495 319.577L160.834 331.546Z" fill="white" />
                                <mask id="mask1_231_2596" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="38" y="202" width="123" height="154">
                                    <path d="M160.834 331.546L74.6384 355.452L38.6406 226.184L74.3281 216.287L124.836 202.289L157.495 319.577L160.834 331.546Z" fill="white" />
                                </mask>
                                <g mask="url(#mask1_231_2596)">
                                    <path opacity="0.2" d="M157.495 319.577L90.8503 323.869L74.3281 216.287L124.836 202.289L157.495 319.577Z" fill="black" />
                                </g>
                                <path d="M160.834 331.546L74.6384 355.452L38.6406 226.184L74.3281 216.287L124.836 202.289L157.495 319.577L160.834 331.546Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M47.5332 232.879L69.9623 226.654" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M48.7314 237.171L63.9802 232.943" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M57.0244 245.798L121.54 227.914" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M58.2227 250.09L122.738 232.206" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M59.6143 255.108L114.649 239.851" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M66.4159 258.137L61.168 259.592L62.6263 264.829L67.8742 263.373L66.4159 258.137Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M75.9227 255.503L70.6748 256.958L72.1331 262.194L77.381 260.739L75.9227 255.503Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M85.4403 252.865L80.1924 254.32L81.6507 259.557L86.8986 258.101L85.4403 252.865Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M94.9471 250.228L89.6992 251.683L91.1575 256.919L96.4054 255.464L94.9471 250.228Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M53.5902 246.748C53.7936 247.474 53.3655 248.222 52.6379 248.425C51.9102 248.627 51.1611 248.2 50.9578 247.474C50.7545 246.748 51.1825 246.001 51.9102 245.798C52.6379 245.595 53.3869 246.022 53.5902 246.748Z" fill="#1A2E35" />
                                <path d="M64.002 270.857L128.528 252.973" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M65.2002 275.16L129.716 257.265" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M66.5918 280.168L121.627 264.91" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M73.3993 283.194L68.1514 284.649L69.6097 289.885L74.8576 288.43L73.3993 283.194Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M82.9061 280.567L77.6582 282.022L79.1165 287.258L84.3644 285.803L82.9061 280.567Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M92.4129 277.933L87.165 279.388L88.6234 284.624L93.8713 283.169L92.4129 277.933Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M101.931 275.285L96.6826 276.74L98.1409 281.976L103.389 280.521L101.931 275.285Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M60.5668 271.818C60.7701 272.544 60.3421 273.292 59.6144 273.495C58.8868 273.698 58.1377 273.27 57.9344 272.544C57.7311 271.818 58.1591 271.071 58.8868 270.868C59.6144 270.665 60.3635 271.092 60.5668 271.818Z" fill="#1A2E35" />
                                <path d="M70.9785 295.927L135.505 278.032" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M72.1768 300.22L136.703 282.335" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M73.5791 305.238L128.603 289.98" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M80.3748 308.271L75.127 309.726L76.5853 314.962L81.8332 313.507L80.3748 308.271Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M89.8924 305.634L84.6445 307.089L86.1029 312.325L91.3508 310.87L89.8924 305.634Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M99.3993 302.997L94.1514 304.452L95.6097 309.688L100.858 308.233L99.3993 302.997Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M108.917 300.359L103.669 301.814L105.127 307.05L110.375 305.595L108.917 300.359Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M67.5434 296.877C67.7467 297.603 67.3186 298.351 66.591 298.554C65.8633 298.757 65.1143 298.33 64.9109 297.604C64.7076 296.877 65.1357 296.13 65.8633 295.927C66.591 295.724 67.34 296.151 67.5434 296.877Z" fill="#1A2E35" />
                                <path d="M78.1592 321.702L142.686 303.818" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M79.3574 326.005L143.884 308.11" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M80.7598 331.012L135.784 315.755" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M87.5526 334.048L82.3047 335.503L83.763 340.739L89.0109 339.284L87.5526 334.048Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M97.0702 331.4L91.8223 332.855L93.2806 338.091L98.5285 336.636L97.0702 331.4Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M106.577 328.763L101.329 330.218L102.787 335.454L108.035 333.999L106.577 328.763Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M116.095 326.125L110.847 327.581L112.305 332.817L117.553 331.362L116.095 326.125Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M74.724 322.663C74.9273 323.389 74.4993 324.136 73.7716 324.339C73.044 324.542 72.2949 324.115 72.0916 323.389C71.8883 322.663 72.3163 321.915 73.044 321.713C73.7716 321.51 74.5207 321.937 74.724 322.663Z" fill="#1A2E35" />
                                <path d="M72.584 258.664L73.6434 259.593L75.3662 255.642" stroke="#EC0788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M70.0049 286.628L71.0536 287.557L72.7871 283.606" stroke="#EC0788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M76.9717 311.43L78.0311 312.359L79.7646 308.409" stroke="#EC0788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M103.167 331.749L104.226 332.678L105.949 328.727" stroke="#EC0788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M169.259 172.433L80.21 180.973L93.0737 314.515L182.123 305.976L169.259 172.433Z" fill="white" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M87.79 189.113L110.957 186.892" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M88.2178 193.555L103.969 192.05" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M94.874 203.495L161.53 197.1" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M95.3018 207.937L161.958 201.542" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M95.7939 213.115L152.648 207.659" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M101.972 217.274L96.5498 217.794L97.0709 223.204L102.493 222.684L101.972 217.274Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M111.799 216.33L106.377 216.85L106.898 222.26L112.32 221.74L111.799 216.33Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M121.626 215.386L116.204 215.906L116.725 221.316L122.147 220.796L121.626 215.386Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M131.442 214.442L126.021 214.962L126.542 220.372L131.963 219.852L131.442 214.442Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M91.3215 203.837C91.3964 204.584 90.8399 205.246 90.0909 205.321C89.3418 205.396 88.6783 204.841 88.6034 204.093C88.5285 203.346 89.085 202.684 89.834 202.609C90.5831 202.534 91.2466 203.09 91.3215 203.837Z" fill="#1A2E35" />
                                <path d="M97.3672 229.387L164.023 223.002" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M97.7949 233.829L164.451 227.433" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M98.2871 239.008L155.141 233.552" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M104.465 243.163L99.043 243.683L99.5641 249.092L104.986 248.572L104.465 243.163Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M114.292 242.218L108.87 242.738L109.391 248.147L114.813 247.627L114.292 242.218Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M124.119 241.284L118.697 241.804L119.218 247.214L124.64 246.694L124.119 241.284Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M133.936 240.34L128.515 240.86L129.036 246.27L134.458 245.75L133.936 240.34Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M93.8146 229.729C93.8895 230.476 93.3331 231.138 92.584 231.213C91.835 231.288 91.1715 230.733 91.0966 229.985C91.0217 229.238 91.5781 228.576 92.3272 228.501C93.0763 228.426 93.7397 228.982 93.8146 229.729Z" fill="#1A2E35" />
                                <path d="M99.8604 255.279L166.516 248.895" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M100.288 259.721L166.944 253.336" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M100.78 264.899L157.634 259.454" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M106.957 269.05L101.535 269.57L102.056 274.98L107.478 274.46L106.957 269.05Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M116.784 268.116L111.362 268.636L111.883 274.045L117.305 273.526L116.784 268.116Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M126.611 267.172L121.189 267.692L121.711 273.101L127.132 272.581L126.611 267.172Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M136.439 266.238L131.018 266.758L131.539 272.168L136.96 271.648L136.439 266.238Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M96.3078 255.621C96.3827 256.368 95.8263 257.03 95.0772 257.105C94.3281 257.18 93.6647 256.625 93.5898 255.877C93.5149 255.13 94.0713 254.468 94.8204 254.393C95.5694 254.318 96.2329 254.874 96.3078 255.621Z" fill="#1A2E35" />
                                <path d="M102.418 281.919L169.085 275.523" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M102.846 286.35L169.512 279.965" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M103.349 291.528L160.202 286.083" stroke="#1A2E35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M109.521 295.696L104.1 296.216L104.621 301.626L110.042 301.106L109.521 295.696Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M119.349 294.752L113.927 295.272L114.448 300.682L119.87 300.162L119.349 294.752Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M129.185 293.807L123.764 294.327L124.285 299.737L129.707 299.217L129.185 293.807Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M139.014 292.863L133.592 293.383L134.113 298.793L139.535 298.273L139.014 292.863Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M98.8762 282.26C98.9511 283.008 98.3946 283.67 97.6456 283.745C96.8965 283.819 96.233 283.264 96.1581 282.517C96.0832 281.769 96.6397 281.107 97.3887 281.033C98.1378 280.958 98.8012 281.513 98.8762 282.26Z" fill="#1A2E35" />
                                <path d="M98.6943 219.767L99.5718 220.867L101.958 217.28" stroke="#EC0788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M120.802 243.449L121.679 244.549L124.076 240.961" stroke="#EC0788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M113.525 270.825L114.403 271.925L116.8 268.338" stroke="#EC0788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M135.602 295.372L136.479 296.472L138.865 292.884" stroke="#EC0788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M278.148 119.787H222.867C218.801 119.787 215.505 123.075 215.505 127.132V174.518C215.505 178.575 218.801 181.863 222.867 181.863H247.372L261.412 198.755L257.891 181.863H278.148C282.214 181.863 285.51 178.575 285.51 174.518V127.132C285.51 123.075 282.214 119.787 278.148 119.787Z" fill="white" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M254.927 145.796V140.778L251.16 140.457C250.935 139.667 250.625 138.909 250.229 138.205L252.658 135.322L249.105 131.777L246.216 134.201C245.51 133.806 244.75 133.496 243.958 133.272L243.637 129.513H238.608L238.287 133.272C237.495 133.496 236.735 133.806 236.029 134.201L233.14 131.777L229.587 135.322L232.016 138.205C231.62 138.909 231.31 139.667 231.085 140.457L227.318 140.778V145.796L231.085 146.116C231.31 146.906 231.62 147.665 232.016 148.369L229.587 151.252L233.14 154.797L236.029 152.373C236.735 152.768 237.495 153.078 238.287 153.302L238.608 157.06H243.637L243.958 153.302C244.75 153.078 245.51 152.768 246.216 152.373L249.105 154.797L252.658 151.252L250.229 148.369C250.625 147.665 250.935 146.906 251.16 146.116L254.927 145.796ZM241.112 149.117C237.88 149.117 235.269 146.501 235.269 143.287C235.269 140.073 237.891 137.457 241.112 137.457C244.333 137.457 246.955 140.073 246.955 143.287C246.955 146.501 244.333 149.117 241.112 149.117Z" fill="#E474E3" />
                                <path d="M271.567 157.007V153.441L268.881 153.206C268.72 152.64 268.496 152.106 268.217 151.604L269.951 149.554L267.426 147.035L265.371 148.764C264.868 148.487 264.333 148.262 263.766 148.102L263.53 145.422H259.956L259.721 148.102C259.154 148.262 258.619 148.487 258.116 148.764L256.061 147.035L253.536 149.554L255.269 151.604C254.991 152.106 254.766 152.64 254.606 153.206L251.92 153.441V157.007L254.606 157.242C254.766 157.808 254.991 158.342 255.269 158.844L253.536 160.894L256.061 163.413L258.116 161.684C258.619 161.961 259.154 162.185 259.721 162.346L259.956 165.026H263.53L263.766 162.346C264.333 162.185 264.868 161.961 265.371 161.684L267.426 163.413L269.951 160.894L268.217 158.844C268.496 158.342 268.72 157.808 268.881 157.242L271.567 157.007ZM261.743 159.367C259.443 159.367 257.581 157.509 257.581 155.213C257.581 152.918 259.443 151.06 261.743 151.06C264.044 151.06 265.906 152.918 265.906 155.213C265.906 157.509 264.044 159.367 261.743 159.367Z" fill="#E474E3" />
                                <path d="M254.06 165.325V162.783L252.156 162.623C252.038 162.217 251.888 161.844 251.685 161.481L252.915 160.018L251.118 158.224L249.652 159.452C249.298 159.249 248.913 159.1 248.507 158.982L248.346 157.082H245.799L245.639 158.982C245.232 159.1 244.858 159.249 244.494 159.452L243.028 158.224L241.23 160.018L242.461 161.481C242.257 161.833 242.107 162.217 241.99 162.623L240.085 162.783V165.325L241.99 165.485C242.107 165.89 242.257 166.264 242.461 166.627L241.23 168.09L243.028 169.884L244.494 168.656C244.847 168.859 245.232 169.008 245.639 169.126L245.799 171.026H248.346L248.507 169.126C248.913 169.008 249.288 168.859 249.652 168.656L251.118 169.884L252.915 168.09L251.685 166.627C251.888 166.275 252.038 165.89 252.156 165.485L254.06 165.325ZM247.062 167.012C245.425 167.012 244.098 165.688 244.098 164.054C244.098 162.42 245.425 161.096 247.062 161.096C248.699 161.096 250.026 162.42 250.026 164.054C250.026 165.688 248.699 167.012 247.062 167.012Z" fill="#E474E3" />
                                <path d="M249.031 302.003L292.134 460.643H298.576L255.473 302.003H249.031Z" fill="#757575" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M346.099 415.671H264.397V422.313H346.099V415.671Z" fill="#999999" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M389.684 266.363L336.907 460.644H330.465L383.242 266.363C385.19 259.198 380.727 253.368 373.29 253.368H327.811C320.385 253.368 312.744 259.187 310.797 266.363L258.02 460.644H251.578L304.355 266.363C307.233 255.76 318.491 247.165 329.502 247.165H374.981C385.992 247.165 392.573 255.76 389.695 266.363H389.684Z" fill="#757575" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M390.529 266.427L377.431 314.666C376.35 318.648 372.123 321.873 367.993 321.873H293.258C289.127 321.873 286.655 318.648 287.736 314.666L300.845 266.427C301.926 262.455 306.152 259.219 310.283 259.219H385.007C389.138 259.219 391.61 262.455 390.529 266.427Z" fill="#E474E3" />
                                <mask id="mask2_231_2596" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="287" y="259" width="104" height="63">
                                    <path d="M390.529 266.427L377.431 314.666C376.35 318.648 372.123 321.873 367.993 321.873H293.258C289.127 321.873 286.655 318.648 287.736 314.666L300.845 266.427C301.926 262.455 306.152 259.219 310.283 259.219H385.007C389.138 259.219 391.61 262.455 390.529 266.427Z" fill="white" />
                                </mask>
                                <g mask="url(#mask2_231_2596)">
                                    <path opacity="0.2" d="M390.529 266.427L377.431 314.666C376.35 318.648 372.123 321.873 367.993 321.873H293.258C289.127 321.873 286.655 318.648 287.736 314.666L300.845 266.427C301.926 262.455 306.152 259.219 310.283 259.219H348.924C365.628 276.335 363.498 307.79 362.407 317.292C365.831 316.481 368.956 313.673 369.866 310.331L382.974 262.092C383.252 261.067 383.295 260.095 383.135 259.219H385.007C389.138 259.219 391.61 262.455 390.529 266.427Z" fill="black" />
                                </g>
                                <path d="M390.529 266.427L377.431 314.666C376.35 318.648 372.123 321.873 367.993 321.873H293.258C289.127 321.873 286.655 318.648 287.736 314.666L300.845 266.427C301.926 262.455 306.152 259.219 310.283 259.219H385.007C389.138 259.219 391.61 262.455 390.529 266.427Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M346.592 370.699L371.022 460.644H377.475L353.034 370.699H346.592Z" fill="#757575" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M353.065 360.375V369.173H256.843V360.375C256.843 356.798 259.743 353.904 263.328 353.904H346.57C349.566 353.904 352.091 355.922 352.841 358.677C352.99 359.211 353.065 359.787 353.065 360.375Z" fill="#E474E3" />
                                <mask id="mask3_231_2596" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="256" y="353" width="98" height="17">
                                    <path d="M353.065 360.375V369.173H256.843V360.375C256.843 356.798 259.743 353.904 263.328 353.904H346.57C349.566 353.904 352.091 355.922 352.841 358.677C352.99 359.211 353.065 359.787 353.065 360.375Z" fill="white" />
                                </mask>
                                <g mask="url(#mask3_231_2596)">
                                    <path opacity="0.2" d="M352.841 358.677C349.727 362.329 344.141 366.044 334.531 369.173H256.843V360.375C256.843 356.798 259.743 353.904 263.328 353.904H346.57C349.566 353.904 352.091 355.922 352.841 358.677Z" fill="black" />
                                </g>
                                <path d="M353.065 360.375V369.173H256.843V360.375C256.843 356.798 259.743 353.904 263.328 353.904H346.57C349.566 353.904 352.091 355.922 352.841 358.677C352.99 359.211 353.065 359.787 353.065 360.375Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M356.329 366.482H254.414C253.403 366.482 252.584 367.299 252.584 368.308V372.91C252.584 373.918 253.403 374.735 254.414 374.735H356.329C357.34 374.735 358.159 373.918 358.159 372.91V368.308C358.159 367.299 357.34 366.482 356.329 366.482Z" fill="#999999" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M253.719 366.781C249.107 371.468 271.461 445.119 271.461 445.119C269.021 447.233 265.426 448.237 262.023 448.685C257.1 449.336 252.595 448.824 252.595 448.824C252.595 448.824 220.557 371.287 229.374 352.046C238.192 332.806 292.905 323.998 292.905 323.998L295.238 318.232L323.542 314.26L328.218 348.843C328.218 348.843 323.574 349.292 316.587 350.189C297.849 352.591 262.194 358.175 253.719 366.781Z" fill="#1A2E35" />
                                <mask id="mask4_231_2596" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="227" y="314" width="102" height="136">
                                    <path d="M253.719 366.781C249.107 371.468 271.461 445.119 271.461 445.119C269.021 447.233 265.426 448.237 262.023 448.685C257.1 449.336 252.595 448.824 252.595 448.824C252.595 448.824 220.557 371.287 229.374 352.046C238.192 332.806 292.905 323.998 292.905 323.998L295.238 318.232L323.542 314.26L328.218 348.843C328.218 348.843 323.574 349.292 316.587 350.189C297.849 352.591 262.194 358.175 253.719 366.781Z" fill="white" />
                                </mask>
                                <g mask="url(#mask4_231_2596)">
                                    <path opacity="0.3" d="M271.46 445.119C269.021 447.233 265.425 448.237 262.022 448.685C255.805 425.622 239.978 364.079 245.982 356.552C253.376 347.263 289.973 338.817 289.973 338.817C290.123 334.077 302.953 329.806 302.953 329.806L316.586 350.189C297.849 352.591 262.194 358.175 253.718 366.781C249.106 371.468 271.46 445.119 271.46 445.119Z" fill="black" />
                                </g>
                                <path d="M253.719 366.781C249.107 371.468 271.461 445.119 271.461 445.119C269.021 447.233 265.426 448.237 262.023 448.685C257.1 449.336 252.595 448.824 252.595 448.824C252.595 448.824 220.557 371.287 229.374 352.046C238.192 332.806 292.905 323.998 292.905 323.998L295.238 318.232L323.542 314.26L328.218 348.843C328.218 348.843 323.574 349.292 316.587 350.189C297.849 352.591 262.194 358.175 253.719 366.781Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M237.881 297.038C233.183 296.226 266.624 266.982 266.624 266.982L282.75 277.808C282.75 277.808 255.313 297.091 251 297.614C246.688 298.138 237.892 297.038 237.892 297.038H237.881Z" fill="white" />
                                <mask id="mask5_231_2596" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="237" y="266" width="46" height="32">
                                    <path d="M237.881 297.038C233.183 296.226 266.624 266.982 266.624 266.982L282.75 277.808C282.75 277.808 255.313 297.091 251 297.614C246.688 298.138 237.892 297.038 237.892 297.038H237.881Z" fill="white" />
                                </mask>
                                <g mask="url(#mask5_231_2596)">
                                    <path opacity="0.2" d="M237.881 297.038C233.183 296.226 266.624 266.982 266.624 266.982L282.75 277.808C282.75 277.808 255.313 297.091 251 297.614C246.688 298.138 237.892 297.038 237.892 297.038H237.881Z" fill="black" />
                                </g>
                                <path d="M237.881 297.038C233.183 296.226 266.624 266.982 266.624 266.982L282.75 277.808C282.75 277.808 255.313 297.091 251 297.614C246.688 298.138 237.892 297.038 237.892 297.038H237.881Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M243.776 284.727C243.776 284.727 250.785 286.467 252.926 287.962C255.066 289.457 254.467 294.721 254.467 294.721C254.467 294.721 245.103 292.052 243.776 284.738V284.727Z" fill="white" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M239.282 271.338L252.305 296.269H253.857L241.476 270.099L239.282 271.338Z" fill="#1A2E35" />
                                <path d="M251.032 289.361C251.032 289.361 242.814 283.531 240.802 283.531C238.79 283.531 232.766 290.632 232.766 294.187C232.766 297.743 245.896 299.718 248.475 296.696C249.748 295.191 247.212 291.56 247.212 291.56C247.212 291.56 251.032 295.511 252.124 296.098C253.215 296.685 255.227 295.917 255.227 295.917C255.227 295.917 252.487 291.56 251.021 289.361H251.032Z" fill="white" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M247.212 297.54C247.212 297.54 244.087 293.493 240.353 291.56" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M247.212 291.56C247.212 291.56 244.366 289.083 242.45 288.539" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M238.255 294.71C238.255 294.71 242.856 297.123 244.001 298.148" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M277.099 254.18C272.883 257.116 254.007 276.484 254.007 276.484C254.007 276.484 262.856 286.531 270.615 287.983L291.642 277.797L277.11 254.18H277.099Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.4" d="M277.099 254.18C272.883 257.116 254.007 276.484 254.007 276.484C254.007 276.484 262.856 286.531 270.615 287.983L291.642 277.797L277.11 254.18H277.099Z" fill="white" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M266.945 437.303L275.837 460.643C275.837 460.643 277.314 466.655 250.433 464.754L235.612 463.483L266.934 437.292L266.945 437.303Z" fill="#E474E3" />
                                <mask id="mask6_231_2596" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="235" y="437" width="41" height="29">
                                    <path d="M266.945 437.303L275.837 460.643C275.837 460.643 277.314 466.655 250.433 464.754L235.612 463.483L266.934 437.292L266.945 437.303Z" fill="white" />
                                </mask>
                                <g mask="url(#mask6_231_2596)">
                                    <path opacity="0.3" d="M266.945 437.303L275.837 460.643C275.837 460.643 277.314 466.655 250.433 464.754L235.612 463.483L266.934 437.292L266.945 437.303Z" fill="black" />
                                </g>
                                <path d="M266.945 437.303L275.837 460.643C275.837 460.643 277.314 466.655 250.433 464.754L235.612 463.483L266.934 437.292L266.945 437.303Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M263.553 448.493C263.553 448.493 265.457 457.579 263.553 464.338C263.553 464.338 235.184 468.769 228.839 467.082C222.493 465.395 218.641 462.234 218.448 460.643C218.448 460.643 218.673 456.309 225.029 455.038C231.375 453.767 244.034 452.924 249.031 445.749C254.029 438.574 263.553 448.493 263.553 448.493Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M300.995 317.335C310.058 304.437 351.727 319.962 351.727 319.962C351.727 319.962 355.708 351.011 339.111 359.285C322.514 367.56 298.587 367.122 292.123 373.838L265.821 451.333C265.821 451.333 256.372 455.273 242.632 449.069C242.632 449.069 259.336 390.548 264.237 369.77C269.084 349.217 300.481 335.251 300.481 335.251C300.481 335.251 297.838 332.272 296.864 328.76" fill="#1A2E35" />
                                <path d="M300.995 317.335C310.058 304.437 351.727 319.962 351.727 319.962C351.727 319.962 355.708 351.011 339.111 359.285C322.514 367.56 298.587 367.122 292.123 373.838L265.821 451.333C265.821 451.333 256.372 455.273 242.632 449.069C242.632 449.069 259.336 390.548 264.237 369.77C269.084 349.217 300.481 335.251 300.481 335.251C300.481 335.251 297.838 332.272 296.864 328.76" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M343.178 347.007C341.841 348.192 340.439 349.281 338.973 350.295" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M346.591 320.709C349.994 328.076 350.251 337.429 345.489 344.252" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M337.1 321.873C337.1 321.873 336.233 327.553 338.769 329.806C341.305 332.059 349.085 333.212 349.085 333.212" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M302.931 322.15C302.931 322.15 303.285 327.809 300.984 327.542C298.683 327.275 298.565 329.806 298.565 329.806" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M277.645 258.536C277.292 257.031 277.1 255.568 277.1 254.18C277.1 254.18 289.973 243.374 306.474 243.439C326.163 243.503 338.202 249.685 343.017 258.269C350.647 271.85 351.717 319.962 351.717 319.962C351.717 319.962 302.322 327.564 295.227 318.232C293.996 316.62 294.938 305.152 294.938 305.152C294.938 305.152 289.406 290.685 288.239 279.452C288.239 279.452 286.11 276.591 283.713 272.512C282.129 269.822 280.438 266.597 279.154 263.319" fill="#E474E3" />
                                <path d="M277.645 258.536C277.292 257.031 277.1 255.568 277.1 254.18C277.1 254.18 289.973 243.374 306.474 243.439C326.163 243.503 338.202 249.685 343.017 258.269C350.647 271.85 351.717 319.962 351.717 319.962C351.717 319.962 302.322 327.564 295.227 318.232C293.996 316.62 294.938 305.152 294.938 305.152C294.938 305.152 289.406 290.685 288.239 279.452C288.239 279.452 286.11 276.591 283.713 272.512C282.129 269.822 280.438 266.597 279.154 263.319" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <g opacity="0.6">
                                    <path d="M277.645 258.536C277.292 257.031 277.1 255.568 277.1 254.18C277.1 254.18 289.973 243.374 306.474 243.439C326.163 243.503 338.202 249.685 343.017 258.269C350.647 271.85 351.717 319.962 351.717 319.962C351.717 319.962 302.322 327.564 295.227 318.232C293.996 316.62 294.938 305.152 294.938 305.152C294.938 305.152 289.406 290.685 288.239 279.452C288.239 279.452 286.11 276.591 283.713 272.512C282.129 269.822 280.438 266.597 279.154 263.319" fill="white" />
                                    <path d="M277.645 258.536C277.292 257.031 277.1 255.568 277.1 254.18C277.1 254.18 289.973 243.374 306.474 243.439C326.163 243.503 338.202 249.685 343.017 258.269C350.647 271.85 351.717 319.962 351.717 319.962C351.717 319.962 302.322 327.564 295.227 318.232C293.996 316.62 294.938 305.152 294.938 305.152C294.938 305.152 289.406 290.685 288.239 279.452C288.239 279.452 286.11 276.591 283.713 272.512C282.129 269.822 280.438 266.597 279.154 263.319" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <path d="M296.575 270.099C296.575 270.099 304.119 299.301 302.953 305.718C302.375 308.9 304.055 312.199 304.055 312.199C304.055 312.199 300.609 315.584 302.953 320.079" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M316.586 294.262C315.109 294.134 313.761 293.792 312.798 293.066L310.562 283.286C310.562 283.286 317.464 284.044 323.809 282.357L326.206 293.066C326.206 293.066 324.43 293.589 322.097 293.952" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M291.214 273.9C291.214 273.9 284.836 246.61 300.994 243.439C317.153 240.267 320.524 247.816 319.571 252.941C318.298 259.764 304.879 276.495 304.879 276.495L296.586 270.11L291.225 273.9H291.214Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.4" d="M291.214 273.9C291.214 273.9 284.836 246.61 300.994 243.439C317.153 240.267 320.524 247.816 319.571 252.941C318.298 259.764 304.879 276.495 304.879 276.495L296.586 270.11L291.225 273.9H291.214Z" fill="white" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M269.962 358.143C269.962 358.143 280.417 346.089 304.055 336.981C304.055 336.981 297.934 335.112 296.575 332.571" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M257.656 395.086L248.079 429.744" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M331.567 295.201C331.567 295.201 335.869 302.419 353.472 301.746C353.472 301.746 348.635 296.248 341.444 294.304C334.243 292.35 331.567 295.201 331.567 295.201Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M263.188 298.105C263.188 298.105 267.276 291.784 271.032 290.514C274.788 289.243 285.778 289.137 287.469 289.094C289.16 289.051 319.411 296.717 333.59 301.426L332.359 277.808L351.428 279.303C351.428 279.303 350.658 308.142 347.693 315.765C344.729 323.389 340.481 321.542 333.237 318.424C304.74 306.177 288.047 297.636 286.495 298.095C284.943 298.554 263.199 298.095 263.199 298.095L263.188 298.105Z" fill="white" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M327.597 264.067C327.094 266.128 326.912 268.22 327.126 270.067C327.972 277.456 331.567 295.201 331.567 295.201C331.567 295.201 349.352 297.732 353.472 301.746C353.472 301.746 356.404 278.225 350.433 266.33C344.473 254.436 338.287 253.091 338.287 253.091C334.382 252.13 330.84 255.76 328.817 260.426" fill="#E474E3" />
                                <path d="M327.597 264.067C327.094 266.128 326.912 268.22 327.126 270.067C327.972 277.456 331.567 295.201 331.567 295.201C331.567 295.201 349.352 297.732 353.472 301.746C353.472 301.746 356.404 278.225 350.433 266.33C344.473 254.436 338.287 253.091 338.287 253.091C334.382 252.13 330.84 255.76 328.817 260.426" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <g opacity="0.4">
                                    <path d="M327.597 264.067C327.094 266.128 326.912 268.22 327.126 270.067C327.972 277.456 331.567 295.201 331.567 295.201C331.567 295.201 349.352 297.732 353.472 301.746C353.472 301.746 356.404 278.225 350.433 266.33C344.473 254.436 338.287 253.091 338.287 253.091C334.382 252.13 330.84 255.76 328.817 260.426" fill="white" />
                                    <path d="M327.597 264.067C327.094 266.128 326.912 268.22 327.126 270.067C327.972 277.456 331.567 295.201 331.567 295.201C331.567 295.201 349.352 297.732 353.472 301.746C353.472 301.746 356.404 278.225 350.433 266.33C344.473 254.436 338.287 253.091 338.287 253.091C334.382 252.13 330.84 255.76 328.817 260.426" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <path d="M275.366 273.206C275.366 273.206 278.855 276.356 284.462 277.808" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M331.567 273.206C331.567 273.206 338.031 285.314 346.099 287.994" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M289.973 366.482C289.973 366.482 291.16 367.379 291.631 370.614" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M285.564 370.603C285.564 370.603 288.839 370.806 290.797 373.614" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M250.188 358.143C250.188 358.143 253.612 359.873 252.873 364.773" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M246.57 362.36C246.57 362.36 251.247 365.126 251.578 367.613" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M300.76 332.486C300.76 332.486 311.172 333.949 313.505 332.486" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M296.576 268.925C296.576 268.925 295.249 265.775 295.484 260.992C295.527 260.127 295.613 259.22 295.773 258.269L293.965 255.408L291.643 251.724L294.328 240.994C294.328 240.994 311.429 244.282 312.734 249.044C314.029 253.828 296.576 268.925 296.576 268.925Z" fill="white" />
                                <mask id="mask7_231_2596" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="291" y="240" width="22" height="29">
                                    <path d="M296.576 268.925C296.576 268.925 295.249 265.775 295.484 260.992C295.527 260.127 295.613 259.22 295.773 258.269L293.965 255.408L291.643 251.724L294.328 240.994C294.328 240.994 311.429 244.282 312.734 249.044C314.029 253.828 296.576 268.925 296.576 268.925Z" fill="white" />
                                </mask>
                                <g mask="url(#mask7_231_2596)">
                                    <path opacity="0.2" d="M295.484 260.992C295.527 260.127 295.613 259.22 295.773 258.269L293.965 255.408C296.929 254.821 300.171 253.507 302.322 250.731C302.322 250.731 302.889 258.13 295.484 260.992Z" fill="black" />
                                </g>
                                <path d="M296.576 268.925C296.576 268.925 295.249 265.775 295.484 260.992C295.527 260.127 295.613 259.22 295.773 258.269L293.965 255.408L291.643 251.724L294.328 240.994C294.328 240.994 311.429 244.282 312.734 249.044C314.029 253.828 296.576 268.925 296.576 268.925Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M307.319 241.944C312.616 228.021 309.117 204.435 283.424 208.962C268.303 211.631 266.548 229.804 271.589 237.865C276.639 245.926 271.278 246.193 278.844 252.183C281.904 254.607 284.387 258.717 288.047 258.974C292.391 259.283 297.977 255.162 302.14 250.731" fill="white" />
                                <path d="M307.319 241.944C312.616 228.021 309.117 204.435 283.424 208.962C268.303 211.631 266.548 229.804 271.589 237.865C276.639 245.926 271.278 246.193 278.844 252.183C281.904 254.607 284.387 258.717 288.047 258.974C292.391 259.283 297.977 255.162 302.14 250.731" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M282.012 237.876C282.012 237.876 285.8 234.449 290.294 235.869" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M274.906 237.876C274.906 237.876 273.622 235.153 270.005 234.566" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M277.41 242.83C277.41 242.83 276.864 245.606 276.158 248.404C275.462 251.116 280.652 249.674 280.417 249.236" fill="white" />
                                <path d="M277.41 242.83C277.41 242.83 276.864 245.606 276.158 248.404C275.462 251.116 280.652 249.674 280.417 249.236" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M283.124 252.781C283.124 252.781 286.441 251.991 288.763 249.097" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M287.277 241.388C287.491 242.168 287.17 242.926 286.56 243.097C285.95 243.257 285.286 242.766 285.072 241.986C284.858 241.207 285.179 240.449 285.789 240.278C286.399 240.118 287.063 240.609 287.277 241.388Z" fill="#1A2E35" />
                                <path d="M275.827 241.154C276.041 241.933 275.88 242.648 275.473 242.755C275.067 242.862 274.564 242.328 274.361 241.549C274.147 240.769 274.307 240.054 274.714 239.947C275.12 239.84 275.623 240.374 275.827 241.154Z" fill="#1A2E35" />
                                <path d="M291.482 223.579C291.482 223.579 287.501 233.968 277.656 233.733C277.656 233.733 281.07 231.139 282.011 228.661C282.011 228.661 274.435 236.146 266.859 232.345C259.283 228.544 262.964 210.884 274.617 203.88C286.27 196.876 298.106 198.765 302.129 205.439C302.129 205.439 310.262 204.691 313.847 216.618C317.046 227.273 311.931 243.471 306.902 243.663C299.122 243.951 297.56 235.527 297.56 235.527C297.56 235.527 292.894 231.384 291.482 223.59V223.579Z" fill="#1A2E35" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M299.999 241.997C299.999 241.997 299.764 232.196 305.329 233.381C310.893 234.566 306.869 245.894 302.664 245.777" fill="white" />
                                <path d="M299.999 241.997C299.999 241.997 299.764 232.196 305.329 233.381C310.893 234.566 306.869 245.894 302.664 245.777" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M282.729 297.038H196.447C195.484 297.038 194.703 297.817 194.703 298.778V301.778C194.703 302.74 195.484 303.519 196.447 303.519H282.729C283.692 303.519 284.473 302.74 284.473 301.778V298.778C284.473 297.817 283.692 297.038 282.729 297.038Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M69.1066 427.448H32.7129L36.5224 460.643H65.2971L69.1066 427.448Z" fill="#1A2E35" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M73.4185 404.343C73.4185 404.343 57.5277 405.592 56.8643 417.294C56.8643 417.294 72.9584 424.693 73.4185 404.343Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M41.9689 407.247C41.9689 407.247 33.0872 395.267 18.7373 401.407C18.7373 401.407 27.5013 415.885 41.9689 407.247Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.9573 369.429C19.9573 369.429 17.3998 392.47 38.427 386.128C38.427 386.128 31.7497 369.183 19.9573 369.429Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M45.7679 356.595C45.7679 356.595 29.1387 365.542 41.3698 379.113C41.3698 379.113 53.0338 369.418 45.7679 356.595Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M66.2281 377.191C66.2281 377.191 48.1543 375.376 48.1543 392.064C48.1543 392.064 66.2281 392.78 66.2281 377.191Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M49.1813 441.126C49.1813 441.126 57.421 423.871 49.5131 406.297C41.6051 388.722 38.9299 373.924 43.0604 363.481" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M60.2887 381.675C60.2887 381.675 49.4487 385.968 45.7676 397.104" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.6719 378.643C25.6719 378.643 31.9319 387.153 42.5472 386.234" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.6719 403.862C25.6719 403.862 43.018 408.849 49.9094 407.215" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M68.2291 409.607C68.2291 409.607 60.4816 418.095 52.6807 417.967" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M31.1505 431.399H70.6689V426.711H31.1505V431.399Z" fill="#1A2E35" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M357.442 396.602C357.442 396.602 344.183 404.418 334.767 420.113C325.35 435.808 317.881 457.889 329.48 460.643L340.513 460.227L361.744 452.956L359.518 448.653C359.518 448.653 340.92 458.487 337.741 458.487C334.563 458.487 330.433 459.277 328.689 458.006C326.944 456.736 334.799 428.196 351.61 418.682C368.421 409.169 357.453 396.602 357.453 396.602H357.442Z" fill="#E474E3" />
                                <mask id="mask8_231_2596" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="323" y="396" width="39" height="65">
                                    <path d="M357.442 396.602C357.442 396.602 344.183 404.418 334.767 420.113C325.35 435.808 317.881 457.889 329.48 460.643L340.513 460.227L361.744 452.956L359.518 448.653C359.518 448.653 340.92 458.487 337.741 458.487C334.563 458.487 330.433 459.277 328.689 458.006C326.944 456.736 334.799 428.196 351.61 418.682C368.421 409.169 357.453 396.602 357.453 396.602H357.442Z" fill="white" />
                                </mask>
                                <g mask="url(#mask8_231_2596)">
                                    <path opacity="0.5" d="M357.442 396.602C357.442 396.602 344.183 404.418 334.767 420.113C325.35 435.808 317.881 457.889 329.48 460.643L340.513 460.227L361.744 452.956L359.518 448.653C359.518 448.653 340.92 458.487 337.741 458.487C334.563 458.487 330.433 459.277 328.689 458.006C326.944 456.736 334.799 428.196 351.61 418.682C368.421 409.169 357.453 396.602 357.453 396.602H357.442Z" fill="black" />
                                </g>
                                <path d="M357.442 396.602C357.442 396.602 344.183 404.418 334.767 420.113C325.35 435.808 317.881 457.889 329.48 460.643L340.513 460.227L361.744 452.956L359.518 448.653C359.518 448.653 340.92 458.487 337.741 458.487C334.563 458.487 330.433 459.277 328.689 458.006C326.944 456.736 334.799 428.196 351.61 418.682C368.421 409.169 357.453 396.602 357.453 396.602H357.442Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M369.513 386.341C369.513 386.341 369.513 381.74 376.5 381.11C383.488 380.48 384.483 387.196 384.483 387.196H382.076C382.076 387.196 382.129 383.17 376.993 382.861C371.856 382.551 372.049 387.196 372.049 387.196L369.502 386.341H369.513Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M359.187 460.643C344.409 460.643 347.212 394.52 348.914 391.221C350.615 387.921 393.494 386.309 397.72 387.697C401.947 389.085 418.897 454.995 409.545 460.227L359.197 460.643H359.187Z" fill="#E474E3" />
                                <mask id="mask9_231_2596" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="347" y="387" width="66" height="74">
                                    <path d="M359.187 460.643C344.409 460.643 347.212 394.52 348.914 391.221C350.615 387.921 393.494 386.309 397.72 387.697C401.947 389.085 418.897 454.995 409.545 460.227L359.197 460.643H359.187Z" fill="white" />
                                </mask>
                                <g mask="url(#mask9_231_2596)">
                                    <path opacity="0.2" d="M359.187 460.643C344.409 460.643 347.212 394.52 348.914 391.221C350.615 387.921 393.494 386.309 397.72 387.697C401.947 389.085 418.897 454.995 409.545 460.227L359.197 460.643H359.187Z" fill="black" />
                                </g>
                                <path d="M359.187 460.643C344.409 460.643 347.212 394.52 348.914 391.221C350.615 387.921 393.494 386.309 397.72 387.697C401.947 389.085 418.897 454.995 409.545 460.227L359.197 460.643H359.187Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M348.913 391.221C354.264 392.363 357.345 414.006 364.547 419.515C371.749 425.025 405.703 423.839 409.544 419.515C413.386 415.191 405.874 390.901 400.416 387.196C394.948 383.48 391.075 387.089 375.73 385.391C352.958 382.861 348.924 391.221 348.924 391.221H348.913Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M387.876 403.66L394.168 408.785C394.542 409.084 394.585 409.649 394.253 410.002L389.363 415.276C389.042 415.618 388.507 415.639 388.175 415.319L381.926 409.415C381.573 409.084 381.583 408.528 381.926 408.197L386.773 403.702C387.084 403.414 387.544 403.403 387.876 403.67V403.66Z" fill="#E474E3" />
                                <mask id="mask10_231_2596" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="381" y="403" width="14" height="13">
                                    <path d="M387.876 403.66L394.168 408.785C394.542 409.084 394.585 409.649 394.253 410.002L389.363 415.276C389.042 415.618 388.507 415.639 388.175 415.319L381.926 409.415C381.573 409.084 381.583 408.528 381.926 408.197L386.773 403.702C387.084 403.414 387.544 403.403 387.876 403.67V403.66Z" fill="white" />
                                </mask>
                                <g mask="url(#mask10_231_2596)">
                                    <path opacity="0.2" d="M387.876 403.66L394.168 408.785C394.542 409.084 394.585 409.649 394.253 410.002L389.363 415.276C389.042 415.618 388.507 415.639 388.175 415.319L381.926 409.415C381.573 409.084 381.583 408.528 381.926 408.197L386.773 403.702C387.084 403.414 387.544 403.403 387.876 403.67V403.66Z" fill="black" />
                                </g>
                                <path d="M387.876 403.66L394.168 408.785C394.542 409.084 394.585 409.649 394.253 410.002L389.363 415.276C389.042 415.618 388.507 415.639 388.175 415.319L381.926 409.415C381.573 409.084 381.583 408.528 381.926 408.197L386.773 403.702C387.084 403.414 387.544 403.403 387.876 403.67V403.66Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M367.137 430.577C367.137 430.577 395.58 432.915 409.545 429.306C409.545 429.306 412.273 431.207 413.547 435.018C414.82 438.819 417.474 451.824 409.545 455.156C401.626 458.487 373.172 457.846 369.363 454.045C365.553 450.244 367.137 430.577 367.137 430.577Z" fill="#E474E3" />
                                <mask id="mask11_231_2596" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="366" y="429" width="50" height="29">
                                    <path d="M367.137 430.577C367.137 430.577 395.58 432.915 409.545 429.306C409.545 429.306 412.273 431.207 413.547 435.018C414.82 438.819 417.474 451.824 409.545 455.156C401.626 458.487 373.172 457.846 369.363 454.045C365.553 450.244 367.137 430.577 367.137 430.577Z" fill="white" />
                                </mask>
                                <g mask="url(#mask11_231_2596)">
                                    <path opacity="0.4" d="M367.137 430.577C367.137 430.577 395.58 432.915 409.545 429.306C409.545 429.306 412.273 431.207 413.547 435.018C414.82 438.819 417.474 451.824 409.545 455.156C401.626 458.487 373.172 457.846 369.363 454.045C365.553 450.244 367.137 430.577 367.137 430.577Z" fill="black" />
                                </g>
                                <path d="M367.137 430.577C367.137 430.577 395.58 432.915 409.545 429.306C409.545 429.306 412.273 431.207 413.547 435.018C414.82 438.819 417.474 451.824 409.545 455.156C401.626 458.487 373.172 457.846 369.363 454.045C365.553 450.244 367.137 430.577 367.137 430.577Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M367.137 430.577C367.137 430.577 370.475 439.556 372.22 440.934C373.964 442.311 410.914 442.311 415.002 438.98C419.1 435.648 413.482 429.626 409.534 429.306C409.534 429.306 383.659 432.317 367.126 430.577H367.137Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M355.216 428.676C355.216 428.676 356.168 447.543 358.073 451.824C358.073 451.824 353.728 454.365 348.902 451.824C344.087 449.283 344.879 433.033 345.831 433.075C346.784 433.118 355.205 428.676 355.205 428.676H355.216Z" fill="#E474E3" />
                                <mask id="mask12_231_2596" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="345" y="428" width="14" height="25">
                                    <path d="M355.216 428.676C355.216 428.676 356.168 447.543 358.073 451.824C358.073 451.824 353.728 454.365 348.902 451.824C344.087 449.283 344.879 433.033 345.831 433.075C346.784 433.118 355.205 428.676 355.205 428.676H355.216Z" fill="white" />
                                </mask>
                                <g mask="url(#mask12_231_2596)">
                                    <path opacity="0.4" d="M355.216 428.676C355.216 428.676 356.168 447.543 358.073 451.824C358.073 451.824 353.728 454.365 348.902 451.824C344.087 449.283 344.879 433.033 345.831 433.075C346.784 433.118 355.205 428.676 355.205 428.676H355.216Z" fill="black" />
                                </g>
                                <path d="M355.216 428.676C355.216 428.676 356.168 447.543 358.073 451.824C358.073 451.824 353.728 454.365 348.902 451.824C344.087 449.283 344.879 433.033 345.831 433.075C346.784 433.118 355.205 428.676 355.205 428.676H355.216Z" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M355.216 428.676L348.057 430.107C348.057 430.107 341.23 435.339 344.247 437.079C347.265 438.82 355.055 434.538 355.216 428.676Z" fill="#E474E3" stroke="#1A2E35" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_231_2596">
                                    <rect width="433.996" height="468" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h2 className='text-2xl font-bold text-center'>Grade Smarter, Not Harder.</h2>
                    <h2 className='text-center'>IMR leverages state-of-the-art OMR software and high-speed scanners to evaluate multiple choice question sheets with 99% accuracy. Our customized solutions are perfect for educational institutions, recruitment, and surveys.</h2>
                </div>

            </div>
        </div>
    );
};

export default Login;