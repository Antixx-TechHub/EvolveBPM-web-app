<template>
    <section class="footer-wrap-area with-black-color pt-100 pb-70">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-card">
                        <NuxtLink to="/" class="logo">
                            <img src="~/assets/images/white-logo.png" alt="logo">
                        </NuxtLink>
                        <p>Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do ipsum lorem dollar eiusmo. Lorem ipsum dolor sit amet, is sit consectetur adipiscing elit.</p>
                        <ul class="social-links">
                            <li><a href="https://www.facebook.com/" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                            <li><a href="https://www.twitter.com/" target="_blank"><i class='bx bxl-twitter'></i></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-card ps-5">
                        <h3>Services Links</h3>

                        <ul class="footer-quick-links">
                            <li>
                                <NuxtLink to="/services-details">
                                    <i class="fas fa-angle-double-right"></i> 
                                    Threat Hunter
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services-details">
                                    <i class="fas fa-angle-double-right"></i> 
                                    Incident Responder
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services-details">
                                    <i class="fas fa-angle-double-right"></i> 
                                    Secure Managed IT
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services-details">
                                    <i class="fas fa-angle-double-right"></i> 
                                    Compliance
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services-details">
                                    <i class="fas fa-angle-double-right"></i> 
                                    Cyber Security
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-card ps-5">
                        <h3>Quick Links</h3>

                        <ul class="footer-quick-links">
                            <li>
                                <NuxtLink to="/contact">
                                    <i class="fas fa-angle-double-right"></i>
                                    ontact Us
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about-one">
                                    <i class="fas fa-angle-double-right"></i> 
                                    About
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services-one">
                                    <i class="fas fa-angle-double-right"></i> 
                                    Services
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/faq">
                                    <i class="fas fa-angle-double-right"></i> 
                                    FAQ
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blog-one">
                                    <i class="fas fa-angle-double-right"></i> 
                                    Blog
                                </NuxtLink>
                            </li>
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
            <img src="~/assets/images/cyber-security-home/layer-shape.png" alt="image">
        </div>
    </section>
</template>

<script>
export default {
    name: 'FooterStyleThree'
}
</script>