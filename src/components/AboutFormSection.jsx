import React from "react";
import "../styles/AboutFormSection.css";

const AboutFormSection = () => {
    return (
        <div className="about-container max-w-[1350px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">

            {/* LEFT SECTION */}
            <div className="left-section">
                <h2 className="about-title">
                    <span>About Us</span>
                    <div className="underline"></div>
                </h2>

                <p className="about-text">
                    Welcome to MBBSWAY, your trusted partner in navigating the complex journey of medical college admissions. Established with a vision to empower aspiring medical professionals.
                    Since 2014, MBBSway has been a trusted and dedicated consultancy for guiding aspiring medical students toward fulfilling their dreams of becoming healthcare professionals.
                    With a decade of expertise, we specialize in providing seamless admission assistance to students seeking MBBS and other medical courses in reputed colleges and universities across India and abroad.
                    At MBBSway, we pride ourselves on offering personalized counseling, transparent processes, and end-to-end support—from college selection and application procedures to visa assistance for international studies.
                    Our mission is to simplify the complexities of medical admissions and empower students to achieve their career goals with confidence and clarity.
                    With a network of reputable institutions, a proven track record, and a commitment to ethical practices, MBBSway has become the go-to destination for medical aspirants looking for guidance and support.
                    Join us to make your journey into the medical profession smooth, informed, and successful.
                    We offer expert guidance .We typically provide assistance to students who are seeking admission to medical colleges and universities.
                    We offer expert guidance .We typically provide assistance to students who are seeking admission to medical colleges and universities.
                </p>
                <a href="/company/about" className="learn-more-link">Learn More</a>
            </div>

            {/* RIGHT SECTION */}
            <div className="right-section w-full flex justify-center">

                {/* Wrapper same as css-10i8vsg */}
                <div className="relative w-full h-[32.5rem] sm:w-[98%]">

                    {/* Inner container same as css-17s75hm */}
                    <div className="absolute top-8 w-full h-[95%] flex justify-center">

                        {/* Form Card same as css-1px4sil */}
                        <div className="relative w-[96%] sm:w-full h-full">

                            {/* BACKGROUND BORDER FRAME */}
                            <div className="form-border-frame"></div>

                            {/* FORM CARD */}
                            <div className="form-card-content rounded-2xl border-2 border-[#115c8e] bg-[#FCE1EA] z-[10] relative px-10 py-4">


                                <h3 className="form-title">
                                    <span className="keep-text">Keep</span>
                                    <span className="connected-text"> Connected</span>
                                </h3>

                                <p className="form-subtitle text-center text-sm text-black">
                                    Feel free to reach out for caring assistance.
                                </p>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">

                                    {/* LINE 1 — NAME (full width) */}
                                    <div className="form-group full-width">
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="Name *"
                                            required
                                        />
                                    </div>

                                    {/* LINE 2 — EMAIL + NEET SCORE */}
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-input"
                                            placeholder="Email *"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="NEET Score *"
                                            required
                                        />
                                    </div>

                                    {/* LINE 3 — PHONE + SELECT STATE */}
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-input"
                                            maxLength="10"
                                            placeholder="Phone *"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <select className="form-select">
                                            <option>Select State</option>
                                            <option>Andhra Pradesh</option>
                                            <option>Andaman & Nicobar</option>
                                            <option>Arunachal Pradesh</option>
                                            <option>Assam</option>
                                            <option>Bihar</option>
                                            <option>Chhattisgarh</option>
                                            <option>Dadar & Nagar Haveli</option>
                                            <option>Delhi</option>
                                            <option>Goa</option>
                                            <option>Gujarat</option>
                                            <option>Haryana</option>
                                            <option>Himachal Pradesh</option>
                                            <option>Jammu & Kashmir</option>
                                            <option>Jharkhand</option>
                                            <option>Karnataka</option>
                                            <option>Kerala</option>
                                            <option>Madhya Pradesh</option>
                                            <option>Maharashtra</option>
                                            <option>Manipur</option>
                                            <option>Meghalaya</option>
                                            <option>Mizoram</option>
                                            <option>Odisha</option>
                                            <option>Pondicherry</option>
                                            <option>Punjab</option>
                                            <option>Rajasthan</option>
                                            <option>Sikkim</option>
                                            <option>Tamil Nadu</option>
                                            <option>Telangana</option>
                                            <option>Tripura</option>
                                            <option>Uttar Pradesh</option>
                                            <option>Uttrakhand</option>
                                            <option>West Bengal</option>
                                        </select>
                                    </div>

                                    {/* LINE 4 — SELECT DEGREE + BUTTON */}
                                    <div className="form-group">
                                        <select className="form-select">
                                            <option>Select Degree</option>
                                            <option>MBBS in India</option>
                                            <option>BDS in India</option>
                                            <option>BAMS in India</option>
                                            <option>BHMS in India</option>
                                            <option>BVSC in India</option>
                                            <option>BNYC in India</option>
                                            <option>BUMC in India</option>
                                            <option>MD/MS in India</option>
                                            <option>MDS in India</option>
                                            <option>Cps-Fcps in India</option>
                                        </select>
                                    </div>

                                    <div className="flex items-end">
                                        <button className="register-btn w-full">
                                            REGISTER NOW WITH US
                                        </button>
                                    </div>

                                </form>


                                {/* SOCIAL ICONS */}
                                <div className="social-section mt-6 flex items-center gap-4">
                                    <p className="social-title whitespace-nowrap">Let's stay in touch:</p>

                                    <div className="social-icons flex gap-3">
                                        <div className="social-box"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEvSURBVHgB5ZTNTcNQDMftlwQ4cEg2CBu0GzBCmYBWnLi1C8ArDNDeOEHEBmUDNggjZIPkgISUDxubUAmBEukpOSD1Lz3ZiZVf/Gy/hx/3T5c18xYBQhimzEO0pmG2I8BUsbC2vjr6dHpzhTBA73ePLCY0MLL+P9DvC+Y2iQPkhJEn2jhZu5LKVWSvM3DNUGG+oRSQz/dTIFWfBeYoze1D7Az0vWajIGJ+rshEss7Ul1AY4HHiDETGmdqGKxvZRSEra9hbfgcnzkBR0ZqT4se78Jf9o+6mML5p/QJDG6nZWsHi336FmF+cgRXjQjqcijuXRswBqP2PZF5ztez6rnPLWjNpxBSBd3uQpPZaUzntG5veOVSomAtw0AGeZZR7LIdxLlhVZohgpQ4MFLcHYf0JfKN4aOkqULUAAAAASUVORK5CYII=" /></div>
                                        <div className="social-box"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBzVTLDcIwDHVKjxzKBnQykDhxgwUghAHoAtDRyAZwKELiY2NDkSIhPiFR1XeInch6enl2oo7LzeBCVCiADMJgO0rp5EqkI5AJ+sxVpJLIrjsbKQhAZdbEIUsgMqITpj7FB1POEXDieG7ZqvwvwsqUK3qQxVKIQ1nPeMp7emzfVfl4eL/mJzJfwp/QbJd5WLdQD75zRnX60mFBswpdBU9l355o+5vSfkLFZu8gzgcrsAkiTCWBQPAI7DksbqbuPijtGD/sAAAAAElFTkSuQmCC" /></div>
                                        <div className="social-box"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJRSURBVHgBnZVdctowEMd3ZUjbGaDODegNyg3CDcoNIIXM9Ak4QGNBDxDnqQ9Nxs0J6A3gBuUI3CBMknbagLXZlcAxjO187INHkqW/Vj/trvBGX3xSqPqQYUTxqKp7Myiwax3VD5Q5I0LfLVoPK/pkjvzDLyNNAeljxrrFytw3D/WXRY6oX1bmNzfrzhEzqgY9LW11qDvLFWGL20s3XYWeuf9giK5kQRnfRJBj1qEMUasiHxZfGEMdN2Ta//gbkzcQj/kkR3/GUbAvejeOzranFCfSomKY7tyOLkJE7DsEqlGGVR2UJ175ZExzy1s2IjBOiHBeCY4b+xurdKcadAc8cWYR8IXIJcRgRtYDpaJr/b3+91vUT0TFAfrfggxT+wPMu2MRALTvxpeD96e9MOGtDqaGTJiIFlwsZg3e6h9H7OHUdkzcWEF5sXP7fNFrE7PoyRxyTGUNCktGMHQzvIk9iVFN2EQOMp4i0VxhMUGQ8EaaSORsefOyQHjDa4Stly6+k5CTzYjonMf8ovgWw6Kfkq4lZsuTbLpKyK2hNH/krcLKaWf4ImERZYEkszZmIwHgLWzEfU6sVk13f+2vVzmiflpU0jWd4i5TwXqqFEZZvDOFs2pAOsUlnWv6888U7wk8hcLWADAiYmtALei2YRdPgiAGb/ZYGXd57wg/pwbc6Mu2UiARsWTejTRvD7H97uvx1Q6K59aAfQQlWNe5bS8vJgq3vNF5wa+IwkkiWlADNkjyHwc+Kcd/074gJS+O0LhYXZEZPpWuG3GOkDgzSQzB+QOcGGp03JcVgQAAAABJRU5ErkJggg==" /></div>
                                        <div className="social-box"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEmSURBVHgB3ZTbbcIwFIZ/O3mpFKmwAWzQETpCNyi06kOf2gxQZOgCvCMQTMAKjMAGZAQkQEgQbI4hRkEi5mIugk9K7GNb5+bjA9w7zEym/633WKk6LeTgRuQxJp7+Pjpa4GZ1oZQ4g3JNgXTVjeCnN/QvqHwyODCuNRVSjnJcGN+2Oak1u+TOcC55mBflIU4gM4KRaLyS8jealnzELziRzAhi+H1PLToew3Mgvno4t4EkJSU4cttLppIb6JFKt5iWVVKGDLwdVMqhTce+CArJtyXrB7l+lPJ3VG0IOBjYyVzOilS6q6gY4z+2s9YUZZEX35EeKWV6sLaXi1/ybauIiI6UjzNgyvNQeRdXTZFuDbmkn7sSmckmAikR4oCc7kOtHa3iYVgCNaRT/DCosigAAAAASUVORK5CYII=" /></div>
                                        <div className="social-box"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGCSURBVHgBpVTdTcMwEL5zE1REEe4G7gbtCExAR6AgkHgqvCMwnYA3JBCKOgHpBLBBuwHZIJEAqTSJjztohEBtE7Wf5MT2nT/7fhEYsQ30loI+EXUBScseAWjkAQvAsoRlyc8CI6Uw/Myno6Y9i5DJjK/cM4sMbIYodarj1TC3AGj4pokjd+NDOhHpFOpJ0/aSRSfFojpMdQ41TYAalQrkQR5z4fvgMeaFTt2sJU+GNRDb+7avamMQVzAhyWbj6hj/K7LsVf6o8Hzn8mi0irTgUbAaRgY5CvlAENs7U6JfSlhAfHnoq63xxyC43phQoueIhjzlIDhbuGJtQgEi7lXRq0ToKTfmiHUloYlTiwPYWqpbhRC/TYUwc7OLstQqI4zkQ871du3JC1S5vEhscHmnYU8nsAbm5SuBSjxuCEN2eB9U7enNPvQ8yCJR2l5hWlF6Mk/BbyukIpVCaQ6a2aVsDGwGbg6zffx9ctblBnHA+WHmCmbZyb/tixICGmXk3Uoz+QLqTqx+h3zBDQAAAABJRU5ErkJggg==" /></div>
                                    </div>

                                </div>

                                {/* STATS */}
                                <div className="stats mt-6 grid grid-cols-3 gap-4">

                                    <div className="stats-box">
                                        <p className="stat-number">43 Live</p>
                                        <p className="stat-text">Consultant</p>
                                    </div>

                                    <div className="stats-box">
                                        <p className="stat-number">22 Free</p>
                                        <p className="stat-text">Consultant</p>
                                    </div>

                                    <div className="stats-box">
                                        <p className="stat-number">84 Booked</p>
                                        <p className="stat-text">Consultant</p>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AboutFormSection;
