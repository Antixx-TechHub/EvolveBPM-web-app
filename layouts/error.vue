<template>
    <section class="error-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="error-content">
                        <img src="~/assets/images/404.png" alt="error">
    
                        <h3>Page Not Found</h3>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
    
                        <NuxtLink to="/" class="default-btn">Go to Home <span></span></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['error'],
        layout: 'error-layout'
    }
</script>