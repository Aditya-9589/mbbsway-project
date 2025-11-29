import React from 'react'
import "../../styles/BookConsultation.css"

const BookConsultation = () => {
    return (

        <section className="book-section" >
            <div className="book-container" >

                <div style={{ position: "relative", height: "100%" }} >
                    <div className="book=gradient-border" ></div>

                    <div className="book-grid" >


                        {/* LEFT: FORM */}
                        <div className="book-form-wrapper" >
                            <div className="book-form-bg" >

                                <div className="book-form" >
                                    <h2 className="book-title" >
                                        Book a free{" "}
                                        <span className="highlight" >Consultation</span>
                                    </h2>

                                    {/* Row 1 */}
                                    <div className="form-row" >
                                        <div className="form-col" >
                                            <label className="form-label" htmlFor="">Name *</label>
                                            <input className="form-input" type="text" required placeholder="Enter your name" />
                                        </div>

                                        <div className="form-col" >
                                            <label className="form-label" htmlFor="">Email *</label>
                                            <input classname="form-input" type="email" required placeholder="Enter your email" />
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="row" >
                                        <div className="col" >
                                            <label htmlFor="">Phone *</label>
                                            <input
                                                type="text"
                                                required
                                                minLength="10"
                                                maxLength="10"
                                                placeholder="Enter your number"
                                            />
                                        </div>

                                        <div className="form-col">
                                            <label className="form-label">Destination *</label>

                                            <div className="select-control">
                                                <select className="form-select">
                                                    <option value="">Select Country</option>
                                                    <option value="Russia">Russia</option>
                                                    <option value="Kazakhstan">Kazakhstan</option>
                                                    <option value="Uzbekistan">Uzbekistan</option>
                                                </select>

                                                <img src="/icons/down-arrow.svg" className="select-arrow" alt="arrow" />
                                            </div>
                                        </div>

                                    </div>

                                    {/* Row 3 */}
                                    <div className="form-col">
                                        <label className="form-label">Message *</label>

                                        <div className="textarea-wrapper">
                                            <textarea
                                                className="form-textarea"
                                                placeholder="Write your message"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="form-col">
                                        <div className="button-wrapper">
                                            <button className="submit-btn">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                {/* RIGHT:  STATS + DETAILS */}
                <div className="book-info-box" >
                    <div className="book-info" >
                        <div className="stats-box" >
                            <div className="stat" >
                                <span className="stat-num" >43 Live</span>
                                <span className="stat-label" >Consultant</span>
                            </div>

                            <div className="stat" >
                                <span className="stat-num" >22 Free</span>
                                <span className="stat-label" >Consultant</span>
                            </div>

                            <div className="stat" >
                                <span className="stat-num bold" >84 Booked</span>
                                <span className="stat-label" >84 Consultant</span>
                            </div>
                        </div>

                        <div className="contact-box" >
                            <div classname="contact-item" >
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgBtVRBbhpBEOyeXeWQXECKILmBltx5AtyTMH4B+Af+AeQFjl8AvIC1P2DyAsg5rOAQyQJH8l6iRAm7ne6ZHbSgBS5xSwOt2e6aruqeAfhPhkWb60BrQOoqgBYBlLLAOAWYekTh6+hufBJo8043gWjIbhNOGcEqSbD9dhWu3JZyzo9Ad5HoXkCIAwHxKtlivbK4RVniA+Gl/QY1z6clV97dq+ihpmu+TzOhkRLd/ErUoL4K42MFrRt6gEB9dmM+sF35Fs5NRZ5H9w7kTXR3dQpErLoIByzBDYh+RNemonXwXiN6Eym5Gt3WD/SSoFa2NWV6l06Xp5ou/fFohkwTIWkrhV7GEwcORKhmerVyhbRYl5k5gK0sVSOa7hF5XcWUagZGwVeXwQlDoUpE459bLMsSP09FLN3CyB2Cm0aHxJPO7Ghle9KpPJW/Pj2JwBxbPoxVUGxG7N/Zf+aX4IQpGS6nS25/Lj8vmaLsyxK65gtB6IK+Z3pJPGtEX8RDP9EuQLojXWSuWgZPluhAdqI/ubgXadLMwOcqRTWypamOCxBdUr4CmcCxqZpglB5cC87qZ7mhEXgddJYyD4qoV3Qhi2wTfOhxq4du/ozYCLbcFPHzkrtzDsTqaatx82eAKlE44r8pr9IrnybngPheXsvFlZxqFI53QGIiMNh2tx4bH/vHQB4bus+Do43wNgf2gETEBPBCfOJyi8AsCA0MIYUXhe+RAVuE04TsKYdgeRB5l+TpyOcWPrUPge55aAeQaYRI8u5AbwdiNYWzQGJyyymlCVpRxWKhLlUXxR8FMpVxmxU/ehwVp9t9TZ7N/gHL8UoKJi4IpQAAAABJRU5ErkJggg==" alt="location" />
                                <p>46, Archana Tower, C-sector, Indrapuri, Bhopal (MP) - 462022</p>
                            </div>

                            <div className="contact-item" >
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALASURBVHgB1VTNchJBEO6ejSkPVkmqYjQnodicA08QvJMwPIHkCcQnQJ8geQPIE7Cod/AJJHcouIWfssJFyyrZbbsXBodlWdTykq6CnZn++ebr7mmAhy5oFndpnd5mdDz0htEzYx+n2wC4T+vUzz2632akKNCH/Y8ts7ftOcCMCDzfx/dxYEr+fgCkwh1BAyi4XPtxgACUtp0Ohh4HxTIgVgOiFqNUnD0ajNzzauwNhe7ELdEke16J6ibZi2vWbWVn/KduqSkxoiAhA0ONENNRZ4Kgw5/U1C0W7PNxVutxtqiN/7Neq8zLjgJVs+uprEhDJHwZBdj39zry5TQVzJnUAJGaiE5zki0NTEB/jpJSQCeobgIg5xrpIAowW34Q8MycSQ2+zfGAKV+yX4rzXzdMiGuiEF9vALDiVllBFmko6idcvAUDbNm6DIMc9b2GDyipKZgUIqouf1IDZrkGYBR2/hCcq4BgxtTzL3reNcTI4zl0Q1t69HRxURj+Jm6J6SS7C3jflhzDDjG3jZMVg2UnSReUVlrCG6aRjnZQVCRdOwHCeICfwcqn5FgoEzn1pFGSJGsA+3OQPM8InJo5QyUvNuyUZhRk6uoap/HLiB/jNpYYPRi5uqqAroj88vP+J0/O5FFx39eZ4ox17w77H24EzFl0mBQ5twzGYwU6DpEnNrEAIlJccZLuMa9cAiqH2sg1CR8ls5IO++5jXmpw5+oCD8UKhzwTG/bNiG8swCoYr3lKvrKn5CSrK8ymRMBBAN8e97zO2uVknqGqJwJEbpxSRFVDeZdEAdQ2Q1EGfHteDgPExpin5a52jROVpBSQo14rH84cghx3V1u65uvJxZvJic7BHwjCX4jkn2eCDLLC0plbGroUjga6XdwYT3mvd9YgSRb1EUZBgSfnKbNLy4u3TGTaZpJe+D+LzKWk2fTf5Rdx3G+/XRIX3AAAAABJRU5ErkJggg==" alt="phone" />
                                <p>918447968825, 918959977624</p>
                            </div>

                            <div className="contact-item" >
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFvSURBVHgBzZRPTsJAFMa/N0xcmcgKdCWJuC83sAdQegPjCcQTUE4g3kBvULkAR8C9mNSVCi5w44qZ53ulTUjFoOLCl0w68/q93/szaempETWM5UsCqtjQ3JzOrBUYA5E6mJESIcXPTAsJdEPW963AqjmoSnmWvTRJv0PS7ioVHoIwA2NmiHZMRtaqiEKBQwUqXAebHEaBankBCJF3ZgpB7T658y6HWh5pwFewaTM6Il7ANEZji3dmWaitZlDWFnj0chCdlmGv4mPw0ItGteXxmHKACrYctZDNla+nzZPuUmVdLz7Zzt5Fs2rWFitsbnEuj4a0JK1QLNAst1QWI/Mh2LZeNb1y7KcKtQoNlNWrj29bDOrJ0nPsma9qS77n5nFnLdABbx50UR8PYj3Xx0nsQKGu3YdBp/ApVK6vHA6aNNtD3UjmEBtYwTH4Y/v/QMvMj0TULmbwW5P/QCAfRGK9M7GpyL0S7WMDc8w37Ez/A+XDssEVGMxqAAAAAElFTkSuQmCC" alt="email" />
                                <p>Email: info@mbbsway.in, support@mbbsway.in</p>
                            </div>
                        </div>

                        <div className="doctor-img-box" >
                            <div className="doctor-img-inner" >
                                <img src="https://mbbsway.in/static/media/homebookconsulationdr.3c9aa6b85318638b8ddd.png" alt="doctor" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >

    )
}

export default BookConsultation