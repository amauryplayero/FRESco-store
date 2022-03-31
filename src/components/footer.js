import React from 'react'

export default function footer() {
  return (
    <div id="footer">
       <nav id="footerLinksContainer">
            {/* <a>contact</a>
            <a>twitter</a>
            <a>github</a>
            <a>Linkedin</a> */}
            <div id="socialMediaIconContainer">
                <div>
                    <a href="https://www.linkedin.com/in/amaury-lopez-4048671a8/" target="_blank"><img src="https://i.imgur.com/6B8yhv9.png" class="socialMediaIcon"></img></a>
                    <a href="https://twitter.com/el_webdeveloper" target="_blank"><img src="https://i.imgur.com/Y9l7zH3.png" class="socialMediaIcon"></img></a>
                    <a href="https://github.com/amauryplayero" target="_blank"><img src="https://i.imgur.com/ltEVyuN.png" class="socialMediaIcon"></img></a>
                </div>
            </div>
            <div id="footerText">amaury.lopezdiaz@gmail.com</div>
            <br/>
            <div id="footerText">Brooklyn, NY</div>
       </nav>
    </div>
  )
}
