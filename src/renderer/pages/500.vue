<template>
    <article class="section h100vh relative">
        <section class="error-page">
            <h1 class="error-code"> 500 </h1>
            <div class="error-wrapper-message">
                <h2 class="error-message">500</h2>
            </div>
            <p>
                <a class="error-link" href="javascript:history.go(-1)">back</a>
            </p>
        </section>
    </article>
</template>

<style scoped>
    .error-page {
        color: #fff;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        font-family: 'SF UI Text', 'Helvetica Neue', 'Lucida Grande';
        text-align: center;
        padding-top: 20%;
    }
    .error-code {
        display: inline-block;
        font-size: 24px;
        font-weight: 500;
        vertical-align: top;
        border-right: 1px solid rgba(0, 0, 0, 0.298039);
        margin: 0px 20px 0px 0px;
        padding: 10px 23px;
    }
    .error-wrapper-message {
        display: inline-block;
        text-align: left;
        line-height: 49px;
        height: 49px;
        vertical-align: middle;
    }
    .error-message {
        font-size: 1rem;
        font-weight: normal;
        margin: 0px;
        padding: 0px;
    }
    .error-link {
        color: #00bcd4;
        font-weight: normal;
        text-decoration: none;
        font-size: 1rem;
        line-height: 3em;
    }
</style>
