window.addEventListener('load', function(){
    console.log("load：リソースファイルを全て読み込みました。");
    const top_title = document.querySelector('#top_title');
    const sub_title = document.querySelector('#sub_title');
    const ttl = document.querySelector('#ttl');
    top_title.style.opacity = 1;
    sub_title.style.opacity = 1;
    ttl.style.opacity = 1
    animate.style.paddingTop = 0;

});

window.addEventListener('scroll',function(){
    const scroll = window.pageYOffset;
    console.log(scroll);
    // const oomidasi = document.querySelector('#oomidasi');
    // const komidasi = document.querySelector('#komidasi');
    // const ttl = document.querySelector('#ttl');
    const profile = document.querySelector('#profile2');
    const animate = document.querySelector('#animate');

    const works = document.querySelector('#works2');
    
    if(scroll > 70){
        // oomidasi.style.opacity = 1;
        // komidasi.style.opacity = 1;
        // ttl.style.opacity = 1

        // animate.style.paddingTop = 0;
    }


    if(scroll > 400){
        works.style.opacity = 1;
        works.style.paddingTop = "100px";
    }

    if(scroll > 800){
        profile.style.opacity = 1;
        profile.style.paddingTop = "100px";
        // profile.style.paddingTop = "30px";
    }
    // else{
    //     oomidasi.style.opacity = 0;
    // }
});