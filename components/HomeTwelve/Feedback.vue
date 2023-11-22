<template>
    <div class="unique-feedback-area with-linear-gradient-color pt-100">
        <div class="container">
            <div class="section-title with-line-text-with-white-color">
                <span class="sub-title">CREATING FEEDBACK</span>
                <h2>These People Have Already Invested In Our Cryptocurrency</h2>
            </div>

            <div class="unique-feedback-slides">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :autoplayTimeout="7000"
                    :speed="1000"
                    :paginationEnabled="true"
                    :perPageCustom="[[0, 1], [768, 2], [1200, 2], [1550, 2]]"
                >
                    <slide>
                        <div class="unique-single-feedback">
                            <ul class="rating">
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                            </ul>
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div class="client-info">
                                <img src="~/assets/images/cryptocurrency-home/user1.jpg" alt="image">

                                <h3>Jason Roy</h3>
                                <span>Manager</span>
                            </div>
                            <div class="quote">
                                <img src="~/assets/images/cryptocurrency-home/quote.png" alt="image">
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="unique-single-feedback">
                            <ul class="rating">
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                            </ul>
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div class="client-info">
                                <img src="~/assets/images/cryptocurrency-home/user2.jpg" alt="image">

                                <h3>James Anderson</h3>
                                <span>Web Developer</span>
                            </div>
                            <div class="quote">
                                <img src="~/assets/images/cryptocurrency-home/quote.png" alt="image">
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="unique-single-feedback">
                            <ul class="rating">
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                            </ul>
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div class="client-info">
                                <img src="~/assets/images/cryptocurrency-home/user3.jpg" alt="image">

                                <h3>Jason Roy</h3>
                                <span>Manager</span>
                            </div>
                            <div class="quote">
                                <img src="~/assets/images/cryptocurrency-home/quote.png" alt="image">
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="unique-single-feedback">
                            <ul class="rating">
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                            </ul>
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div class="client-info">
                                <img src="~/assets/images/cryptocurrency-home/user1.jpg" alt="image">

                                <h3>James Anderson</h3>
                                <span>Web Developer</span>
                            </div>
                            <div class="quote">
                                <img src="~/assets/images/cryptocurrency-home/quote.png" alt="image">
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="unique-single-feedback">
                            <ul class="rating">
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                            </ul>
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div class="client-info">
                                <img src="~/assets/images/cryptocurrency-home/user2.jpg" alt="image">

                                <h3>Jason Roy</h3>
                                <span>Manager</span>
                            </div>
                            <div class="quote">
                                <img src="~/assets/images/cryptocurrency-home/quote.png" alt="image">
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="unique-single-feedback">
                            <ul class="rating">
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                                <li><i class='bx bxs-star'></i></li>
                            </ul>
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div class="client-info">
                                <img src="~/assets/images/cryptocurrency-home/user3.jpg" alt="image">

                                <h3>James Anderson</h3>
                                <span>Web Developer</span>
                            </div>
                            <div class="quote">
                                <img src="~/assets/images/cryptocurrency-home/quote.png" alt="image">
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feedback'
}
</script>