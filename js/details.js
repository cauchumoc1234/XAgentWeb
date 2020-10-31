window.onload = () => {
    let cls = document.getElementById('cls-nav');
    let dts = document.getElementById('dts-nav');
    let rvs = document.getElementById('rvs-nav');
    let content = document.getElementById('content-nav')
    cls.addEventListener('click', () => {
        document.getElementsByClassName('isDisplay')[0].classList.remove('isDisplay')
        cls.classList.add('isDisplay');
        content.innerHTML = collections;
    })
    dts.addEventListener('click', () => {
        document.getElementsByClassName('isDisplay')[0].classList.remove('isDisplay')
        dts.classList.add('isDisplay');
        content.innerHTML = details;

    })
    rvs.addEventListener('click', () => {
        document.getElementsByClassName('isDisplay')[0].classList.remove('isDisplay')
        rvs.classList.add('isDisplay');
        content.innerHTML = reviews;

    })
    const collections = `
    <div class="row justify-content-md-center"  id="cls">
        <div class="col-md-4">
            <img src="./image/p5-1.jpg" alt="First slide">
        </div>
        <div class="col-md-4">
            <img src="./image/p5.jpg" alt="First slide">
        </div>
        <div class="col-md-4">
            <img src="./image/p5-2.jpg" alt="First slide">
        </div>
    </div>
    `;
    const details = `
    <div class="row justify-content-md-center" id="dts">
        <div class="col-md-4">
            <br>
            <p>Stay comfortable while you train in the Men's Skechers Serpentine Wide Training Sneaker.</p>
        <ul>
            <li>Leather upper in a training sneaker style with a round toe</li>
            <li>Lace-up closure</li>
            <li>Padded collar and tongue for increased comfort</li>
            <li>Heel and tongue pull tabs</li>
            <li>Soft fabric lining with Memory Foam topped cushioned comfort insole</li>
            <li>Durable traction outsole</li>
            <li>51242 EW</li>
        </ul>
        </div>
    </div>
    `;
    const reviews = `
    <div id="rvs">
    <div class="row justify-content-md-center">
        <div class="col-md-5">
          <span class="heading">User Rating</span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <p>4.1 average based on 254 reviews.</p>
          <hr style="border:3px solid #f1f1f1">
        </div>
    </div>
   
    <div class="row justify-content-md-center">
        <div class="col-md-5">
            
            <div class="side">
              <div>5 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-5"></div>
              </div>
            </div>
            <div class="side right">
              <div>150</div>
            </div>
            <div class="side">
              <div>4 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-4"></div>
              </div>
            </div>
            <div class="side right">
              <div>63</div>
            </div>
            <div class="side">
              <div>3 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-3"></div>
              </div>
            </div>
            <div class="side right">
              <div>15</div>
            </div>
            <div class="side">
              <div>2 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-2"></div>
              </div>
            </div>
            <div class="side right">
              <div>6</div>
            </div>
            <div class="side">
              <div>1 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-1"></div>
              </div>
            </div>
            <div class="side right">
              <div>20</div>
            </div>
        </div>
    </div>
</div>
    `;
}