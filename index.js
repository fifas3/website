// 头部导航栏和返回按钮
const headerEL = document.querySelector("header");
const scrollToTop = document.querySelector(".scrollToTop")
window.addEventListener("scroll", () => {
    let height = headerEL.getBoundingClientRect().height;
    if (window.pageYOffset - height > 800) {
        if (!headerEL.classList.contains("sticky")) {
            headerEL.classList.add("sticky");
        }
    } else {
        headerEL.classList.remove("sticky")
    }
    // 杩斿洖椤堕儴
    if (window.pageYOffset > 2000) {
        scrollToTop.style.display = "block"
    } else {
        scrollToTop.style.display = "none"
    }
})

// 轮播图
// 引入元素
const glide = new Glide(".glide");
const captionsEl = document.querySelectorAll(".slide-caption");

// 监听事件
// mount.after轮播后  run.after加载后
glide.on(["mount.after", "run.after"], () => {
    // 获取实例
    const caption = captionsEl[glide.index];
    // 引入anime.js后传递配置选项
    anime({
        targets: caption.children,
        opacity: [0, 1],
        // duration规定完成过渡的时间
        duration: 400,
        // easing函数指定动画在不同点上的行进速度 linear（线性）是指整个动画以一个不变的速度行进
        easing: "linear",
        // 对caption的每一个children都轮流添加时间
        delay: anime.stagger(400, {
            start: 300
        }),
        // h1移动距离最大为40，h3移动距离为40到10之间
        translateY: [anime.stagger([40, 10]), 0]
    });
});

glide.on('run.before', () => {
    document.querySelectorAll(".slide-caption > *").forEach(el => {
        el.style.opacity = 0;
    });
});
glide.mount();

// 成功案例部分 给按钮注册事件
// 初始化isotope
const isotope = new Isotope(".cases", {
    // 根据行模式布局  占满每一行后再换下一行
    layoutMode: "fitRows",
    // 初始化目标
    itemSelector: ".case-item"
});

// const filterBtns = document.querySelector(".fileter-btns");
// // 注册点击事件
// filterBtns.addEventListener("click", e => {
//     let {
//         target
//     } = e;
//     // 获取筛选类别
//     const filterOption = target.getAttribute("data-filter");
//     if (filterOption) {
//         document.querySelectorAll(".fileter-btn.active").forEach(btn => btn.classList.remove("active"));
//         target.classList.add("active");

//         isotope.arrange({
//             filter: filterOption
//         });
//     }
// });
const filterBtns = document.querySelector(".filter-btns");
filterBtns.addEventListener("click", e => {
    let {
        target
    } = e;
    const filterOption = target.getAttribute("data-filter");
    if (filterOption) {
        document
            .querySelectorAll(".filter-btn.active")
            .forEach(btn => btn.classList.remove("active"));
        target.classList.add("active");
        isotope.arrange({
            filter: filterOption
        });
    }
});


// 控制哪些元素需要滑动的时候出现
const staggeringOption = {
    delay: 300,
    distance: "50px",
    duration: 500,
    easing: "ease-in-out",
    origin: "bottom",
}
ScrollReveal().reveal(".feature", {
    ...staggeringOption,
    interval: 350
    // 出现350之后再出现下一个 依次循环
});
ScrollReveal().reveal(".service-item", {
    ...staggeringOption,
    interval: 350
});
// 数字增长动画
const dataSectionEl = document.querySelector(".data-section");
ScrollReveal().reveal(".data-section", {
    beforeReveal: () => {
        anime({
            targets: ".data-piece .num",
            innerHTML: el => {
                return [0, el.innerHTML];
            },
            duration: 2000,
            round: 1,
            easing: "easeInExpo"
        });
        dataSectionEl.style.backgroundPosition = `center calc(50% - ${dataSectionEl.getBoundingClientRect().bottom
             / 5}px)`;
    }
});

// 背景视差滚动效果动画
window.addEventListener("scroll", () => {
    const bottom = dataSectionEl.getBoundingClientRect().bottom;
    const top = dataSectionEl.getBoundingClientRect().top;

    if (bottom > 0 && top < window.innerHeight) {
        dataSectionEl.style.backgroundPosition = `center calc(50% - ${bottom / 5}px)`;
    }
})


// 初始化scroll实例  选择nav下的以#开头的a
const scroll = new SmoothScroll("nav a[href*='#'],.scrollToTop a[href*='#']", {
    header: "header",
    offset: 80
});

document.addEventListener("scrollStart", () => {
    if (headerEL.classList.contains("open")) {
        headerEL.classList.remove('open');
    }
})

const exploreBtnEls = document.querySelectorAll(".explore-btn");
exploreBtnEls.forEach(exploreBtnEl => {
    exploreBtnEl.addEventListener("click", () => {
        scroll.animateScroll(document.querySelector('#about-us'))
    });
});



// 折叠按钮

const burgerEl = document.querySelector(".burger");
burgerEl.addEventListener("click", () => {
    headerEL.classList.toggle('open');
});