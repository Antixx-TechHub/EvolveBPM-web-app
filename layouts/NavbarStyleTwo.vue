<template>
    <div :class="['navbar-area navbar-area-two', { 'is-sticky': isSticky }]">
        <div class="bionix-nav">
            <div class="container">
                <div>
                    <div class="menu2" @click="toggleMenu" :class="{ active: isMenuActive }">
                        <div class='top'></div>
                        <div class='middle'></div>
                        <div class='bottom'></div>

                    </div>
                    <div class="menu-box" :class="{ show: isMenuActive, active: isMenuActive }">
                        <div class="menu2-items">
                            <div class="itemss">
                                <NuxtLink to="/about-us">
                                    About Us
                                </NuxtLink>
                            </div>

                            <div class="itemss">
                                <NuxtLink to="/contact-us">Contact</NuxtLink>
                            </div>

                            <div id="app">
                                <div class="dropdown">
                                    <div class="itemss" @click="toggleDropdown">
                                        Resources <i class="fas fa-chevron-right"></i>
                                    </div>
                                    <div class="dropdown-content" v-if="isDropdownOpen" @click="handleDropdownItemClick">
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
                                </div>
                            </div>

                            <div class="itemss">Ipsum</div>
                            <div class="itemss">Magnam</div>
                            <div class="itemss">Quibusdam</div>
                            <div class="itemss">Nesciunt</div>
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
            isMenuActive: false,
            isDropdownOpen: false,
        };
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
        }
    }
};
</script>