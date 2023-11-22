<template>
    <div class="cs-features-area">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6 p-0">
                    <div class="cs-features-item bg-1">
                        <div class="content">
                            <h3>
                                <NuxtLink to="/services-details">Application Security</NuxtLink>
                            </h3>
                            <p>Lorem ipsum dolor sit amLorem ipsum dolor sit amet is consectetur adipiscing elit sed do.</p>
                            <NuxtLink to="/services-details" class="get-started-btn">GET STARTED</NuxtLink>
                        </div>
                        <div class="bg-icon">
                            <i class="fa-solid fa-lock"></i>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 p-0">
                    <div class="cs-features-item bg-2">
                        <div class="content">
                            <h3>
                                <NuxtLink to="/services-details">Cloud Security</NuxtLink>
                            </h3>
                            <p>Lorem ipsum dolor sit amLorem ipsum dolor sit amet is consectetur adipiscing elit sed do.</p>
                            <NuxtLink to="/services-details" class="get-started-btn">GET STARTED</NuxtLink>
                        </div>
                        <div class="bg-icon">
                            <i class="fa-solid fa-cloud"></i>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 p-0">
                    <div class="cs-features-item bg-3">
                        <div class="content">
                            <h3>
                                <NuxtLink to="/services-details">Infrastructure Security</NuxtLink>
                            </h3>
                            <p>Lorem ipsum dolor sit amLorem ipsum dolor sit amet is consectetur adipiscing elit sed do.</p>
                            <NuxtLink to="/services-details" class="get-started-btn">GET STARTED</NuxtLink>
                        </div>
                        <div class="bg-icon">
                            <i class="fa-solid fa-shield"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features'
}
</script>