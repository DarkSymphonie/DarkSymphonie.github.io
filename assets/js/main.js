
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
            url: 'https://darksymphonie.wixsite.com/darksym/post/manage-your-blog-from-your-live-site',
            title: 'Print("Hello World")',
        },
        {
            url: 'https://darksymphonie.wixsite.com/darksym/post/design-a-stunning-blog',
            title: ' Home Lab Setup 2021',
        },
        {
            url: '',
            title: 'Comming Soon',
        },
        {
            url: '',
            title: 'Comming soon',
        },
        {
            url: '',
            title: 'Comming soon',
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
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://darksymphonie.wixsite.com/darksym');">

        <div class="blog-link">

            <h3><a href="https://darksymphonie.wixsite.com/darksym">Visit the blog for more posts</a></h3>            

        </div>

        
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}
