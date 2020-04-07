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
                new Contact("email", "dudesuperuser@gmail", "#Contact"),
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
                    appDomain: "#About",
                },
            },
            about: {
                children: [
                    new About("Combat", "Online PVP & PVP", "public/images/iphonepromax_img_0.png", "dark"),
                    new About("Craft", "Craft Equipment and Items", "public/images/iphonepromax_img_1.png", "primary"),
                ]
            },
        },
    },
    methods:{

    },
    mounted: function() {

    },
})

function Contact(name, value, link) {
    return {
        name: name,
        value: value,
        link: link,
    }
}

function About(title, subtitle, imageURL, color) {
    return {
        title: title,
        subtitle: subtitle,
        imageURL: imageURL,
        color: color,
    }
}