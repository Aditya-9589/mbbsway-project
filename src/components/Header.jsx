
import React from "react";

const Header = () => {
    return (
        <div className="bg-white shadow-sm">
            <div className="container-topbar flex justify-between items-center py-4">

                {/* ---------------- LEFT: LOGO ---------------- */}
                <div className="flex-shrink-0 cursor-pointer">
                    <img
                        src="https://admin.mbbsway.in/storage/app//public/images/business_setting/WnzYcc2EswHr708J2uA39XAxdK4klwqSEjpTVjE6.png"
                        alt="Logo"
                        className="
                            w-40 
                            xl:w-40 
                            lg:w-36 
                            md:w-32 
                            sm:w-32 
                            max-[500px]:w-24 
                            h-auto object-contain
                        "
                    />
                </div>

                {/* ---------------- RIGHT: DESKTOP/TABLET CONTENT (visible above 900px) ---------------- */}
                <div
                    className="
                        flex items-center 
                        gap-10 xl:gap-10 lg:gap-6 md:gap-4 
                        max-[900px]:hidden
                    "
                >

                    {/* Live Counselling */}
                    <button
                        className="
                            header-btn
                            flex items-center gap-2 
                            px-4 py-2 
                            rounded-md text-white font-medium shadow-md 
                            hover:shadow-xl transition
                        "
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, #064266 0%, #064266 20%, #736C94 40%, #8E7196 60%, #C67A9A 80%, #E9809C 100%)",
                        }}
                    >
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFaSURBVHgB1VXRUcMwDFV6/DcjeISMkBHaCegGGaHHCEwATAAblA3SDZINEiYwUnk6RKIjdnP96LvT5Ww9P9myIhMtIMZ4YDvFOWTuka4FLw6OcAezaIWbo63inRFt2ErjL3EyyylzArymLMRGWk0ZpYCJlREPCXwJMmBNPfVvnDUHfD+LouhpAeA8Y7hb4pO52JoSIVy98KnPO0HAt6d0KHd2Xw/YgRytZtt6pAxIdb3w94ut5fS9ifgx+gipqrhoD0cygwa1PawIMECjUR0N0BlytyLATGdDN8b9B5AyHdkunRNzga5HCZ0SOr32+ynaHNXol+mlogol0O/OR/5Bzp6IHds+BZ9UkGRjj+kzc0ZK2F0V549MxFwFjmYhrWXbncW/j4raYNKwM5y8JxSLBR+O7zQ50bunsVSm2vi2jk/z27M9cb73lIv48/badNg0adoCrUHKJf+HbxOUbO4MmtYfAAAAAElFTkSuQmCC" className="w-5 h-5" />
                        <span>Live Counselling</span>
                    </button>

                    {/* Call Us */}
                    <div className="text-center">
                        <p className="flex items-center justify-center gap-2 font-medium text-[#333] text-sm">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOaSURBVHgB3VVNbBtVEJ6Zt+t15J9dR21iiFSvgaIqUYl9g1MdJA49EXODVtRuFEHEj71cyqmxOVEkso7SymlRaxtBOcZVD0gcsHvlgishIYSQtxKCIxYRqiLb+5hN48okjhraXtrvsvvevplvv29nZgGedOBBDxqnVr5HhNTO8rZ0pQOI9c7XH9UeC8HU23abAEzvXg7t856jCir8VsnVHolgGNMZO8GXhIa4TIAxQIkCsPDDtVzxgQRGxjagBwlwodO5brXgAXhtcTWncnIvVCCUbl750NqXYPz0So7lL7MJBjLAxaqrgtWpWh3veeTU520kMqWULSmhNPD/rcVLCZ/iNjid4RMyfeXiB/VBThrcHDlj2wHCUpAwEiC6PcbeBhXMhF2ZG5w5pBAcFgATCs1GVayyVe2X37XN61+81xonLEYVhAhipZBnF3YT6Ih5nUgGCdK/f2klIwKzOuvTBeUTmXsBv9as+C9VC2NCvjGtCWfGr5gxEI0MJ1y59H7pkIDmpEJGGLXX9xCwgZ2IAjipwLYdP1Wtpi6grhPqIVXMD1v53VWrfmSsn5zWyJnRhPki+LdVTih4Y1KQpzC9VwFBzSCEMFHKW8/zW40rlGBiNEj+BbtQKlmdYwplX9IUeVzD7ZjDAutMAlGBsyMUuHWPgC3JLSytzYe2lHYYKRYhcG5ezt2AETgW8reO+wlnNPWEtz55YcmJqqxAJXMPwVfrniXY/KMnDafnbvD30NmiWwHoz8E+SBaynagiHLb1zmBvQngK6H4vKsMBAbWb/XkTfuRWNULUX61f/m9Nj0Lg/Nn48DpI5AC49/tnT6O9ctbOa0Q2P+joipusr1vO7jNr+bVUDwRX1lbTKt3rkf0wclQsLl1scDGk2L92qN999cIOSeVc2XR70JAIJk8H7jVw/AKLpz97Z9+BR6M2p7Ru+gWVWkc1EX92zN8o58umtx92scLfyeTSdbhfbnGFxf3Mu3Fu3Yb/o8DDN/y2IaANLqwEN6/jA9nsA53hMXJnU7pzaa6Ybz8uZ1QkGyTqXdl/zquiAynw8CYfnhrzzT2vYv2oj8yYT2SeURHDPE7SO4lOfrpU5dJucbWhsTPKD6xgGP98cnWZ/S7cZdf/7oPDqpqA7iq4NNsDWUVOs7nVjSdHKDjw/+DPQtkUoFY4IOUNWrld6RK85H0mnywsFB9awTDuFq+d4IRZTu51L/9soBY8v5CFpxb/AhTwGviO+fbkAAAAAElFTkSuQmC" className="w-4 h-4" /> Call Us
                        </p>
                        <a href="tel:918447968825" className="text-[#333] text-sm font-medium">
                            918447968825
                        </a>
                    </div>

                    {/* Email */}
                    <div className="text-center">
                        <p className="flex items-center justify-center gap-2 font-medium text-[#333] text-sm">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIOSURBVHgBrVS9bhNBEJ6Z3cTCYHvvCXI9BbilsnsKXIOIJZojkZVcSeVziwS+yCGKgoJIR0d6CkOZDokH4B4ACdeE7DBz53Mic1IiOZ982m935+eb9e6ge/p2EwnGwBCwAAUgE5ZfwWUCoGOJxTy35MVqJjSxdYOJZ3a578KNhJeWiJdx/oMoyN1QzEKZp7ZFuKGrhRuCJUh/fNiN4Qa430/HHnhX/Jkwl9DCRy/2WFNc/PUxGRoKdWKbra/57tfDOKsK1InG4fkf+uwRHorGmUdMjKjLa3NEWi+cfYzT2ppvNwkyUR3WvZk+jiad5WBPonGn7mnaNPjAGcjuGe6eHe/siQ87kUmyiM4Ux6SKnPHdJuGpbIZNgOmzaDIsgz3fmuzUwU5FRNgy/K1W9+0v7+PvuhcYzOPYMliJT0WZvWjr3VCSJsKTwfZ+qHsXAH20AOcek6ODweiqXxmHlGjZy6UdHmyP7iD3HMGsYbDfINpsCb8L3DuSvWV7UZh/FEjdWjZU4M3+4LRhTLtBeNI0fFIT/lrWqmzlDPPPBoYqL1iJV+nLTIY+XINAqyRGvYd6iRFWhLNaJcmfomT1eOCoeDJWCcLqAcuj0zOE24DcgLyX4K/R8W95427RGcr2MW86lfL5Kpu3BzVG+GnXGWJDpK9hw7O8Srr014y81GW0B0gvwHzU5PNmJJlnlnH0D47FqnunEoQ0AAAAAElFTkSuQmCC" className="w-4 h-4" /> Email Us
                        </p>
                        <a href="mailto:info@mbbsway.in" className="text-[#333] text-sm block">
                            info@mbbsway.in
                        </a>
                        <a href="mailto:support@mbbsway.in" className="text-[#333] text-sm block">
                            support@mbbsway.in
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="text-center">
                        <p className="flex items-center justify-center gap-2 font-medium text-[#333] text-sm">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOCSURBVHgB3VVNbBtVEJ55L8bZrNfZIkQPIGWDBDewI8ERQbkg4OAWxLVxUJMSkBpvBELqgSyoEqJC3U1Q6tQNlQPiXPvAoRJSzYVDD63dU29xpFbtqd0eWqlt9k3nbeKtFTtu1Fs70luvZ+bNN/8L8LwTDhLaRd8WiibVJn0IAnOs7Gzf2qCImoBYC/+eX3smgNcOn5rcBAyQyCYA0rrYpU7bT2a2JYB348/+QKIf882i7xuIVQvBNgU2TCldQ+L4rb9c1Gc4ggkD1FRGYDuDYsxAUX3r8KmFPUXw7leBv0lQYkEYEXpXq3OLMIDeKS7OCSSP9W2OJrh8ruTuCvD+9FIRFJwDpDDaVB/9X3WbsAd6b9rPDytxka3ZktShxh9urS/ApzNL60TgKAL3wuqx4LPt/7Eie/dP5Zi7G8jHM35JgvS5LOH9R9F4o+qGmp/U4Muvl4oZxDFLQlsb1zxTgGNJhIw+AieLJd/eDeBCxQ1GuF6sa79qpAodfgIwKrDAxtCSwuvwMtwhDEpZoQFgX+reSw4MoCxi3WLdLMKhHgD20NHCNGEruSCxzoaRO4lMIbyzZ78dWJMsyZoltGOU6weQZ2Nw+vQTIwbK8zpFWQZ5eQjq8BQKVmbbnAGwpHR6ATgVlhDUfeGX37/5b0TAIoODAXjeL5WTi35pOd8PhNOqnaUeAE7HBoeH5S4jcRTw0DMlNBl8LC3gYvmHsnNm/sxCWogry/NlWvluxe/oLn9fyW81BbX6RCCacbeksNAN4AZuaEYPDowIarHcMSNcNwR5OiouPhlApY7uKOeeMwHsTLsHwBSqvhUeHIQdNMUgxd9mJ0zEQBvVXnJDUAwin2wbkyc6joCXYA8A57qhlflSDnahL04eddOo3hhBWDMFbei2Zv11Lfv3eGXO4r3EHdf+/OTRZPENdV5eSQ/looh4EEULBtAnv862+afYzbt0vJJXAAvIESneX92yBGA4UhNCCKCuOdgLXfuxMhdtGbV5xXhvnziy1hdgdEh+oHuLd/vodW81IKKcAtStGHLmPCDVet2biWfkpld2SKUKSkCBgz6gN5pSFIyfmP5ppwPJsrvz8+pt9n5fzKH48NeEcIfathCTN36GvN6n9ntHatCHkghShHfZHHLVG+z5BoFqRCQbKYwKPIMH462KHBHxEPEnkyGakYJ6BLK235sK4YWlxxBoMRDo2XKrAAAAAElFTkSuQmCC" className="w-4 h-4" /> WhatsApp
                        </p>
                        <a href="tel:918959977624" className="text-[#333] text-sm">
                            918959977624
                        </a>
                    </div>

                    {/* Book Appointment */}
                    <button
                        className="
                            header-btn
                            flex items-center gap-2 
                            px-4 py-2 
                            rounded-md text-white font-medium shadow-md 
                            hover:shadow-xl transition
                        "
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, #064266 0%, #064266 20%, #736C94 40%, #8E7196 60%, #C67A9A 80%, #E9809C 100%)",
                        }}
                    >
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEJSURBVHgB3VXrEYMgDA69DqAbOIqdpI7gBrqJ7SR2A7sBblA3oEkLdylKxEf/+N1xCPnyhCDAoWGM0TTWyn3yFcfLbIcmW86u4tHglME+GJRSqZ/BB3N7S3XOIKPfKJejWYPZDPZwwnGCP2PkQFngZ8m2HzguOFIro+87kxdMbxq8djhlrCdqQae2HOImvh3Jwc0uG4+jjde5uG55ILEOOrvMQxy2l7sOXuLgh2Qj9+EMJpKueItcXSXguQ4QAy8KvaJEHSzIwF3BytvvYfw8FHZ+wkwGoae6EnSqgI6eIhdm+jAJjSuXPVQqSxvgUqAFxACJpZF/QvHGBCfU1dR4HS+B+XZxAofHG5+gViKCcbHPAAAAAElFTkSuQmCC" className="w-5 h-5" />
                        <span>Book Appointment</span>
                    </button>

                </div>

                {/* ---------------- RIGHT: MOBILE CONTENT (<900px) ---------------- */}
                {/* <div className="md:hidden flex items-center gap-3"> */}
                    <div className="max-[900px]:flex hidden items-center gap-3">

                    {/* Apply Now */}
                    <button
                        className="
                            flex items-center gap-1 
                            px-3 py-1.5 
                            text-xs font-semibold text-white 
                            rounded-md shadow
                        "
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, #064266 0%, #736C94 40%, #E9809C 100%)",
                        }}
                    >
                        Apply
                    </button>

                    {/* Book */}
                    <button
                        className="
                            flex items-center gap-1 
                            px-3 py-1.5 
                            text-xs font-semibold text-white 
                            rounded-md shadow
                        "
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, #064266 0%, #736C94 40%, #E9809C 100%)",
                        }}
                    >
                        Book
                    </button>

                    {/* Menu Icon */}
                    <button
                        className="
                            flex items-center justify-center 
                            w-10 h-10 
                            rounded-md shadow 
                            text-white
                        "
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, #064266, #736C94, #E9809C)",
                        }}
                    >
                        ☰
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
