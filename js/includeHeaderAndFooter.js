class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="special-header">
        <div id="navigation" class="navigation">
          <div class="alignment">
            <a href="#"><img class="logo" src="img/logo.png" alt="PANALOBET Logo" title="PANALOBET Logo"></a>
          </div>
          
          <div class="alignment">
            <a class="ctaButton" href="#" target="_blank"><span class="ctaButtonMes">Login</span></a>
            <a class="ctaButton" href="#" target="_blank"><span class="ctaButtonMes">Signup</span></a>
          </div>
        </div>
      </header>
    `;
  }
}




class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <section class="dualCompartmentStackedLayout"> 
          <div class="singleCompartmentContainer2">
            <div class="childElement">
              <p class="footerdescriptions2 mtb20"><span class="colorSec">SwertePlus</span></p>
              <a class="footerdescriptions2" href="#" target="_blank"><span class="colorPri">Swerte Plus Live</span></a>
            </div>
            <div class="childElement">
              <p class="footerdescriptions2 mtb20"><span class="colorSec">Payment Solution</span></p>
              <div class="logo-carousel2">
                <img src="img/homepageProviderImages1.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages2.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                <img src="img/homepageProviderImages3.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
              </div>
            </div>
            <div class="childElement2">
              <p class="footerdescriptions2 mtb20"><span class="colorSec">Information</span></p>
              <a class="footerdescriptions2" href="#" target="_blank"><span class="colorPri">Privacy Policy</span></a>
              <a class="footerdescriptions2" href="#" target="_blank"><span class="colorPri">Contact Us</span></a>
              <div class="logo-carousel2 mtb10">
                <img src="img/safe2.png" alt="PANALOBET" title="PANALOBET">
                <img src="img/safe3.png" alt="PANALOBET" title="PANALOBET">
              </div>
            </div>
            <div class="childElement">
              <p class="footerdescriptions2 mtb20"><span class="colorSec">Gaming License</span></p>
              <div class="logo-carousel2">
                <img src="img/gaming-license.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
              </div>
            </div>
          </div>
          <div class="solidDivider"></div>
          <div class="dualCompartment mtb20">
            <div class="alignment2">
              <a href="#"><img class="logo" src="img/logo.png" alt="PANALOBET Logo" title="PANALOBET Logo"></a>
            </div>
            <div class="dualCompartmentContainerStackedLayoutContents">
              <p class="footermetadescriptions">©2024 by Panalobet licensed by Philippine Amusement and Gaming Corporation</p>
            </div>  
          </div>

       
        </section>      
      </footer>
    `;

  }
}




customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
