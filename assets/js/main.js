
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://www.nagekar.com/2017/02/trip-to-bramhatal-uttarakhand.html',
            title: 'Hello world, Welcome to my blog',
        },
        {
            url: 'https://www.nagekar.com/2017/08/privacy.html',
            title: ' My Homelab 2021',
        },
        {
            url: 'https://www.nagekar.com/2018/01/jagriti-yatra.html',
            title: 'Need to be filled',
        },
        {
            url: 'https://www.nagekar.com/2017/08/private-cloud-part-2.html',
            title: 'Need to be done',
        },
        {
            url: 'https://www.nagekar.com/2018/07/eli5-how-https-works.html',
            title: 'Need to be done',
        },
    ];

    let post_html = [];

    for(let post of posts) {

        let tags;
        
        if(post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://www.nagekar.com');">

        <div class="blog-link">

            <h3><a href="https://www.nagekar.com">Visit the blog for more posts</a></h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}
