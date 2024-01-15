<template>
    <div :class="['navbar-area navbar-area-two', { 'is-sticky': isSticky }]">
        <div class="bionix-nav">
            <div class="container">
                <NuxtLink class="navbar-brand" to="/">
                    <img src="~/assets/images/logo.png" class="black-logo" alt="logo">
                    <img src="~/assets/images/white-logo.png" class="white-logo" alt="logo">
                </NuxtLink>
                <div>
                    <div class="menu2" @click="toggleMenu" :class="{ active: isMenuActive }">
                        <div class='top'></div>
                        <div class='middle'></div>
                        <div class='bottom'></div>

                    </div>
                    <div class="menu-box" :class="{ show: isMenuActive, active: isMenuActive }">
                        <NuxtLink class="navbar-brand" to="/">
                            <img src="~/assets/images/logo.png" alt="logo">
                        </NuxtLink>
                        <div class="menu2-items">
                            <div class="itemss">
                                <NuxtLink to="/about-us">
                                    About Us
                                </NuxtLink>
                            </div>
                            <div class="itemss">
                                <NuxtLink to="/contact-us">Contact Us</NuxtLink>
                            </div>

                            <details class="accordion">
                                <summary class="accordion-header">
                                    <div class="accordion-header-content">
                                        <!-- <h2 class="accordion-header-content-title">Title ipsum dolor</h2> -->
                                        <div class="itemss">
                                            Resources
                                        </div>
                                    </div>
                                </summary>
                                <div class="accordion-content">
                                    <li>
                                        <NuxtLink to="/blogs">Blogs</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/success-stories">Success Stories</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/case-studies">Case Studies</NuxtLink>
                                    </li>
                                </div>
                            </details>



                            <details class="accordion">
                                <summary class="accordion-header">
                                    <div class="accordion-header-content">
                                        <!-- <h2 class="accordion-header-content-title">Title ipsum dolor</h2> -->
                                        <div class="itemss">
                                            Products
                                        </div>
                                    </div>
                                </summary>
                                <div class="accordion-content">
                                    <li class="nav-item">
                                        <NuxtLink to="/irev">iRev</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/idata">iData</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/imedia">iMedia</NuxtLink>
                                    </li>
                                </div>
                            </details>

                            <details class="accordion">
                                <summary class="accordion-header">
                                    <div class="accordion-header-content">
                                        <!-- <h2 class="accordion-header-content-title">Title ipsum dolor</h2> -->
                                        <div class="itemss">
                                            Services
                                        </div>
                                    </div>
                                </summary>
                                <div class="accordion-content">
                                    <li>
                                        <nuxt-link to="/irev">
                                            <span> <img src="../assets/img/header-icon/keyword.png" alt=""> </span>
                                            iRev
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/iintel">
                                            <span> <img src="../assets/img/header-icon/audit.png" alt=""> </span>
                                            iIntel
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/imedia">
                                            <span> <img src="../assets/img/header-icon/building.png" alt=""> </span>
                                            iMedia
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/innovator">
                                            <span> <img src="../assets/img/header-icon/media.png" alt=""> </span>
                                            Innovator
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/techbase">
                                            <span> <img src="../assets/img/header-icon/analysis.png" alt=""> </span>
                                            TechBase
                                        </nuxt-link>
                                    </li>
                                </div>
                            </details>


                            <details class="accordion">
                                <summary class="accordion-header">
                                    <div class="accordion-header-content">
                                        <!-- <h2 class="accordion-header-content-title">Title ipsum dolor</h2> -->
                                        <div class="itemss">
                                            Company
                                        </div>
                                    </div>
                                </summary>
                                <div class="accordion-content">
                                    <li>
                                        <NuxtLink to="/careers">Careers</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/our-team">Our Team</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/team-details">Team Details</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/faqs">FAQ's</NuxtLink>
                                    </li>
                                </div>
                            </details>
                        </div>

                        <div class="banner-btn solution-video pb-70">
                            <NuxtLink to="/contact" class="default-btn-one">
                                Get A Free Trail <i class="fas fa-chevron-right"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { isActive: false },
                { isActive: false },
            ],
            isMenuActive: false,
            isDropdownOpen: false,
            isSticky: false,
        };
    },
    mounted() {
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if (scrollPos >= 100) {
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        handleDropdownItemClick() {
            // Logic to handle dropdown item click
            console.log('Dropdown item clicked!');
            // You can add further logic here
        },
        toggleCollapse(index) {
            this.$set(this.items, index, {
                isActive: !this.items[index].isActive,
            });
        },
    }
};
</script>

<style scoped>
.collapsible-dropdown .items i {
    transition: transform 0.3s;
}

.collapsible-dropdown .items i.up {
    transform: rotate(-90deg);
}
</style>