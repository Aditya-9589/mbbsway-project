import React from "react";

const TopBar = () => {
    return (
        <div className="hide-on-mobile w-full bg-[#064266] text-white text-base">

            {/* --- Centered Container --- */}
            <div className="container-topbar flex justify-between items-center py-3">
                {/* ---------------- LEFT SECTION ---------------- */}
                <div className="flex items-center gap-10">
                    {/* --- Apply Online --- */}
                    <div className="flex items-center gap-2 cursor-pointer ">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgBzZTtEYMgDIYzQkdwBEdgg7qB3aDdoG5QN5ANHIEROoIjMEIKZzjTFBTUH33vcp58PJAXAsC/ChGVi96FpXjAXhHsSSApWwq7EMxIkIvORUP/Uy7snoD59BUb21PfsAZTBLMCNnKYmDfROCU7+CFwGdr1BdKZqagNruFVChPz9Y8NlHrQ4KJeAVSxMcyGWk6wAt4koAHQs/ZwG96pnYzCjokWqQTUf6uIDS1spHpjkCCbgHIbK8gRzietGdTKybQJLwOloixsbFe4FE4Le4RLVXViwTIbIuBQAJa1BRsGOCJ/nQikxP8VjgjnFwzJ12DD9kuWAeZXS59iA4Mb/JaCM+RANS7Fo+FsYcar9wGavZNMX1vsbgAAAABJRU5ErkJggg=="
                            alt="Apply Online"
                            className="w-6 h-6"
                        />
                        <span>Apply Online</span>
                    </div>

                    {/* --- Student Login --- */}
                    <div className="flex items-center gap-2 cursor-pointer ">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACQSURBVHgB3ZSNCYAgEEaPaIBGcLNmaIQmtQ1sgy+NhJBM71QoHxwU3Pn8OSXqHgCzDYN8tKvhCDT4GI7gRJo/UGO+J7jOxIWiGvgBg3/EJNwzexKqN0mxICWJCiDrd4+OCZp3kQjRFtUYXCRA6zYNC5C4aMUCbv7/H7sxI2e3MbH2lWjzHzkrWO4FmRNaqRsOIT6oPNSQBtoAAAAASUVORK5CYII="
                            alt="Student Login"
                            className="w-6 h-6"
                        />
                        <span>Student Login</span>
                    </div>

                    {/* --- Request a Call Back --- */}
                    <div className="flex items-center gap-2 cursor-pointer ">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFBSURBVHgB5ZTtcYMwDIZFJ2AEb9BuUEbIBqETNBuUDTJC6AR0A4+QETxCuoFqt9LxWjUEOH61753PiZH0WB9A9G/EzJ5HXeMa4jrSXorBApcVdgUJ7Cmu1kDfljrXcTUpyEL7U1w3gZzvGb+CcdIlAeF5gB4cTUbqd5gKfjZN1GBdAYD1d5AJC6guARhvIGUqOiQbgAV9zuOktSWAptjA2TDlIL3KsoQsPtTuAXzeZW80QNy00TcLqKrqM24v8vdZdg38SIUbYUkOkFGgCUkW34Kz7L918JzLaxNnIAEvcQ/geOlMzwOHOQMcNzdh00gZa9p4Cw8j6ODccf4upN/rv0PSvKuFGLAH0Ppyym0R0heALfTM0VpJJgPnOhkbL+cNbVV07kzdLzx+snlzBgbi+Pd7oupoL/HPiPY8TlNPf1pfEei5rAUHMVYAAAAASUVORK5CYII="
                            alt="Request a Call Back"
                            className="w-6 h-6"
                        />
                        <span>Request a Call Back</span>
                    </div>
                </div>

                {/* ---------------- RIGHT SECTION ---------------- */}
                <div className="flex items-center gap-4">
                    <a href="#" target="_blank" rel="noreferrer" className="transform scale-110 hover:scale-125 transition">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPGSURBVHgBvVe/TxRBFP5mdm/h9IynFmIDV/gr0YhYiI2AicHOozEWFopEEwsjFpZ6u/oHSK1B/BOg1EqwUQtPTSxQE4FGLdQ1QIC93R3fm7s9DuHwljv4ks3Mzs7de2/m/fiewDr4bY+kLRHeUlA9ECJDSxnUAAW4Qql3gVBjYeiP7rJvTFXbK6oIziREMEJCe9AYPC2EnrOWIqsUmMs9HlSGzNGHtGiyYLTvh9G2D0bLboj0DtSC8PtPhO4cgslp+B++RMsugtBJOdeGqiow7wznlIDNc/NgK6zsaYjmJtSD0J1FYTxfVkQo2NtzA84qBdhyGPIhz63ek0h0HkUj4Y2/RWHiXfElCG9HJ6EV4Ds3ZZjnY090H4fVdQKbgcLrj/Cev+apSz7RwT5h8pshAlvQDZvH9peF++8/681q0UM9kOkUEl0dMNsP0KkeQTj1Df6nmXRCNI3Q5zOSrZdCXObNVndH+YfeRL5u4Qx2xpLVGla2C+zc5Aw9HOZmQvp9pCfY+kovV/RDxva7V1EP5h88WWGIaObIOgD/zUeYwh+UUCLLH4zDbWgEwh+/oP7MrbvHyLQUlYHRbVKyOc4vcmcKdQsnwQuPRvU8eS0L2bJnzX1yb2ldqIykIa0Xq2yOhX+OuhrYMUvImNgA2FJv7CUd9099v+ahNljnOsmy3UjevKAVqTVrxlaAhS/SMVc6lk8pN5j+huT1PrKuNsERJGLCe1bMDSbViG13LmmLec5rS2MTiIvYCnCBYViUXLhOsMVW7ym9xhGw6QroJMJILhcptVS8jo0krtgKSCrLDO/ZKx3vLJyrHcM81Iq4iO2E1vnT5IRjVCu+6CcCn4zV24m4iH8CdOfN17MwDraWBcu2FoqAbM2hV4kN5QGtxMWzaARkCGi3jorPVqAiWlwplfjKs4Cy2pYpQDSNQez5vVQIxrUC09+xVQgmZ/QoEI6avjKHEiLMBcSAFBGSKM555BDjel4vKistp3JmWwyDega5y+53iRO84CTiVaRSLi6iASWaDWGeGSHKGcQ/nybLnFCJfupi8v7kTNog4mgSd2MOx08joel50XpXUqPCE50Hknb/FA16YYn4W2Eij0ZDM+Ll/3WSpS5pRWMy6wzbQiDHc7aeSWq918B+xNzBLxUxpeDsyA3Y0ffVrdn94UEaWIl0pIhBhMPYy61ZbcpwTgko1pkjaOcuFimXHid1b6B6axZhgah6QL0CSnS9XlC8j5uhdyVZS3O6ShGi7Qqyjza2o3Qq/wNnV9o/RZJfpJQcEhxpVfAXYliSZx+aMRoAAAAASUVORK5CYII="
                            alt="Instagram"
                            className="w-5 h-5" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="transform scale-110 hover:scale-125 transition">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANXSURBVHgBxZe/UxNBFMff7l0OA2E8pAAbSQHqjI6AhVQCNlpCo60iY2GB4h+gudM/QGYsHcTaCloriBUWBpyhiDhjQgMU6DmAyuVu1/c2ufAjBDK5ED4zmd3b3cu+t/d29/sYHMEva8o0mHgqQQ4CY3FsikMFSACHSbngMzkjhDfdYj3OlBvLykwcjzB/CicdhNrwPidc+zBDSgzYSrwdlxpPYIfJGgzQujtB6zgPWvs5YGYzVIJY2wDhbIGfzoL39XvQ7IAv7Jj9aKKsAdv2ZEIysKiuX7wAxtBNYGcaIAzC2YTcXKpoCJNgNSVG7RIDyHPQ+GuqG7dvQKTvKtQSd+4L5JIL+QdfPAtWQhlA31znIkXLHhnoAaP/OpwEufklcD/OU9XBmOilmNDpSWO+xfAL69c6i5N7i8tqsPznQhi4GYNIfy/o3V24qldAZFbB+7ZiRljDFHbf4uQ9Z+w+DTYGeosvuslU6MkJCsaC1wpjqB8ouDEYBmmb6xHuDaOdQN7vjXKJLxJNzx9CGLZfvdvnCDtDO6sLvM9LoDNvnINkQ9ShXe6AeqHF2/PGgDbA8bDpoQd+Ngb1gre15itMxikITdXY3grVksN4oQgPlpoCLzp2r+x46i+gDAgFBRhNvg8JFRPaAG9hWZWNY3crPqr3wiEkcie/7NVMXhMDwnLqBlQVA3/efCgeVAF04BDH7YCDVLcCssq+Q6hqBRqf7HoYeF7tkX36QSgAslQ5+E1PErH+M6g6nEv2g2r++gbUC5JpBIbLIpfgzykDsmtQL/z0iioZiGndk/pEhImEjwpIoiBRYoE6saRTLgiy4zhq3N6bVvzeUmqL0DBn4C3WiIOaYJZuMncmWRxo3OkDVoMrmhwhnRlAClm1Y64QLWpCyUYwi0l56RVTw5tNR+1GGo5+tUTJ87z3DsdEhSpqG0atkQwWqmGHrtdkCmqNUsS7/2tHC1nSvsRk0560GIME1cl7EqlhPwPFkTvzCbx0Nv8swW5OjFpBf2lq9nJyHAsywgwM0S51gNZGqVllxtCZ4uNe97OroII7r5Qc/NmxF6PlU7OAvyjVfcwVoCDXw4L7fU4X7oNoJclpiSEo2yXwYRzYDYVVOQ46XXF8BmeejUk+wWinleE/pgRcErQOD5EAAAAASUVORK5CYII="
                            alt="Facebook"
                            className="w-5 h-5" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="transform scale-110 hover:scale-125 transition">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR8SURBVHgBtVe/bxxFFH4zu7dngy3OSWGnwVeEHwKEkxR2msRBICwonDSkDEQWBQXC/APcHf8AESXIckSHK5sCKShIcdLgBttIQQqJxDlNnCJwURw5t3c7w/ve7hyXu1t7o5yftNrZ3dl537z53jdvFO1h/5YXC4EyX1iyZ0ipIr8qUgazRDVl7Uak7IoxzeWR8mfVtL4qxXExp6JFdnqG+mOXGyas9ALSBWCn9P289XSJPxRUPiBv4ih540fIGztEqjBMWcxsPyBT26Ho1hY1/7jjXtcoMpWhyqeXUgE8riyUrKIy2v6rL1Nw9hSpgTw9j5naI2qsrreAKEvlF0tzlS4AmDl5+hu0g/cnKTf1FvXTwtXfqXF9I36IzJcuEgIAa+5rs46w56aPUXD6BB2ENdZuUvjLGpo15sRxcMLHk6eisuIV9t8+Ks6bWLu1P3sOAoDgxF5mHu5Q48oa2SehPAczk6RHD3NU3yRTvUfNv+4Wciq/yJ/eUcJ4bf5Gxxc+/0iIhh+f/PAzmfv/dA2uC0M0cOFDUi8N9XRu6yHtfrdMlknoALdHFGPvfrsk/RpGj+icbp7DB8zesVwNBJQ//y4hC2SQyTcEnM8ZAXbXV65TmgF4mnM3tjfxirR91ZzXZNVZPHivj3fMdFiyACYMVorJeVJmHm1tM6HWu5xjfc12HDWATeOSVxyLwZA3rXngY+KwR0j918bJ59m7JQFlB5LIhJxa0da9Vl+kGkgmY40eovzsaUoz8CFGYIuabwV5OXa4Z+f8zEkm3ZiEPrzym/TLTR+PZ/zTDbIgHNidRAQTAci9DDxKTADsa8HsKQl9c/MOZ8dNYbPjAyKTpFbs/MIHmRVT/snUiQfMz8Z8qGOd7z9o8cEkhMOyCHGfwXlmADCveISdTsUgln6N+YDZukzhZUlbxr4AECcceseH+o9XJTKOD8gK8OFAAcDy5997KhWFD0mm7KUPfQMABaN6LLEuFYPpEy1QjpAHAgAaL0qXaLyA4FQEIMcHpCT2kr4DwMw7ZbZdmkU5Z6ZaoLLyITOAXhrfLs0Ivc8a31LOpauZxtWGSOLlBu9laRqPjaUz9OADpBj90/jQtsvWtLZKtuKIxaWX7afxnaEHH9xOKqA2b3cD4DJNJk20qS1FqwKAw9jlPKPGd4bePnzc2l0RhU4+RLfuyl2RWdZN60ttFjFSW/+f3Qjns2h8e+jBFzfzFqhkbGSS++bxmUGPlC/WuCa4ho5hIiRoNzduk2bVw5VF410R4/5pv4iXI6rGWzeWNJ49XR7kmlCK0l0uyyIuSrlZyLPe+6xuB2FwnixpzeOiFAAkDQfLF6t8k1odu12vaue5nbfxCb4Gk1PSUweTR5WFMldeJbRBrIA3mrTiM6th7cOVGy11tJYqw6W5svvefTT7emGebwBRcEA8Ls28URzNsoGBpkSc69gnhNyxdNf4qgx9NZd+NHMmnOCzAteLH1MfjPN91TfhJ4NZDqddQLhst6TPcccJSqKyn0FduX+VPV8bsvqSQqal2H9PvVEbjGh36AAAAABJRU5ErkJggg=="
                            alt="Twitter"
                            className="w-5 h-5" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="transform scale-110 hover:scale-125 transition">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOHSURBVHgBxVe9TxRBFH8zu7d4cMQFCrDxrgA10QhYSCVggyU00CoSCwsU/wC9Xf0DJLE0iDUVWJqY8FFh4YEJBWriHQ1QoGsA9e52Z3xv7vaEnPeVPeGXbGbefOy8mXnvN+8xKIPv1qxpMPFQghwExmLYFIMqIAEcJuWax+SCEO58i3U/WWosK7FwLMS8WVx0EOqD11mRsf+lSJECB/GXU1LjcewwWYMBWncnaNFzoHW0AjOboRqInT0QzgF4mylwP37xmx3whB2x702XVODQnolLBhbV9QvnwRi+AexMAwSBcPYhu5QoKMIkWE3xCbtIAdo5aPw51Y2h6xDquwL1RGbpA2SX13KCJx75J6EUoDvXuUjQsYcGesDovwb/A9nVDci8XaWqgzbRSzahk6Qxz2J4w/rVzsLi7vpnNVj+zkAQcDMCof5e0Lu78FQvg0hug/tpywyxhlnsvslp95yx2zTYGOgtTMwsJwIvTiBjzO9awRjuBzJuNIZBcnM9xN0R1BNo90etXOJEQtPjuxAEh89eHdsIO0Oe1QXu+w3QmTvFQbJh6tAuReGkoMU6csqANsCRbHpI4GcjFSem595B+s0KyHRAu2hvy1WYjHEsTNXY0VZ2kpfcAZeIBY2TiCaQAmZhszG96knIhGQndJ/EjPVC1QqQ8TSgBdcbHE4ZVZ8A4eeLOUWd4cmxY7LvZkQ2xlAf1IKaFCBukGVkolrAqzL6e6v9ZX2uoHFyFE9lVNVdUqIG1HQCpUAM6j+rtdL3qRvh6XuBAEihFlEyKGaWp2OGdM1qkEtB7H7zq47OJfuKnBz1dvdAr6BA44OxmuSSCmCYRkAPWucSvCUSvNQOnBS8zS1VMhDzuiv16RATcQ8fGYkBiQoWqBNLevXoPQ+Koy+t+HGgHjSChjkDb7HGHYwJFsl9MgvLhYHGrT51p0FBG6E40wdFyKodc4VwISaUbByzmIS7uWVqSCQ6xm5Eq/TVEyo8z+3e4ZioUEW5YdgaT2KhGtIYv2WXE1BvqIj473/tcD5LOuY1+/aMxRjEqa4eFrKJgNdAdpRZWFHBjJIl2M3xCcvvL07Nns5MYUFKmL4i2sUoaO2tFXmisCilZejrXmoblHHn6NnBz448mSidmvn4haG6h7kC5MP1oEB/X9JF5k64muS0SBEM2yXwERzYDflTqQRiVxyfxJUXI5JPM/K0EvgDqZNszoHkqRkAAAAASUVORK5CYII="
                            alt="LinkedIn"
                            className="w-5 h-5" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="transform scale-110 hover:scale-125 transition">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQjSURBVHgBvVfNbxtFFH8zu3bskgqnPSS9xEYqpAJEGg741CYSUhEXkgs9AlFEJQ5A+AewzT9ABTdQlIpjTgkHDgikJj2VA2mRKlGB1KSXtoe2WzVtYnt3pu/3vOuvdFN/xP1Jq53dnX3ze2/e1yg6AA+Ly5mkMl9bsjOkVI5f5agDWCJPWXstUHbNGH91pPjFVtxcFbNwLqGCZV50hg4Hl6qmUnoekX0Edgo/L1pHF/hDRg0lyZk8SU72BDljx0hljlInMHfvk/F2KLi5Tf4//0evPQpMabj0+cVYAk9KSwWrqIix+8Y4JWfPkEoNUT8w3mOqrm/WiShLxVcKC6V9BKA5Ofp7jJPn3qNE/m06TFTW/6bqxrXaQ2C+iSwhBLDnrjabMHti+jQlz75Lg0D16g2q/H4VQ499Ygo+ofHkqKCIxd13Tg5scSCRf0u2lqCoGlrGQInHa3MLD0e+/LhjR+sVdq9Cuz+skC1XqGr0iJvQ/hyRJmjfvjgm+Ww2/+Zt+VGwV26M26BSSaLQafWrw+SeGidnIkuKx81znMnXyf/rBrnKX3TJqll4gnMq2yLMPNqhvV9+I8vh1I12FJIL2PuD7TukWYHUhTlCSEdwcmNCQJEz7XKyOR0xbgZCB4vr0WOUODsleUDAGsSFpmXrgIANr/KvVyQfVFjW0Ll8fZ4ePR6aw+bghBl5OXa8RVjw73ZtvfPvsymzsj1yHZAX8A1zIMvJnZB/Rdb1/1rm6Uxd2ZwbJwz7L0Kf45RPf1yR+E2wVu5ENk5EXak4n5E51AOwNTBteeVPMbN91LmftMOlPgDH8tm8yPmIcfhKt+jJAhFSF2YlfGFiONoub81LJcARRFSuNp4tdY2+tmDvp1XRHlvh5t+k5HT3abwvAlhcyvYH+Z5TeE8EkFoRhsmPzki894NYAjArcoG590CyYTOOfHWeOoEJw1NqRAy0IZKU157zUTCA8sofnNPvyvcX1QUQjuahgOFfkVUrwQ1irFQIz9VW3eKcnA3u3Se3kSLZoaYkvpFwUJR6BWoMZLUQ4EIlhImuu5aCdUV6Blo2p1WYLfXJh7XGEuU4NOdBVpCKlw7NjciYGJcE1V4/ApYn88msoiHJcEPyEAumeW+by+YgAL9AQwI4pvKaHinOe9wTXJZstrZBgwbKPMBRdCld7wmtmuebB1OjAxrk4n6tNHuaDyoYCIF0cX6Lb/KizF1rdWOTDhvSETfkltLhKanlYPK4tFTk9F7A2OUwhPeqtk6pWyA0K2tX2JFrDY61VDpaWChG3/cfzb5bWuQbSGQiImgsnVEczTojg0gJONbRE6IbChsSj6/S8LcL8UezCLvcqgd8VuBq9ykdAjje111T+SzdyeF0HxFu2y3pOZ44SaFVXgRkV56/xStfHrb6okKkxeAZKZzH3/fNJe0AAAAASUVORK5CYII="
                            alt="YouTube"
                            className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
