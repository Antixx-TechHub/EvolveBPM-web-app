<template>
    <div class="footer-wrap-area pt-100 pb-70">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-card">
                        <NuxtLink to="/" class="logo">
                            <img src="~/assets/images/white-logo.png" alt="logo">
                        </NuxtLink>
                        <p>Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do ipsum lorem dollar eiusmo. Lorem ipsum dolor sit amet, is sit consectetur adipiscing elit.</p>
                        <ul class="social-links">
                            <li><a href="#" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                            <li><a href="#" target="_blank"><i class='bx bxl-twitter'></i></a></li>
                            <li><a href="#" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
                            <li><a href="#" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-card ps-5">
                        <h3>Cryptocurrency</h3>

                        <ul class="footer-quick-links">
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> Buy Bitcoin</a></li>
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> Buy BNB</a></li>
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> Buy Ethereum</a></li>
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> Buy Ripple</a></li>
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> Buy Litecoin</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-card ps-5">
                        <h3>Resources</h3>

                        <ul class="footer-quick-links">
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> Trade</a></li>
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> Guides</a></li>
                            <li><a href="#"><i class="fas fa-angle-double-right"></i> Wallets</a></li>
                            <li><NuxtLink to="/faq"><i class="fas fa-angle-double-right"></i> FAQ</NuxtLink></li>
                            <li><NuxtLink to="/contact"><i class="fas fa-angle-double-right"></i> Contact</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-card">
                        <h3>Contact Info</h3>

                        <ul class="contact-links">
                            <li><span>Address:</span> 2750 Quadra Street Victoria Road, New York, Canada</li>
                            <li><span>Website:</span> <a href="https://envytheme.com/" target="_blank">EnvyTheme.com</a></li>
                            <li><span>Email:</span> <a href="mailto:admin@bionix.com">admin@bionix.com</a></li>
                            <li><span>Phone:</span> <a href="tel:1234567890">+123 456 7890</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-wrap-line">
            <img src="~/assets/images/cryptocurrency-home/footer/wrap-line.png" alt="image">
        </div>
        <div class="footer-wrap-shape">
            <img src="~/assets/images/cryptocurrency-home/footer/shape-1.png" alt="image">
        </div>
        <div class="footer-wrap-shape-2">
            <img src="~/assets/images/cryptocurrency-home/footer/shape-2.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterStyleTwo'
}
</script>