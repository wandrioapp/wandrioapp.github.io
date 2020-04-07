"use strict";

var app = new Vue({
    el: "#app",
    data: {
        strings: {
            name: "WANDRIO: Event Horizon",
            copyright: "2020 Andy Zimmelman",
            navs: ["Home", "About", "Contact"],
            contacts: [
                new Contact("twitter", "@wandrioapp", "https://twitter.com/wandrioapp"),
                new Contact("email", "dudesuperuser@gmail", "mailto:dudesuperuser@gmail.com"),
            ],
            home:{
                header: "WANDRIO: Event Horizon",
                subtitles: [
                    "Free to Play Online Multiplayer Game.",
                    "Play, Explore, Craft, Upgrade!",
                ],
                appImageURL: "public/images/wandrio_v01.png",
                download: {
                    imageURL: "public/images/appstore_download_b.svg",
                    appDomain: "https://apps.apple.com/us/app/wandrio-event-horizon/id1488794205",
                },
            },
            about: {
                children: [
                    new About("Combat", "Online PVP & PVE!", "public/images/iphonepromax_img_0.png", "primary"),
                    new About("Create", "Buy or Create Equipment and Items!", "public/images/iphonepromax_img_1.png", "dark"),
                    new About("Gameplay", "Join and Battle Others!", "https://www.youtube.com/embed/WthMVHq9Hrw", "info", true),
                    new About("Host", "Create a Lobby to Play With Friends!", "https://www.youtube.com/embed/zwLJz166rDM", "success", true),
                    new About("Crafting", "Craft Better Equipment for Battle!", "https://www.youtube.com/embed/evGbIluyes8", "secondary", true),
                ],
                iphone8: "public/images/iphone8max.png",
            },
        },
    },
    methods:{

    },
    mounted() {

    },
})

function Contact(name, value, link) {
    return {
        name: name,
        value: value,
        link: link,
    }
}

function About(title, subtitle, link, color, hasVideo = false) {
    return {
        title: title,
        subtitle: subtitle,
        link: link,
        color: color,
        hasVideo: hasVideo,
    }
}