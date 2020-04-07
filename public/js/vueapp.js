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
                    new About("Combat", "Online PVP & PVE", "public/images/iphonepromax_img_0.png", "primary"),
                    new About("Craft", "Craft Equipment and Items", "public/images/iphonepromax_img_1.png", "dark"),
                    new About("Gameplay", "Tap To Play!", "https://apptrailers.itunes.apple.com/itunes-assets/PurpleVideo114/v4/1d/c2/26/1dc22638-ce4f-54ac-e1b9-4d33d02e334d/P64710217_default.m3u8", "info", true),
                ],
                iphone8: "public/images/iphone8max.png",
            },
        },
    },
    methods:{

    },
    mounted() {
        // LOAD STREAM VIDS
        let abouts = this.strings.about.children
        for (var i = 0; i < abouts.length; i++) {
            if (abouts[i].hasVideo) {
                var player = videojs("video-"+abouts[i].title)
                player.src({
                    type: "application/x-mpegURL",
                    src: abouts[i].link,
                })
            }
        }
        
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